import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FeedBatch, FarmOSDashboardSummary } from '../../../../core/models/types';

@Component({
  selector: 'app-farm-os-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="space-y-8">
      
      <!-- 1. TOP METRIC CARDS STRIP -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <!-- Card 1: Active Batches -->
        <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-3">
          <div class="flex items-center justify-between text-xs text-[#5B6560]">
            <span class="font-medium">Active Production Lots</span>
            <div class="w-8 h-8 rounded-lg bg-[#1F4D3D]/10 text-[#1F4D3D] flex items-center justify-center">
              <mat-icon class="mat-icon text-base">inventory_2</mat-icon>
            </div>
          </div>
          <div>
            <div class="font-serif text-3xl font-extrabold text-[#1F4D3D]">
              {{ batches().length }} <span class="text-base font-normal text-[#5B6560]">Batches</span>
            </div>
            <p class="text-[11px] text-[#5B6560] mt-0.5">Across 3 biological enterprises</p>
          </div>
          <div class="pt-2 border-t border-[#E5E0D5] flex items-center justify-between text-[11px]">
            <span class="text-[#1F4D3D] font-semibold">5 acres cocoa · 3 fishery · 2 poultry</span>
          </div>
        </div>

        <!-- Card 2: Unit Feed Cost -->
        <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-3">
          <div class="flex items-center justify-between text-xs text-[#5B6560]">
            <span class="font-medium">Formulated Feed Unit Cost</span>
            <div class="w-8 h-8 rounded-lg bg-[#C9A227]/20 text-[#1F4D3D] flex items-center justify-center">
              <mat-icon class="mat-icon text-base">payments</mat-icon>
            </div>
          </div>
          <div>
            <div class="font-serif text-3xl font-extrabold text-[#1F4D3D]">
              ₦{{ averageCost() }} <span class="text-sm font-normal text-[#5B6560]">/ kg</span>
            </div>
            <p class="text-[11px] text-emerald-800 font-semibold mt-0.5">
              vs ₦{{ commercialBenchmark() }}/kg imported pellet
            </p>
          </div>
          <div class="pt-2 border-t border-[#E5E0D5] flex items-center justify-between text-[11px]">
            <span class="text-emerald-800 font-medium">On-site extruder production</span>
            <span class="font-mono text-[#5B6560]">42% CP</span>
          </div>
        </div>

        <!-- Card 3: Economic Cost Savings -->
        <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-3">
          <div class="flex items-center justify-between text-xs text-[#5B6560]">
            <span class="font-medium">Operating Feed Savings</span>
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <mat-icon class="mat-icon text-base">trending_down</mat-icon>
            </div>
          </div>
          <div>
            <div class="font-serif text-3xl font-extrabold text-[#C9A227]">
              {{ savingsPercentage() }}%
            </div>
            <p class="text-[11px] text-[#5B6560] mt-0.5">
              Retaining ₦{{ savingsPerKg() }} on every kg fed
            </p>
          </div>
          <div class="pt-2 border-t border-[#E5E0D5] flex items-center justify-between text-[11px]">
            <span class="text-[#1F4D3D] font-medium">₦{{ (savingsPerKg() * 1000).toLocaleString() }} saved / tonne</span>
          </div>
        </div>

        <!-- Card 4: Direct Jobs & Capacity -->
        <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-3">
          <div class="flex items-center justify-between text-xs text-[#5B6560]">
            <span class="font-medium">Direct Employment Ramp</span>
            <div class="w-8 h-8 rounded-lg bg-[#4A6670]/15 text-[#4A6670] flex items-center justify-center">
              <mat-icon class="mat-icon text-base">groups</mat-icon>
            </div>
          </div>
          <div>
            <div class="font-serif text-3xl font-extrabold text-[#1A1A1A]">
              12 <span class="text-xs font-normal text-[#5B6560]">→</span> 33 <span class="text-xs font-normal text-[#5B6560]">Jobs</span>
            </div>
            <p class="text-[11px] text-[#5B6560] mt-0.5">
              Phase 1 setup to Year 3 full capacity
            </p>
          </div>
          <div class="pt-2 border-t border-[#E5E0D5] flex items-center justify-between text-[11px]">
            <span class="text-[#1F4D3D] font-medium">STEMM Science &amp; Tech</span>
            <span class="text-[#5B6560]">Saki West LGA</span>
          </div>
        </div>

      </div>

      <!-- 2. QUICK ACTIONS & CENTRAL OPERATIONAL LAUNCHPAD -->
      <div class="bg-white rounded-3xl p-6 border border-[#E5E0D5] shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E0D5] gap-3">
          <div>
            <span class="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider">Command Launchpad</span>
            <h2 class="font-serif text-xl font-bold text-[#1F4D3D]">Core Farm OS Functional Modules</h2>
          </div>
          <p class="text-xs text-[#5B6560]">
            Direct entry points into precision formulation, batch logging, and provenance tracking.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
          
          <!-- Launcher 1: Feed Calculator -->
          <button
            type="button"
            (click)="onNavigateTab('calculator')"
            class="p-4 rounded-2xl bg-[#F7F5F0] hover:bg-[#1F4D3D] text-[#1A1A1A] hover:text-[#F7F5F0] border border-[#E5E0D5] text-left transition-all duration-200 group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div class="flex items-start justify-between">
              <div class="w-10 h-10 rounded-xl bg-white group-hover:bg-[#C9A227] text-[#1F4D3D] flex items-center justify-center shadow-xs transition-colors">
                <mat-icon class="mat-icon text-xl">calculate</mat-icon>
              </div>
              <span class="text-[10px] font-mono uppercase tracking-wider text-[#C9A227] group-hover:text-[#C9A227] font-bold">
                Module 01
              </span>
            </div>
            <div>
              <h3 class="font-serif text-base font-bold text-[#1F4D3D] group-hover:text-[#F7F5F0]">
                Least-Cost Feed Calculator
              </h3>
              <p class="text-xs text-[#5B6560] group-hover:text-white/80 mt-1 leading-relaxed">
                Compound local yellow maize, soya meal, and plantain flour against Saki market prices to balance crude protein targets.
              </p>
            </div>
            <div class="flex items-center gap-1 text-xs font-semibold text-[#1F4D3D] group-hover:text-[#C9A227]">
              <span>Launch Formulator</span>
              <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
            </div>
          </button>

          <!-- Launcher 2: Traceability Engine -->
          <button
            type="button"
            (click)="onNavigateTab('traceability')"
            class="p-4 rounded-2xl bg-[#F7F5F0] hover:bg-[#1F4D3D] text-[#1A1A1A] hover:text-[#F7F5F0] border border-[#E5E0D5] text-left transition-all duration-200 group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div class="flex items-start justify-between">
              <div class="w-10 h-10 rounded-xl bg-white group-hover:bg-[#C9A227] text-[#1F4D3D] flex items-center justify-center shadow-xs transition-colors">
                <mat-icon class="mat-icon text-xl">qr_code_scanner</mat-icon>
              </div>
              <span class="text-[10px] font-mono uppercase tracking-wider text-[#C9A227] group-hover:text-[#C9A227] font-bold">
                Module 02
              </span>
            </div>
            <div>
              <h3 class="font-serif text-base font-bold text-[#1F4D3D] group-hover:text-[#F7F5F0]">
                Batch Traceability &amp; Provenance
              </h3>
              <p class="text-xs text-[#5B6560] group-hover:text-white/80 mt-1 leading-relaxed">
                Lookup batch codes to verify origin hatchery records, feeding milestones, biosecurity status, and printable QR certificates.
              </p>
            </div>
            <div class="flex items-center gap-1 text-xs font-semibold text-[#1F4D3D] group-hover:text-[#C9A227]">
              <span>Lookup Batches</span>
              <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
            </div>
          </button>

          <!-- Launcher 3: Batch Registry -->
          <button
            type="button"
            (click)="onNavigateTab('batches')"
            class="p-4 rounded-2xl bg-[#F7F5F0] hover:bg-[#1F4D3D] text-[#1A1A1A] hover:text-[#F7F5F0] border border-[#E5E0D5] text-left transition-all duration-200 group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div class="flex items-start justify-between">
              <div class="w-10 h-10 rounded-xl bg-white group-hover:bg-[#C9A227] text-[#1F4D3D] flex items-center justify-center shadow-xs transition-colors">
                <mat-icon class="mat-icon text-xl">dataset</mat-icon>
              </div>
              <span class="text-[10px] font-mono uppercase tracking-wider text-[#C9A227] group-hover:text-[#C9A227] font-bold">
                Module 03
              </span>
            </div>
            <div>
              <h3 class="font-serif text-base font-bold text-[#1F4D3D] group-hover:text-[#F7F5F0]">
                Estate Production Registry
              </h3>
              <p class="text-xs text-[#5B6560] group-hover:text-white/80 mt-1 leading-relaxed">
                Inspect complete database records for active aquaculture ponds, poultry pens, and cocoa nursery inventories.
              </p>
            </div>
            <div class="flex items-center gap-1 text-xs font-semibold text-[#1F4D3D] group-hover:text-[#C9A227]">
              <span>View Full Registry</span>
              <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
            </div>
          </button>

        </div>
      </div>

      <!-- 3. MAIN DASHBOARD SPLIT: COMPARATIVE ECONOMICS + ACTIVE PRODUCTION LOTS -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left: Feed Expenditure Economics & FCR Telemetry -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-[#E5E0D5]">
            <div>
              <span class="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider">Economic Benchmark</span>
              <h3 class="font-serif text-xl font-bold text-[#1F4D3D]">Feed Expenditure vs Commercial Benchmark</h3>
            </div>
            <span class="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              -43.5% Cost Reduction
            </span>
          </div>

          <!-- Comparative Visualization -->
          <div class="space-y-4">
            <!-- Commercial imported pellets -->
            <div class="space-y-1.5">
              <div class="flex justify-between text-xs">
                <span class="font-medium text-[#1A1A1A]">Imported Commercial Catfish Pellets (42% CP)</span>
                <span class="font-bold text-red-800">₦1,850,000 / Tonne (₦1,850/kg)</span>
              </div>
              <div class="w-full h-8 bg-red-100 rounded-lg overflow-hidden flex">
                <div class="w-full bg-red-700/85 h-full flex items-center px-3 text-[11px] font-bold text-white">
                  100% External Sourcing Cost (Vulnerable to FX &amp; Port Delays)
                </div>
              </div>
            </div>

            <!-- FluxForge On-Site Extruded Pellets -->
            <div class="space-y-1.5">
              <div class="flex justify-between text-xs">
                <span class="font-medium text-[#1A1A1A]">FluxForge Saki Extruded Pellets (42% CP)</span>
                <span class="font-bold text-[#1F4D3D]">₦1,045,000 / Tonne (₦1,045/kg)</span>
              </div>
              <div class="w-full h-8 bg-[#1F4D3D]/10 rounded-lg overflow-hidden flex">
                <div class="w-[56.5%] bg-[#1F4D3D] h-full flex items-center px-3 text-[11px] font-bold text-[#C9A227]">
                  56.5% Net Cost (₦1,045/kg)
                </div>
                <div class="w-[43.5%] bg-[#C9A227] h-full flex items-center justify-center text-[11px] font-bold text-[#1F4D3D]">
                  43.5% Retained Margin
                </div>
              </div>
            </div>
          </div>

          <!-- Conversion Ratios Breakdown -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-xs text-[#5B6560] font-medium">Aquaculture Catfish FCR</span>
                <span class="text-xs font-mono font-bold text-[#1F4D3D]">1.15 : 1</span>
              </div>
              <p class="text-[11px] text-[#5B6560]">1.15 kg feed produces 1.0 kg fish biomass</p>
            </div>

            <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-xs text-[#5B6560] font-medium">Poultry Broiler FCR</span>
                <span class="text-xs font-mono font-bold text-[#1F4D3D]">1.62 : 1</span>
              </div>
              <p class="text-[11px] text-[#5B6560]">1.62 kg finisher mash produces 1.0 kg poultry</p>
            </div>
          </div>

          <div class="p-4 bg-[#1F4D3D]/5 rounded-2xl border border-[#1F4D3D]/15 text-xs text-[#1F4D3D] flex items-start gap-2.5">
            <mat-icon class="mat-icon text-lg text-[#C9A227] shrink-0 mt-0.5">verified</mat-icon>
            <p class="leading-relaxed">
              <span class="font-bold">Software Calibration:</span> Farm OS recalculates unit batch cost dynamically whenever grain market commodity prices fluctuate in the Saki central grain market, protecting farm gate margins automatically.
            </p>
          </div>
        </div>

        <!-- Right: Active Production Lots in Estate -->
        <div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-[#E5E0D5]">
              <div>
                <span class="text-[11px] font-semibold text-[#C9A227] uppercase tracking-wider">Field Operations</span>
                <h3 class="font-serif text-xl font-bold text-[#1F4D3D]">Active Sector Lots</h3>
              </div>
              <span class="text-xs text-[#5B6560]">Saki Field Hub</span>
            </div>

            <!-- List of batches -->
            <div class="space-y-3">
              @for (batch of batches(); track batch.id) {
                <div class="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] hover:border-[#1F4D3D]/40 transition-colors space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs font-bold text-[#1F4D3D] bg-white px-2 py-0.5 rounded border border-[#E5E0D5]">
                      {{ batch.batchLabel }}
                    </span>
                    <span class="text-[11px] font-semibold text-[#1F4D3D] bg-[#1F4D3D]/10 px-2 py-0.5 rounded-full">
                      {{ batch.stage }}
                    </span>
                  </div>

                  <div class="text-xs">
                    <p class="font-medium text-[#1A1A1A]">{{ batch.specieOrCrop }}</p>
                    <p class="text-[11px] text-[#5B6560]">{{ batch.formulationUsed }}</p>
                  </div>

                  <div class="pt-2 border-t border-[#E5E0D5] flex items-center justify-between text-xs">
                    <span class="text-[11px] text-[#5B6560]">Unit: ₦{{ batch.currentFeedCostPerUnit }}/kg</span>
                    <button
                      type="button"
                      (click)="onInspectBatch(batch.batchLabel)"
                      class="text-xs font-bold text-[#C9A227] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Trace Provenance</span>
                      <mat-icon class="mat-icon text-xs">arrow_forward</mat-icon>
                    </button>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="pt-2">
            <button
              type="button"
              (click)="onNavigateTab('calculator')"
              class="w-full py-3 px-4 bg-[#1F4D3D] hover:bg-[#16392D] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <mat-icon class="mat-icon text-sm text-[#C9A227]">add_circle</mat-icon>
              <span>Formulate New Feed Mix in Calculator</span>
            </button>
          </div>
        </div>

      </div>

      <!-- 4. BY-PRODUCT CIRCULAR TELEMETRY & AGRO-ECOLOGICAL ENVIRONMENT -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Circular By-Product Resource Monitor -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-[#E5E0D5]">
            <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Estate Circular Resource Flow</h3>
            <span class="text-[11px] text-[#C9A227] font-semibold uppercase">Zero-Waste Loop</span>
          </div>

          <div class="space-y-3 text-xs">
            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] flex items-center justify-between">
              <div>
                <span class="font-semibold text-[#1A1A1A] block">Plantain Peels &amp; Biomass</span>
                <span class="text-[11px] text-[#5B6560]">Dried on-site and milled into carbohydrate feed binder</span>
              </div>
              <span class="text-xs font-bold text-[#1F4D3D] bg-white px-2.5 py-1 rounded-md border border-[#E5E0D5]">
                160 kg / Mix
              </span>
            </div>

            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] flex items-center justify-between">
              <div>
                <span class="font-semibold text-[#1A1A1A] block">Aquaculture Pond Effluent</span>
                <span class="text-[11px] text-[#5B6560]">Gravity routed to fertilize &amp; irrigate cocoa seedling rootzones</span>
              </div>
              <span class="text-xs font-bold text-[#1F4D3D] bg-white px-2.5 py-1 rounded-md border border-[#E5E0D5]">
                100% Recycled
              </span>
            </div>

            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] flex items-center justify-between">
              <div>
                <span class="font-semibold text-[#1A1A1A] block">Deep-Litter Poultry Manure</span>
                <span class="text-[11px] text-[#5B6560]">Composted with sawdust bedding for 5-acre plantation soil</span>
              </div>
              <span class="text-xs font-bold text-[#1F4D3D] bg-white px-2.5 py-1 rounded-md border border-[#E5E0D5]">
                High-N Organic
              </span>
            </div>
          </div>
        </div>

        <!-- Saki Agro-Ecological Environment Hub -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-[#E5E0D5]">
            <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Saki Field Ecological Environment</h3>
            <span class="text-[11px] text-[#5B6560] font-mono">Oyo North Station</span>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
              <span class="text-[#5B6560] block">Soil Profile:</span>
              <span class="font-bold text-[#1A1A1A]">Sandy Clay Loam</span>
              <p class="text-[10px] text-[#5B6560]">pH 6.35 (Optimal for CRIN cocoa)</p>
            </div>

            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
              <span class="text-[#5B6560] block">Topography &amp; Gradient:</span>
              <span class="font-bold text-[#1A1A1A]">3% Natural Slope</span>
              <p class="text-[10px] text-[#5B6560]">Enables gravity pond drainage</p>
            </div>

            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
              <span class="text-[#5B6560] block">Water Supply:</span>
              <span class="font-bold text-[#1A1A1A]">Solar Borehole System</span>
              <p class="text-[10px] text-[#5B6560]">Continuous freshwater circulation</p>
            </div>

            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
              <span class="text-[#5B6560] block">Outgrower Grain Basin:</span>
              <span class="font-bold text-[#1A1A1A]">45+ Saki Families</span>
              <p class="text-[10px] text-[#5B6560]">Yellow maize &amp; soybean supply</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  `,
})
export class FarmOsDashboard {
  batches = input<FeedBatch[]>([]);
  summary = input<FarmOSDashboardSummary | null>(null);

  selectTab = output<'dashboard' | 'calculator' | 'traceability' | 'batches'>();
  inspectBatch = output<string>();

  averageCost(): number {
    const sum = this.summary();
    if (sum) return sum.averageFeedCostPerKg;
    const b = this.batches();
    return b.length > 0 ? b[0].currentFeedCostPerUnit : 1045;
  }

  commercialBenchmark(): number {
    return this.summary()?.commercialBenchmarkFeedCostPerKg || 1850;
  }

  savingsPercentage(): number {
    return this.summary()?.overallSavingsPercentage || 43.5;
  }

  savingsPerKg(): number {
    return this.commercialBenchmark() - this.averageCost();
  }

  onNavigateTab(tab: 'dashboard' | 'calculator' | 'traceability' | 'batches'): void {
    this.selectTab.emit(tab);
  }

  onInspectBatch(batchLabel: string): void {
    this.inspectBatch.emit(batchLabel);
  }
}
