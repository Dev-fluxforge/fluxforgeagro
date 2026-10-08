import { Injectable, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  public token = signal<string | null>(null);
  public user = signal<{ email: string; name: string; role: string } | null>(null);
  public isAuthenticated = computed(() => !!this.token());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedToken = localStorage.getItem('fluxforge_auth_token');
      const savedUser = localStorage.getItem('fluxforge_auth_user');
      if (savedToken) {
        this.token.set(savedToken);
        if (savedUser) {
          try {
            this.user.set(JSON.parse(savedUser));
          } catch {
            this.user.set(null);
          }
        }
      }
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/login', { email, password }).pipe(
      tap((res) => {
        this.token.set(res.token);
        this.user.set(res.user);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('fluxforge_auth_token', res.token);
          localStorage.setItem('fluxforge_auth_user', JSON.stringify(res.user));
        }
      })
    );
  }

  logout(): void {
    this.token.set(null);
    this.user.set(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('fluxforge_auth_token');
      localStorage.removeItem('fluxforge_auth_user');
    }
  }

  getAuthHeaders(): Record<string, string> {
    const t = this.token();
    return t ? { Authorization: `Bearer ${t}` } : {};
  }
}

