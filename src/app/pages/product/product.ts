import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="space-y-16 lg:space-y-24 py-12 pb-24">
      
      <!-- HERO -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
            <mat-icon class="mat-icon text-sm">terminal</mat-icon>
            <span>Proprietary Software Layer · Agricultural Operating System</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F4D3D] tracking-tight leading-tight">
            FluxForge Farm OS: Precision Engineering for African Agribusiness
          </h1>
          <p class="text-base sm:text-lg text-[#5B6560] leading-relaxed">
            Engineered from scratch by software engineers who know agriculture. Farm OS bridges the gap between raw field operations, fluctuating ingredient commodity pricing in Saki, and verifiable supply-chain traceability.
          </p>
          <div class="pt-2 flex flex-wrap gap-4">
            <a
              routerLink="/farm-os"
              class="px-6 py-3.5 bg-[#C9A227] hover:bg-[#B5901F] text-[#1F4D3D] font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <mat-icon class="mat-icon text-base">play_arrow</mat-icon>
              <span>Launch Live Working Demo</span>
            </a>
            <a
              routerLink="/farm-os"
              [fragment]="'calculator'"
              class="px-6 py-3.5 bg-[#1F4D3D] hover:bg-[#16392D] text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-2"
            >
              <mat-icon class="mat-icon text-base">calculate</mat-icon>
              <span>Test Feed Calculator Tool</span>
            </a>
          </div>
        </div>
      </section>

      <!-- THREE CORE MODULES ARCHITECTURE -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Module 1 -->
          <div class="bg-white rounded-2xl p-7 border border-[#E5E0D5] space-y-4 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-xl bg-[#1F4D3D]/10 text-[#1F4D3D] flex items-center justify-center">
              <mat-icon class="mat-icon text-2xl">calculate</mat-icon>
            </div>
            <div>
              <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Module 01</span>
              <h3 class="font-serif text-xl font-bold text-[#1A1A1A] mt-1">Feed-Cost Calculator &amp; Formulator</h3>
            </div>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              Dynamically evaluates local ingredient prices in Saki (yellow maize, soybean meal, plantain flour, fishmeal). Solves crude protein constraints to produce exact nutritional rations while benchmarked against expensive imported commercial pellets.
            </p>
            <ul class="text-xs text-[#1F4D3D] space-y-1.5 font-medium pt-2 border-t border-[#E5E0D5]">
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>Weighted Crude Protein (CP%) engine</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>Per-kg Cost vs Commercial Pellet comparison</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>One-click batch formulation saving</span>
              </li>
            </ul>
          </div>

          <!-- Module 2 -->
          <div class="bg-white rounded-2xl p-7 border border-[#E5E0D5] space-y-4 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-xl bg-[#C9A227]/20 text-[#1F4D3D] flex items-center justify-center">
              <mat-icon class="mat-icon text-2xl">qr_code_2</mat-icon>
            </div>
            <div>
              <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Module 02</span>
              <h3 class="font-serif text-xl font-bold text-[#1A1A1A] mt-1">Provenance &amp; QR Traceability</h3>
            </div>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              Every crop cycle, pond batch, and poultry flock receives a verifiable identifier. Scannable QR codes allow wholesale off-takers, supermarkets, and export reviewers to trace inputs, feed composition, harvest date, and technician logs.
            </p>
            <ul class="text-xs text-[#1F4D3D] space-y-1.5 font-medium pt-2 border-t border-[#E5E0D5]">
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>End-to-end timeline audit trail</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>Digital provenance certificates</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>Instant QR lookup by batch ID</span>
              </li>
            </ul>
          </div>

          <!-- Module 3 -->
          <div class="bg-white rounded-2xl p-7 border border-[#E5E0D5] space-y-4 hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-xl bg-[#4A6670]/15 text-[#4A6670] flex items-center justify-center">
              <mat-icon class="mat-icon text-2xl">monitoring</mat-icon>
            </div>
            <div>
              <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Module 03</span>
              <h3 class="font-serif text-xl font-bold text-[#1A1A1A] mt-1">Estate Analytics &amp; FCR Metrics</h3>
            </div>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              Tracks the Feed Conversion Ratio (FCR)—the holy grail of aquaculture economics. By logging daily feed mass against periodic fish sampling, the team identifies feed wastage, water parameter anomalies, or growth stagnancy early.
            </p>
            <ul class="text-xs text-[#1F4D3D] space-y-1.5 font-medium pt-2 border-t border-[#E5E0D5]">
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>FCR variance tracking per earthen pond</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>Projected biomass calculation</span>
              </li>
              <li class="flex items-center gap-2">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check</mat-icon>
                <span>Multi-tier cashflow timeline calendar</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <!-- INTERFACE PREVIEW GALLERY (SIMULATED PRODUCT MOCKUP FRAMES) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-widest">Interface Previews</span>
          <h2 class="font-serif text-3xl font-bold text-[#1F4D3D] mt-1">
            Built for Real Field Technicians in Saki
          </h2>
          <p class="text-sm text-[#5B6560] mt-2">
            No bloated enterprise software or generic foreign templates. Clean, high-contrast, mobile-responsive interfaces optimized for low-bandwidth rural deployments.
          </p>
        </div>

        <!-- Mockup 1: Feed Calculator UI Preview -->
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-6 lg:p-10 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E0D5] gap-2">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <span class="w-3 h-3 rounded-full bg-green-400"></span>
              <span class="text-xs font-mono text-[#5B6560] ml-2">FluxForge Farm OS / Feed Formulator Engine</span>
            </div>
            <span class="text-xs font-semibold text-[#1F4D3D] bg-[#1F4D3D]/10 px-2.5 py-1 rounded-md">
              Live Interactive in Demo
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-[#1F4D3D]">
                Dynamic Ration Optimization
              </h3>
              <p class="text-xs sm:text-sm text-[#5B6560] leading-relaxed">
                Field operators enter local ingredient wholesale rates from Saki Central Market. The engine calculates the precise unit price per kilogram, displays the weighted Crude Protein target (e.g. 42% CP for Catfish Grower), and shows immediate economic savings versus commercial pellets.
              </p>
              <div class="p-4 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-2 text-xs">
                <div class="flex justify-between text-[#1A1A1A]">
                  <span>Local Formula Cost:</span>
                  <span class="font-bold text-[#1F4D3D]">₦1,045 / kg</span>
                </div>
                <div class="flex justify-between text-[#1A1A1A]">
                  <span>Imported Pellet Benchmark:</span>
                  <span class="font-bold text-red-700">₦1,850 / kg</span>
                </div>
                <div class="flex justify-between text-[#C9A227] font-bold border-t border-[#E5E0D5] pt-1.5">
                  <span>Gross Cost Savings:</span>
                  <span>43.5% (₦805 / kg)</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 bg-[#F7F5F0] rounded-xl p-5 border border-[#E5E0D5]">
              <!-- Mock preview table -->
              <div class="text-xs space-y-2 font-mono">
                <div class="text-[11px] text-[#5B6560] flex justify-between uppercase font-bold border-b border-[#E5E0D5] pb-2">
                  <span>Ingredient</span>
                  <span>Quantity</span>
                  <span>Rate (₦/kg)</span>
                  <span>CP%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-white/60">
                  <span class="font-sans font-medium text-[#1A1A1A]">Soya Meal (Defatted)</span>
                  <span>340 kg</span>
                  <span>₦1,150</span>
                  <span class="font-bold text-[#1F4D3D]">44%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-white/60">
                  <span class="font-sans font-medium text-[#1A1A1A]">Marine Fishmeal (Local)</span>
                  <span>260 kg</span>
                  <span>₦2,200</span>
                  <span class="font-bold text-[#1F4D3D]">65%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-white/60">
                  <span class="font-sans font-medium text-[#1A1A1A]">Yellow Maize (Oyo North)</span>
                  <span>180 kg</span>
                  <span>₦580</span>
                  <span class="font-bold text-[#1F4D3D]">9%</span>
                </div>
                <div class="flex justify-between py-1 border-b border-white/60">
                  <span class="font-sans font-medium text-[#1A1A1A]">Plantain Peel Meal (Estate)</span>
                  <span>160 kg</span>
                  <span>₦220</span>
                  <span class="font-bold text-[#1F4D3D]">7%</span>
                </div>
                <div class="flex justify-between py-1">
                  <span class="font-sans font-medium text-[#1A1A1A]">Bone Meal &amp; Premix</span>
                  <span>60 kg</span>
                  <span>₦850</span>
                  <span class="font-bold text-[#1F4D3D]">12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mockup 2: Traceability QR Card Frame -->
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-6 lg:p-10 shadow-sm space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E0D5] gap-2">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <span class="w-3 h-3 rounded-full bg-green-400"></span>
              <span class="text-xs font-mono text-[#5B6560] ml-2">FluxForge Farm OS / Lot Traceability Audit Engine</span>
            </div>
            <span class="text-xs font-semibold text-[#1F4D3D] bg-[#1F4D3D]/10 px-2.5 py-1 rounded-md">
              Verifiable Cryptographic Proof
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-4">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 bg-[#1F4D3D] text-[#C9A227] font-mono text-xs font-bold rounded">
                  BATCH FF-2026-CAT-001
                </span>
                <span class="text-xs text-[#5B6560]">African Catfish (Clarias gariepinus)</span>
              </div>
              
              <!-- Timeline Steps -->
              <div class="space-y-3 border-l-2 border-[#1F4D3D]/30 pl-4 py-1 text-xs">
                <div class="relative">
                  <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#1F4D3D]"></span>
                  <p class="font-bold text-[#1A1A1A]">01. Nursery Hatch &amp; Sorting</p>
                  <p class="text-[#5B6560]">5,000 fingerlings sorted at Saki Agro Hatchery Bay A. Avg weight 5.2g.</p>
                </div>
                <div class="relative">
                  <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#1F4D3D]"></span>
                  <p class="font-bold text-[#1A1A1A]">02. On-Site Pellet Regimen (42% CP)</p>
                  <p class="text-[#5B6560]">Formulation #FF-AQ-01 commenced. Zero synthetic antibiotics utilized.</p>
                </div>
                <div class="relative">
                  <span class="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#C9A227]"></span>
                  <p class="font-bold text-[#1A1A1A]">03. Mid-Cycle Sampling (Earthen Pond 2)</p>
                  <p class="text-[#5B6560]">Mean sample 385g. Feed conversion ratio steady at 1.15.</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#F7F5F0] rounded-2xl border border-[#E5E0D5] text-center space-y-3">
              <div class="w-24 h-24 bg-white p-2 rounded-xl border border-[#E5E0D5] flex items-center justify-center shadow-sm">
                <mat-icon class="mat-icon text-6xl text-[#1F4D3D]">qr_code</mat-icon>
              </div>
              <div>
                <p class="font-mono text-xs font-bold text-[#1F4D3D]">SCAN FOR PROVENANCE</p>
                <p class="text-[11px] text-[#5B6560]">Authenticated by FluxForge Farm OS</p>
              </div>
              <a
                routerLink="/farm-os"
                [fragment]="'traceability'"
                class="text-xs font-bold text-[#C9A227] hover:underline"
              >
                Lookup this batch in live demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- BOTTOM BANNER TO DEMO -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-[#1F4D3D] text-[#F7F5F0] rounded-2xl p-10 max-w-4xl mx-auto space-y-6 border border-[#16392D] shadow-xl">
          <h2 class="font-serif text-3xl font-bold">Experience the Full Working Application</h2>
          <p class="text-sm text-[#F7F5F0]/80 max-w-xl mx-auto">
            Test the live feed-cost calculator, search batch traceability records, and view estate data.
          </p>
          <a
            routerLink="/farm-os"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A227] hover:bg-[#B5901F] text-[#1F4D3D] font-bold text-sm rounded-xl shadow-md transition-colors"
          >
            <mat-icon class="mat-icon text-lg">rocket_launch</mat-icon>
            <span>Open FluxForge Farm OS Module</span>
          </a>
        </div>
      </section>

    </div>
  `,
})
export class Product {}
