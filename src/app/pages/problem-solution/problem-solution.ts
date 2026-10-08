import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CircularEstateDiagram } from '../../shared/components/diagram/circular-estate-diagram';

@Component({
  selector: 'app-problem-solution',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, CircularEstateDiagram],
  template: `
    <div class="space-y-16 lg:space-y-24 py-12 pb-24">
      
      <!-- HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
            <mat-icon class="mat-icon text-sm">troubleshoot</mat-icon>
            <span>Structural Macro Analysis &amp; Engineered Response</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F4D3D] tracking-tight leading-tight">
            The Double Vulnerability in Nigerian Agribusiness — And Our Circular Solution
          </h1>
          <p class="text-base sm:text-lg text-[#5B6560] leading-relaxed">
            Nigerian food systems suffer from acute import dependency for aquaculture feed, alongside an accelerating youth unemployment crisis. FluxForge resolves both through on-site agro-processing and circular estate integration.
          </p>
        </div>
      </section>

      <!-- THE PROBLEM SECTION: 3 KEY STATS LAYOUT -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-8 sm:p-12 shadow-sm space-y-10">
          
          <div class="border-b border-[#E5E0D5] pb-6">
            <span class="text-xs font-semibold text-[#1F4D3D] uppercase tracking-wider">Empirical Challenge</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-1">
              Three Broken Economics in Today's Agribusiness Value Chain
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Stat 1: 1.7M Graduates -->
            <div class="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-xl bg-[#1F4D3D]/10 text-[#1F4D3D] flex items-center justify-center">
                  <mat-icon class="mat-icon text-2xl">school</mat-icon>
                </div>
                <div>
                  <span class="font-serif text-4xl sm:text-5xl font-extrabold text-[#1F4D3D] tracking-tight block">
                    ~1.7M
                  </span>
                  <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider block mt-1">
                    Graduates / Year in Nigeria
                  </span>
                </div>
                <p class="text-xs text-[#5B6560] leading-relaxed">
                  Approximately 1.7 million tertiary graduates flood the Nigerian labor market annually, facing an economy where formal white-collar absorption is below 15%. Agriculture offers enormous potential, but remains repelled by rudimentary, non-technological labor models.
                </p>
              </div>
              <div class="pt-4 border-t border-[#E5E0D5] text-[11px] text-[#1F4D3D] font-medium flex items-center gap-1.5">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check_circle</mat-icon>
                <span>Solution: 33 direct STEMM agro-tech jobs created in Saki</span>
              </div>
            </div>

            <!-- Stat 2: 60-70% Cost is Feed -->
            <div class="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-xl bg-[#C9A227]/20 text-[#1F4D3D] flex items-center justify-center">
                  <mat-icon class="mat-icon text-2xl">pie_chart</mat-icon>
                </div>
                <div>
                  <span class="font-serif text-4xl sm:text-5xl font-extrabold text-[#C9A227] tracking-tight block">
                    60–70%
                  </span>
                  <span class="text-xs font-bold text-[#1F4D3D] uppercase tracking-wider block mt-1">
                    Aquaculture Operating Cost
                  </span>
                </div>
                <p class="text-xs text-[#5B6560] leading-relaxed">
                  Fish nutrition consumes the overwhelming majority of operational expenses on Nigerian fish farms. Because feed prices are tied to volatile commercial distributors, smallholder and commercial fish farmers operate at razor-thin margins and frequent insolvency.
                </p>
              </div>
              <div class="pt-4 border-t border-[#E5E0D5] text-[11px] text-[#1F4D3D] font-medium flex items-center gap-1.5">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check_circle</mat-icon>
                <span>Solution: On-site mill cuts feed cost by 35%–42%</span>
              </div>
            </div>

            <!-- Stat 3: ~1/3 Feed Imported -->
            <div class="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-xl bg-[#4A6670]/15 text-[#4A6670] flex items-center justify-center">
                  <mat-icon class="mat-icon text-2xl">flight_takeoff</mat-icon>
                </div>
                <div>
                  <span class="font-serif text-4xl sm:text-5xl font-extrabold text-[#4A6670] tracking-tight block">
                    ~1/3
                  </span>
                  <span class="text-xs font-bold text-[#1F4D3D] uppercase tracking-wider block mt-1">
                    Commercial Feed is Imported
                  </span>
                </div>
                <p class="text-xs text-[#5B6560] leading-relaxed">
                  Roughly one-third of all commercial aquaculture extruded pellets are imported into Nigeria, subjecting farmers directly to FX devaluations, import tariffs, and logistics delays. Meanwhile, high-protein local grain and cassava binders are produced abundantly in Oyo North.
                </p>
              </div>
              <div class="pt-4 border-t border-[#E5E0D5] text-[11px] text-[#1F4D3D] font-medium flex items-center gap-1.5">
                <mat-icon class="mat-icon text-xs text-[#C9A227]">check_circle</mat-icon>
                <span>Solution: Local grain formulation via Farm OS algorithms</span>
              </div>
            </div>

          </div>

          <!-- Summary banner -->
          <div class="p-4 bg-[#1F4D3D]/5 rounded-2xl border border-[#1F4D3D]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <mat-icon class="mat-icon text-2xl text-[#1F4D3D]">lightbulb</mat-icon>
              <p class="text-xs sm:text-sm text-[#1F4D3D] font-medium">
                The fundamental thesis: By producing feed on-site in Saki and digitizing nutritional balances with Farm OS, we insulate our operations from FX shocks while capturing full margin.
              </p>
            </div>
            <a
              routerLink="/farm-os"
              class="shrink-0 px-4 py-2 bg-[#1F4D3D] hover:bg-[#16392D] text-white text-xs font-semibold rounded-lg"
            >
              Test Feed Calculator
            </a>
          </div>

        </div>
      </section>

      <!-- THE SOLUTION: INTEGRATED CIRCULAR SVG COMPONENT -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Engineered Architecture</span>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#1F4D3D] mt-1">
            The Circular 10-Acre Integrated Estate Flow
          </h2>
          <p class="text-sm sm:text-base text-[#5B6560] max-w-2xl mt-1">
            Waste from one enterprise is the input for the next. Nothing is discarded; nutrients, calories, and software insights circulate continuously.
          </p>
        </div>

        <!-- Render Interactive SVG Diagram Component -->
        <app-circular-estate-diagram />
      </section>

      <!-- COMPARATIVE ADVANTAGE TABLE -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-10 shadow-sm space-y-6">
          <h3 class="font-serif text-2xl font-bold text-[#1F4D3D]">
            Standard Conventional Farm vs. FluxForge Integrated Enterprise
          </h3>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr class="border-b border-[#E5E0D5] text-[#1F4D3D]">
                  <th class="py-3 px-4 font-bold">Operational Dimension</th>
                  <th class="py-3 px-4 font-bold text-red-900 bg-red-50/50 rounded-t-lg">Typical Nigerian Farm</th>
                  <th class="py-3 px-4 font-bold text-[#1F4D3D] bg-[#1F4D3D]/5 rounded-t-lg">FluxForge Model (Saki)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E5E0D5] text-[#5B6560]">
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-[#1A1A1A]">Feed Sourcing</td>
                  <td class="py-3.5 px-4 bg-red-50/20">Purchases bagged commercial feed at ₦1,850 - ₦2,100/kg; margins vulnerable to exchange rate shifts.</td>
                  <td class="py-3.5 px-4 font-medium text-[#1F4D3D] bg-[#1F4D3D]/5">Milled on-site using local grain &amp; plantain meal at ~₦1,040/kg (saving 35–42%).</td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-[#1A1A1A]">Waste Management</td>
                  <td class="py-3.5 px-4 bg-red-50/20">Poultry manure stockpiled or disposed; pond effluent drained into public watercourses.</td>
                  <td class="py-3.5 px-4 font-medium text-[#1F4D3D] bg-[#1F4D3D]/5">100% recycled: manure composted for cocoa rootzones; pond water irrigates plantains.</td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-[#1A1A1A]">Cash Flow Timing</td>
                  <td class="py-3.5 px-4 bg-red-50/20">Single commodity (e.g. cocoa only), resulting in 8-month lean drought seasons before harvest.</td>
                  <td class="py-3.5 px-4 font-medium text-[#1F4D3D] bg-[#1F4D3D]/5">Multi-tiered liquidity: daily eggs, 6-week broilers, 4-month catfish, and annual cocoa.</td>
                </tr>
                <tr>
                  <td class="py-3.5 px-4 font-semibold text-[#1A1A1A]">Data &amp; Traceability</td>
                  <td class="py-3.5 px-4 bg-red-50/20">Paper ledger books or oral memory; zero provenance for export buyers.</td>
                  <td class="py-3.5 px-4 font-medium text-[#1F4D3D] bg-[#1F4D3D]/5">FluxForge Farm OS: real-time FCR calculation, lot QR tagging, and harvest certificates.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- NAVIGATION NEXT -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex flex-col sm:flex-row items-center gap-4">
          <a
            routerLink="/product"
            class="px-6 py-3.5 bg-[#1F4D3D] hover:bg-[#16392D] text-[#F7F5F0] font-bold text-sm rounded-xl shadow-md transition-colors flex items-center gap-2"
          >
            <span>Explore Farm OS Software Architecture</span>
            <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
          </a>
          <a
            routerLink="/farm-os"
            class="px-6 py-3.5 bg-[#C9A227] hover:bg-[#B5901F] text-[#1F4D3D] font-bold text-sm rounded-xl shadow-md transition-colors flex items-center gap-2"
          >
            <span>Try Live Feed-Cost Calculator</span>
            <mat-icon class="mat-icon text-sm">calculate</mat-icon>
          </a>
        </div>
      </section>

    </div>
  `,
})
export class ProblemSolution {}
