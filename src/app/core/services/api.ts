import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import {
  JournalPost,
  ContactSubmission,
  FeedBatch,
  FeedFormulaCalculation,
  FarmOSDashboardSummary,
  IngredientInput,
} from '../models/types';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  // Cached signals for responsive UI
  public posts = signal<JournalPost[]>([]);
  public batches = signal<FeedBatch[]>([]);
  public summary = signal<FarmOSDashboardSummary | null>(null);
  public loading = signal<boolean>(false);

  // Journal
  getJournalPosts(category?: string): Observable<JournalPost[]> {
    const url = category && category !== 'All' ? `/api/journal?category=${encodeURIComponent(category)}` : '/api/journal';
    this.loading.set(true);
    return this.http.get<JournalPost[]>(url).pipe(
      tap((data) => {
        this.posts.set(data);
        this.loading.set(false);
      }),
      catchError((err) => {
        console.warn('Could not fetch posts, fallback:', err);
        this.loading.set(false);
        return of(this.posts());
      })
    );
  }

  getJournalPost(slug: string): Observable<JournalPost | null> {
    return this.http.get<JournalPost>(`/api/journal/${slug}`).pipe(
      catchError((err) => {
        console.warn('Error fetching post:', err);
        return of(null);
      })
    );
  }

  createJournalPost(post: Partial<JournalPost>): Observable<JournalPost> {
    const headers = this.auth.getAuthHeaders();
    return this.http.post<JournalPost>('/api/journal', post, { headers });
  }

  deleteJournalPost(id: string): Observable<{ message: string }> {
    const headers = this.auth.getAuthHeaders();
    return this.http.delete<{ message: string }>(`/api/journal/${id}`, { headers });
  }

  // Contact
  submitContact(data: {
    name: string;
    email: string;
    organization?: string;
    interestType: string;
    message: string;
  }): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>('/api/contact', data);
  }

  getContactSubmissions(): Observable<ContactSubmission[]> {
    const headers = this.auth.getAuthHeaders();
    return this.http.get<ContactSubmission[]>('/api/contact', { headers }).pipe(
      catchError((err) => {
        console.warn('Error fetching inquiries:', err);
        return of([]);
      })
    );
  }

  updateContactStatus(id: string, status: 'new' | 'reviewed' | 'responded'): Observable<{ success: boolean }> {
    const headers = this.auth.getAuthHeaders();
    return this.http.patch<{ success: boolean }>(`/api/contact/${id}`, { status }, { headers });
  }

  // Farm OS
  getFarmOSSummary(): Observable<FarmOSDashboardSummary> {
    return this.http.get<FarmOSDashboardSummary>('/api/farm-os/summary').pipe(
      tap((sum) => this.summary.set(sum)),
      catchError((err) => {
        console.warn('Error fetching summary:', err);
        return of({
          activeBatches: 3,
          averageFeedCostPerKg: 1045,
          commercialBenchmarkFeedCostPerKg: 1850,
          overallSavingsPercentage: 43.5,
          projectedBiomassKg: 8400,
          directJobsPipeline: {
            year1Target: 12,
            year3Target: 33,
            currentVolunteersAndEngineers: 5,
          },
        });
      })
    );
  }

  getBatches(): Observable<FeedBatch[]> {
    return this.http.get<FeedBatch[]>('/api/farm-os/batches').pipe(
      tap((data) => this.batches.set(data)),
      catchError((err) => {
        console.warn('Error fetching batches:', err);
        return of(this.batches());
      })
    );
  }

  getBatch(identifier: string): Observable<FeedBatch | null> {
    return this.http.get<FeedBatch>(`/api/farm-os/batches/${encodeURIComponent(identifier)}`).pipe(
      catchError((err) => {
        console.warn('Batch lookup error:', err);
        return of(null);
      })
    );
  }

  createBatch(batch: Partial<FeedBatch>): Observable<FeedBatch> {
    return this.http.post<FeedBatch>('/api/farm-os/batches', batch);
  }

  calculateFeed(
    ingredients: IngredientInput[],
    targetCategory: FeedFormulaCalculation['targetCategory'],
    batchName?: string
  ): Observable<FeedFormulaCalculation> {
    return this.http.post<FeedFormulaCalculation>('/api/farm-os/calculate', {
      ingredients,
      targetCategory,
      batchName,
    });
  }
}
