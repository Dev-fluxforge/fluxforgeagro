import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <header class="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E5E0D5]">
      <!-- Top credibility notice strip -->
      <div class="bg-[#1F4D3D] text-[#F7F5F0] text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
        <span>Saki, Oyo State, Nigeria · 10-Acre Integrated Agritech Initiative</span>
        <span class="hidden md:inline text-white/40">|</span>
        <span class="hidden md:inline text-[#C9A227]/90 font-normal">Cocoa & Plantain · Fishery & Feed Mill · Poultry · Farm OS</span>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand Identity -->
          <a routerLink="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1F4D3D] rounded-lg p-1">
            <div class="w-11 h-11 rounded-xl bg-[#1F4D3D] flex items-center justify-center text-[#C9A227] shadow-sm group-hover:bg-[#16392D] transition-colors">
              <mat-icon class="mat-icon text-2xl">eco</mat-icon>
            </div>
            <div class="flex flex-col">
              <span class="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1F4D3D] leading-tight">
                FluxForge
              </span>
              <span class="text-[11px] font-medium tracking-wider text-[#5B6560] uppercase">
                Agro-Enterprise Initiative
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1A1A1A]">
            <a
              routerLink="/"
              routerLinkActive="text-[#1F4D3D] font-semibold border-b-2 border-[#1F4D3D]"
              [routerLinkActiveOptions]="{ exact: true }"
              class="py-1 hover:text-[#1F4D3D] transition-colors"
            >
              Overview
            </a>
            <a
              routerLink="/problem-solution"
              routerLinkActive="text-[#1F4D3D] font-semibold border-b-2 border-[#1F4D3D]"
              class="py-1 hover:text-[#1F4D3D] transition-colors"
            >
              Problem & Model
            </a>
            <a
              routerLink="/product"
              routerLinkActive="text-[#1F4D3D] font-semibold border-b-2 border-[#1F4D3D]"
              class="py-1 hover:text-[#1F4D3D] transition-colors"
            >
              Farm OS
            </a>
            <a
              routerLink="/impact"
              routerLinkActive="text-[#1F4D3D] font-semibold border-b-2 border-[#1F4D3D]"
              class="py-1 hover:text-[#1F4D3D] transition-colors"
            >
              Impact & Journal
            </a>
            <a
              routerLink="/team"
              routerLinkActive="text-[#1F4D3D] font-semibold border-b-2 border-[#1F4D3D]"
              class="py-1 hover:text-[#1F4D3D] transition-colors"
            >
              Founder & Team
            </a>
            <a
              routerLink="/invest"
              routerLinkActive="text-[#1F4D3D] font-semibold border-b-2 border-[#1F4D3D]"
              class="py-1 hover:text-[#1F4D3D] transition-colors"
            >
              Partner / Invest
            </a>
          </nav>

          <!-- Action CTA & Farm OS Portal -->
          <div class="hidden sm:flex items-center gap-3">
            <a
              routerLink="/farm-os"
              class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1F4D3D] bg-[#C9A227] hover:bg-[#B5901F] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227]"
            >
              <mat-icon class="mat-icon text-sm">precision_manufacturing</mat-icon>
              <span>Live Farm OS Demo</span>
            </a>
          </div>

          <!-- Mobile Hamburger Button -->
          <button
            type="button"
            (click)="toggleMobileMenu()"
            class="lg:hidden p-2 rounded-md text-[#1F4D3D] hover:bg-[#E5E0D5]/50 focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
            aria-label="Toggle navigation menu"
          >
            <mat-icon class="mat-icon text-2xl">
              {{ mobileMenuOpen() ? 'close' : 'menu' }}
            </mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation -->
      @if (mobileMenuOpen()) {
        <div class="lg:hidden bg-[#F7F5F0] border-b border-[#E5E0D5] px-4 pt-3 pb-6 space-y-3">
          <a
            routerLink="/"
            (click)="closeMobileMenu()"
            routerLinkActive="text-[#1F4D3D] font-bold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="block py-2 text-base text-[#1A1A1A] hover:text-[#1F4D3D]"
          >
            Overview
          </a>
          <a
            routerLink="/problem-solution"
            (click)="closeMobileMenu()"
            routerLinkActive="text-[#1F4D3D] font-bold"
            class="block py-2 text-base text-[#1A1A1A] hover:text-[#1F4D3D]"
          >
            Problem & Circular Model
          </a>
          <a
            routerLink="/product"
            (click)="closeMobileMenu()"
            routerLinkActive="text-[#1F4D3D] font-bold"
            class="block py-2 text-base text-[#1A1A1A] hover:text-[#1F4D3D]"
          >
            Farm OS Architecture
          </a>
          <a
            routerLink="/impact"
            (click)="closeMobileMenu()"
            routerLinkActive="text-[#1F4D3D] font-bold"
            class="block py-2 text-base text-[#1A1A1A] hover:text-[#1F4D3D]"
          >
            Impact & Farm Journal
          </a>
          <a
            routerLink="/team"
            (click)="closeMobileMenu()"
            routerLinkActive="text-[#1F4D3D] font-bold"
            class="block py-2 text-base text-[#1A1A1A] hover:text-[#1F4D3D]"
          >
            Founder & Track Record
          </a>
          <a
            routerLink="/invest"
            (click)="closeMobileMenu()"
            routerLinkActive="text-[#1F4D3D] font-bold"
            class="block py-2 text-base text-[#1A1A1A] hover:text-[#1F4D3D]"
          >
            Investment Roadmap
          </a>
          
          <div class="pt-4 border-t border-[#E5E0D5] flex flex-col gap-2">
            <a
              routerLink="/farm-os"
              (click)="closeMobileMenu()"
              class="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1F4D3D] bg-[#C9A227] hover:bg-[#B5901F] rounded-lg shadow-sm"
            >
              Open Live Farm OS Demo
            </a>
            <a
              routerLink="/invest"
              (click)="closeMobileMenu()"
              class="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#F7F5F0] bg-[#1F4D3D] hover:bg-[#16392D] rounded-lg"
            >
              Partner / Submit Grant Inquiry
            </a>
          </div>
        </div>
      }
    </header>
  `,
})
export class Navbar {
  mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
