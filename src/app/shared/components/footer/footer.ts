import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <footer class="bg-[#1F4D3D] text-[#F7F5F0] pt-16 pb-12 border-t border-[#16392D]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          <!-- Column 1: Brand & Mission -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-[#C9A227] flex items-center justify-center text-[#1F4D3D] font-bold">
                <mat-icon class="mat-icon text-xl">eco</mat-icon>
              </div>
              <div>
                <span class="font-serif text-2xl font-bold tracking-tight text-[#F7F5F0]">FluxForge</span>
                <p class="text-xs text-[#C9A227] uppercase tracking-wider font-medium">Agro-Enterprise Initiative</p>
              </div>
            </div>
            
            <p class="text-sm text-[#F7F5F0]/80 leading-relaxed max-w-md">
              A 10-acre circular agribusiness in Saki, Oyo State integrating cocoa, plantain, aquaculture,
              on-site feed manufacturing, and precision livestock management via FluxForge Farm OS.
            </p>

            <div class="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-[#F7F5F0]/75 space-y-1">
              <div class="flex items-center gap-2 text-[#C9A227] font-semibold">
                <mat-icon class="mat-icon text-sm">info</mat-icon>
                <span>Land Status Notice</span>
              </div>
              <p>
                10-acre agricultural parcel formally requested from the Traditional Council &amp; His Royal Highness The Okere of Saki. Ecological and topographical surveys are complete; statutory customary allocation is under active review.
              </p>
            </div>
          </div>

          <!-- Column 2: Core Focus Areas -->
          <div class="space-y-3">
            <h4 class="font-serif text-base font-semibold text-[#C9A227]">The Enterprise</h4>
            <ul class="space-y-2 text-sm text-[#F7F5F0]/80">
              <li>Cocoa &amp; Plantain (5 Acres)</li>
              <li>Fishery &amp; Feed Mill (3 Acres)</li>
              <li>Poultry Production (2 Acres)</li>
              <li>
                <a routerLink="/product" class="hover:text-[#C9A227] transition-colors flex items-center gap-1">
                  <span>FluxForge Farm OS</span>
                  <mat-icon class="mat-icon text-xs">arrow_forward</mat-icon>
                </a>
              </li>
              <li>
                <a routerLink="/problem-solution" class="hover:text-[#C9A227] transition-colors">
                  Circular By-Product Loop
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Navigation & Proof -->
          <div class="space-y-3">
            <h4 class="font-serif text-base font-semibold text-[#C9A227]">Navigation</h4>
            <ul class="space-y-2 text-sm text-[#F7F5F0]/80">
              <li><a routerLink="/" class="hover:text-[#C9A227] transition-colors">Executive Summary</a></li>
              <li><a routerLink="/impact" class="hover:text-[#C9A227] transition-colors">Impact &amp; 33 Direct Jobs</a></li>
              <li><a routerLink="/impact" class="hover:text-[#C9A227] transition-colors">Farm Journal Updates</a></li>
              <li><a routerLink="/team" class="hover:text-[#C9A227] transition-colors">Founder &amp; Track Record</a></li>
              <li><a routerLink="/invest" class="hover:text-[#C9A227] transition-colors">Investment Roadmap</a></li>
              <li><a routerLink="/farm-os" class="hover:text-[#C9A227] transition-colors">Farm OS Live Prototype</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Location -->
          <div class="space-y-3">
            <h4 class="font-serif text-base font-semibold text-[#C9A227]">Headquarters</h4>
            <div class="space-y-2 text-sm text-[#F7F5F0]/80">
              <p class="flex items-start gap-2">
                <mat-icon class="mat-icon text-sm text-[#C9A227] mt-0.5">place</mat-icon>
                <span>Saki, Oyo State, Nigeria</span>
              </p>
              <p class="flex items-start gap-2">
                <mat-icon class="mat-icon text-sm text-[#C9A227] mt-0.5">person</mat-icon>
                <span>Badmus Muhammad Adeniyi</span>
              </p>
              <p class="flex items-start gap-2">
                <mat-icon class="mat-icon text-sm text-[#C9A227] mt-0.5">school</mat-icon>
                <span>Computer Science, LAUTECH</span>
              </p>
              <p class="flex items-start gap-2">
                <mat-icon class="mat-icon text-sm text-[#C9A227] mt-0.5">email</mat-icon>
                <span>contact&#64;fluxforge.ng</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F5F0]/60 gap-4">
          <p>© 2026 FluxForge Agro-Enterprise Initiative. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <span>STEMM Fields: Science &amp; Technology</span>
            <span class="text-white/20">|</span>
            <a href="/sitemap.xml" target="_blank" class="hover:text-[#C9A227] transition-colors">Sitemap</a>
            <span class="text-white/20">|</span>
            <a routerLink="/admin" class="hover:text-[#C9A227] transition-colors flex items-center gap-1 opacity-70 hover:opacity-100" title="Admin Portal">
              <mat-icon class="mat-icon text-xs">lock</mat-icon>
              <span>Operator Access</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  `,
})
export class Footer {}
