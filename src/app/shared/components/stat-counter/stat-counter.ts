import { ChangeDetectionStrategy, Component, signal, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="bg-[#1F4D3D] text-[#F7F5F0] py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-md border border-[#16392D]">
      <div class="max-w-7xl mx-auto">
        
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
            Empirical Targets & Operational Track Record
          </span>
          <h2 class="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#F7F5F0]">
            Ground-Truth Metrics for Saki Agribusiness
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
          
          <!-- Stat 1: 10 Acres -->
          <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A227]/40 transition-colors">
            <div class="w-10 h-10 mx-auto rounded-lg bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center mb-3">
              <mat-icon class="mat-icon text-xl">landscape</mat-icon>
            </div>
            <div class="font-serif text-3xl sm:text-4xl font-extrabold text-[#C9A227] tracking-tight">
              {{ landAcres() }}
              <span class="text-xl font-medium text-[#F7F5F0]/80">Acres</span>
            </div>
            <p class="text-xs uppercase tracking-wider text-[#F7F5F0]/70 font-semibold mt-1">
              Integrated Footprint
            </p>
            <p class="text-[11px] text-[#F7F5F0]/60 mt-1">
              5 cocoa/plantain · 3 fishery+mill · 2 poultry
            </p>
          </div>

          <!-- Stat 2: 33 Direct Jobs -->
          <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A227]/40 transition-colors">
            <div class="w-10 h-10 mx-auto rounded-lg bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center mb-3">
              <mat-icon class="mat-icon text-xl">groups</mat-icon>
            </div>
            <div class="font-serif text-3xl sm:text-4xl font-extrabold text-[#C9A227] tracking-tight">
              Up to {{ jobsTarget() }}
            </div>
            <p class="text-xs uppercase tracking-wider text-[#F7F5F0]/70 font-semibold mt-1">
              Direct Jobs by Year 3
            </p>
            <p class="text-[11px] text-[#F7F5F0]/60 mt-1">
              Feed millers, pond techs, farmhands
            </p>
          </div>

          <!-- Stat 3: 2 STEMM Categories -->
          <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A227]/40 transition-colors">
            <div class="w-10 h-10 mx-auto rounded-lg bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center mb-3">
              <mat-icon class="mat-icon text-xl">biotech</mat-icon>
            </div>
            <div class="font-serif text-3xl sm:text-4xl font-extrabold text-[#C9A227] tracking-tight">
              2 STEMM
            </div>
            <p class="text-xs uppercase tracking-wider text-[#F7F5F0]/70 font-semibold mt-1">
              Pillars Addressed
            </p>
            <p class="text-[11px] text-[#F7F5F0]/60 mt-1">
              Science (nutrition/soil) &amp; Technology (OS)
            </p>
          </div>

          <!-- Stat 4: 20+ Shipped Web Projects -->
          <div class="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C9A227]/40 transition-colors">
            <div class="w-10 h-10 mx-auto rounded-lg bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center mb-3">
              <mat-icon class="mat-icon text-xl">terminal</mat-icon>
            </div>
            <div class="font-serif text-3xl sm:text-4xl font-extrabold text-[#C9A227] tracking-tight">
              {{ shippedProjects() }}+
            </div>
            <p class="text-xs uppercase tracking-wider text-[#F7F5F0]/70 font-semibold mt-1">
              Shipped Projects
            </p>
            <p class="text-[11px] text-[#F7F5F0]/60 mt-1">
              By founder via FluxForge Software Co.
            </p>
          </div>

        </div>

      </div>
    </div>
  `,
})
export class StatCounter implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  landAcres = signal<number>(10);
  jobsTarget = signal<number>(33);
  shippedProjects = signal<number>(20);

  private timerId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Smooth animated counter on mount
      this.jobsTarget.set(1);
      this.shippedProjects.set(1);

      let step = 0;
      this.timerId = setInterval(() => {
        step++;
        if (step <= 33) {
          this.jobsTarget.set(step);
        }
        if (step <= 20) {
          this.shippedProjects.set(step);
        }
        if (step >= 33 && this.timerId) {
          clearInterval(this.timerId);
          this.timerId = null;
        }
      }, 40);
    }
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
