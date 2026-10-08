import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StatCounter } from '../../shared/components/stat-counter/stat-counter';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, StatCounter],
  template: `
    <div class="space-y-16 lg:space-y-24 pb-20">
      
      <!-- HERO SECTION -->
      <section class="relative bg-[#1F4D3D] text-[#F7F5F0] overflow-hidden">
        <!-- Subtle background texture overlay -->
        <div class="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="farm-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#farm-grid)" />
          </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6">
              
              <!-- Location & Focus Kicker -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#C9A227] font-medium">
                <mat-icon class="mat-icon text-sm">location_on</mat-icon>
                <span>Saki, Oyo State, Nigeria · Integrated Agribusiness &amp; Software</span>
              </div>

              <!-- Main Headline -->
              <h1 class="font-serif text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] leading-[1.15]">
                Engineering a 10-Acre Circular Agribusiness in Saki, Powered by Custom Farm OS.
              </h1>

              <!-- Positioning Statement -->
              <p class="text-base sm:text-lg text-[#F7F5F0]/85 leading-relaxed max-w-2xl">
                We combine cocoa &amp; plantain cultivation, aquaculture, and an on-site feed mill
                with proprietary feed-cost calculation and traceability software. Solving the 60–70%
                fish-feed import crisis while creating up to 33 direct STEMM jobs in Oyo North.
              </p>

              <!-- CTAs -->
              <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  routerLink="/invest"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#B5901F] text-[#1F4D3D] font-bold text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227]"
                >
                  <mat-icon class="mat-icon text-base">assignment</mat-icon>
                  <span>Review Pitch &amp; Investment Plan</span>
                </a>
                
                <a
                  routerLink="/farm-os"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#F7F5F0] border border-white/20 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <mat-icon class="mat-icon text-base">laptop_mac</mat-icon>
                  <span>Launch Live Farm OS Demo</span>
                </a>
              </div>

              <!-- Land notice tag -->
              <div class="text-xs text-[#F7F5F0]/65 flex items-center gap-2 pt-2">
                <mat-icon class="mat-icon text-sm text-[#C9A227]">verified_user</mat-icon>
                <span>10-acre site requested from the Traditional Council of Saki; surveying &amp; soil tests complete.</span>
              </div>

            </div>

            <!-- Right Hero Imagery -->
            <div class="lg:col-span-5">
              <div class="relative mx-auto max-w-md lg:max-w-none">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
                    alt="Farmland landscape in Oyo State representing the 10-acre site in Saki"
                    class="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#1F4D3D]/90 via-transparent to-transparent"></div>
                  
                  <!-- Floating Badge on Hero Image -->
                  <div class="absolute bottom-4 left-4 right-4 p-3.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/20 text-xs text-white flex items-center justify-between">
                    <div>
                      <p class="font-bold text-[#C9A227]">The Circular Closed Loop</p>
                      <p class="text-[11px] text-white/80">Crop residues → Feed Mill → Fish &amp; Poultry → Organic Soil</p>
                    </div>
                    <span class="px-2 py-1 bg-[#1F4D3D] text-[#C9A227] font-semibold text-[10px] rounded-md uppercase">
                      Zero Waste
                    </span>
                  </div>
                </div>

                <!-- Floating tech badge -->
                <div class="absolute -bottom-5 -left-5 bg-[#F7F5F0] text-[#1F4D3D] p-3.5 rounded-xl shadow-lg border border-[#E5E0D5] hidden sm:flex items-center gap-3">
                  <div class="w-9 h-9 rounded-lg bg-[#1F4D3D] text-[#C9A227] flex items-center justify-center">
                    <mat-icon class="mat-icon text-lg">code</mat-icon>
                  </div>
                  <div>
                    <p class="font-bold text-xs">FluxForge Farm OS</p>
                    <p class="text-[10px] text-[#5B6560]">Real-time feed cost &amp; lot provenance</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- AT-A-GLANCE SECTION (4 CARDS) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">The Enterprise Blueprint</span>
          <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#1F4D3D] mt-1">
            Four Integrated Pillars at a Glance
          </h2>
          <p class="text-sm sm:text-base text-[#5B6560] mt-2">
            Every component of our 10-acre estate serves a dual purpose: biological production and circular resource recovery.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card 1: Cocoa & Plantain -->
          <div class="bg-white rounded-2xl p-6 border border-[#E5E0D5] hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-[#1F4D3D]/10 text-[#1F4D3D] flex items-center justify-center group-hover:bg-[#1F4D3D] group-hover:text-[#C9A227] transition-colors">
                <mat-icon class="mat-icon text-2xl">forest</mat-icon>
              </div>
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">5 Acres</span>
                <h3 class="font-serif text-xl font-bold text-[#1F4D3D] mt-0.5">Cocoa &amp; Plantain</h3>
              </div>
              <p class="text-xs text-[#5B6560] leading-relaxed">
                Export-grade hybrid cocoa (CRIN TC series) intercropped with plantain nurse trees. Generates cash flow while providing plantain biomass for the feed mill.
              </p>
            </div>
            <div class="pt-5 mt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-[#1F4D3D] font-semibold">
              <span>Bio-Compost Recipient</span>
              <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
            </div>
          </div>

          <!-- Card 2: Fishery & Feed Mill -->
          <div class="bg-white rounded-2xl p-6 border border-[#E5E0D5] hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-[#C9A227]/15 text-[#1F4D3D] flex items-center justify-center group-hover:bg-[#C9A227] group-hover:text-[#1F4D3D] transition-colors">
                <mat-icon class="mat-icon text-2xl">water</mat-icon>
              </div>
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">3 Acres</span>
                <h3 class="font-serif text-xl font-bold text-[#1F4D3D] mt-0.5">Fishery &amp; Feed Mill</h3>
              </div>
              <p class="text-xs text-[#5B6560] leading-relaxed">
                Earthen and concrete catfish growout ponds paired with an on-site extruder mill producing 42% CP floating pellets, cutting feed cost by up to 42%.
              </p>
            </div>
            <div class="pt-5 mt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-[#1F4D3D] font-semibold">
              <span>On-Site Feed Extrusion</span>
              <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
            </div>
          </div>

          <!-- Card 3: Poultry -->
          <div class="bg-white rounded-2xl p-6 border border-[#E5E0D5] hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-[#4A6670]/15 text-[#4A6670] flex items-center justify-center group-hover:bg-[#4A6670] group-hover:text-white transition-colors">
                <mat-icon class="mat-icon text-2xl">egg</mat-icon>
              </div>
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">2 Acres</span>
                <h3 class="font-serif text-xl font-bold text-[#1F4D3D] mt-0.5">Poultry Production</h3>
              </div>
              <p class="text-xs text-[#5B6560] leading-relaxed">
                High-biosecurity broiler and layer facilities providing table eggs and fresh poultry to Oyo North, with deep-litter manure fueling plantation soil enrichment.
              </p>
            </div>
            <div class="pt-5 mt-4 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-[#1F4D3D] font-semibold">
              <span>Organic Nitrogen Source</span>
              <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
            </div>
          </div>

          <!-- Card 4: FluxForge Farm OS -->
          <div class="bg-[#1F4D3D] text-[#F7F5F0] rounded-2xl p-6 border border-[#16392D] hover:shadow-lg transition-shadow flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-[#C9A227] text-[#1F4D3D] flex items-center justify-center group-hover:scale-105 transition-transform">
                <mat-icon class="mat-icon text-2xl">laptop_mac</mat-icon>
              </div>
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Software Layer</span>
                <h3 class="font-serif text-xl font-bold text-[#F7F5F0] mt-0.5">FluxForge Farm OS</h3>
              </div>
              <p class="text-xs text-[#F7F5F0]/80 leading-relaxed">
                Custom web software tracking ingredient market prices in Saki, formulating least-cost feed rations, and minting batch-level harvest traceability certificates.
              </p>
            </div>
            <div class="pt-5 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#C9A227] font-semibold">
              <a routerLink="/farm-os" class="flex items-center gap-1 hover:underline">
                <span>Explore Live App</span>
                <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- IMPACT STATS STRIP -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-stat-counter />
      </section>

      <!-- SOCIAL PROOF & CREDIBILITY STRIP -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl border border-[#E5E0D5] p-8 lg:p-10 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-5 space-y-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
                Proven Execution Capacity
              </span>
              <h3 class="font-serif text-2xl font-bold text-[#1F4D3D]">
                Grounded Leadership with 20+ Shipped Web Systems
              </h3>
              <p class="text-sm text-[#5B6560] leading-relaxed">
                FluxForge Agro-Enterprise is directed by Badmus Muhammad Adeniyi, a final-year Computer Science student at LAUTECH and founder of FluxForge Software Engineering Company.
              </p>
              <div class="pt-2">
                <a routerLink="/team" class="text-xs font-bold text-[#1F4D3D] hover:text-[#C9A227] flex items-center gap-1">
                  <span>Learn more about founder &amp; engineering history</span>
                  <mat-icon class="mat-icon text-sm">arrow_forward</mat-icon>
                </a>
              </div>
            </div>

            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <!-- Track Record Item 1 -->
              <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-2">
                <div class="flex items-center gap-2 text-[#1F4D3D]">
                  <mat-icon class="mat-icon text-lg text-[#C9A227]">terminal</mat-icon>
                  <h4 class="font-serif text-sm font-bold">FluxForge Co.</h4>
                </div>
                <p class="text-xs text-[#5B6560]">
                  Over 20 production web platforms engineered and shipped across agriculture, logistics, and education.
                </p>
              </div>

              <!-- Track Record Item 2 -->
              <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-2">
                <div class="flex items-center gap-2 text-[#1F4D3D]">
                  <mat-icon class="mat-icon text-lg text-[#C9A227]">military_tech</mat-icon>
                  <h4 class="font-serif text-sm font-bold">NUSS Leadership</h4>
                </div>
                <p class="text-xs text-[#5B6560]">
                  Extensive community stewardship through National Union of Saki Students, bridging youth employment with grassroots trust.
                </p>
              </div>

              <!-- Track Record Item 3 -->
              <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-2">
                <div class="flex items-center gap-2 text-[#1F4D3D]">
                  <mat-icon class="mat-icon text-lg text-[#C9A227]">recycling</mat-icon>
                  <h4 class="font-serif text-sm font-bold">EcoSharp</h4>
                </div>
                <p class="text-xs text-[#5B6560]">
                  Environmental innovation initiative pioneering waste recovery protocols adapted directly into our farm by-product loops.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- FARM JOURNAL LATEST PROOF OF PROGRESS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">Field Proof &amp; Milestones</span>
            <h2 class="font-serif text-3xl font-bold text-[#1F4D3D] mt-1">Farm Journal Updates</h2>
            <p class="text-sm text-[#5B6560]">Direct timestamped records from Saki: soil tests, stakeholder meetings, and feed trials.</p>
          </div>
          <a
            routerLink="/impact"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#1F4D3D] hover:text-[#C9A227] transition-colors"
          >
            <span>View All Field Dispatches</span>
            <mat-icon class="mat-icon text-base">arrow_forward</mat-icon>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (post of api.posts().slice(0, 3); track post.id) {
            <article class="bg-white rounded-2xl overflow-hidden border border-[#E5E0D5] hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div class="aspect-[16/9] w-full overflow-hidden bg-[#E5E0D5]">
                  <img
                    [src]="post.imageUrl"
                    [alt]="post.title"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div class="p-5 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs text-[#5B6560]">
                    <span class="font-semibold text-[#1F4D3D]">{{ post.category }}</span>
                    <span aria-hidden="true">·</span>
                    <span>{{ post.publishedAt.split('T')[0] }}</span>
                  </div>
                  <h3 class="font-serif text-base font-bold text-[#1A1A1A] line-clamp-2">
                    {{ post.title }}
                  </h3>
                  <p class="text-xs text-[#5B6560] line-clamp-3 leading-relaxed">
                    {{ post.excerpt }}
                  </p>
                </div>
              </div>
              <div class="p-5 pt-0">
                <a
                  routerLink="/impact"
                  [fragment]="post.slug"
                  class="text-xs font-bold text-[#1F4D3D] hover:text-[#C9A227] flex items-center gap-1"
                >
                  <span>Read field report</span>
                  <mat-icon class="mat-icon text-xs">arrow_forward</mat-icon>
                </a>
              </div>
            </article>
          }
        </div>
      </section>

      <!-- CALL TO ACTION / INVESTOR BANNER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-[#1F4D3D] rounded-2xl p-8 sm:p-12 text-[#F7F5F0] text-center max-w-4xl mx-auto border border-[#16392D] shadow-xl space-y-6">
          <span class="text-xs font-bold uppercase tracking-widest text-[#C9A227]">Phase 1 Grant &amp; Co-Investment</span>
          <h2 class="font-serif text-2xl sm:text-4xl font-extrabold text-[#F7F5F0]">
            Join Us in Establishing the Benchmark for Integrated Agritech in Oyo State
          </h2>
          <p class="text-sm sm:text-base text-[#F7F5F0]/85 max-w-2xl mx-auto leading-relaxed">
            We are actively reviewing grant opportunities and agricultural development partnerships for Phase 1 nursery deployment, feed mill extrusion equipment, and Farm OS pilot scale.
          </p>
          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              routerLink="/invest"
              class="w-full sm:w-auto px-8 py-3.5 bg-[#C9A227] hover:bg-[#B5901F] text-[#1F4D3D] font-bold text-sm rounded-xl shadow-md transition-colors"
            >
              Get In Touch with the Founder
            </a>
            <a
              routerLink="/problem-solution"
              class="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-[#F7F5F0] border border-white/20 font-semibold text-sm rounded-xl transition-colors"
            >
              Examine the Circular Model
            </a>
          </div>
        </div>
      </section>

    </div>
  `,
})
export class Home implements OnInit {
  api = inject(Api);

  ngOnInit(): void {
    if (this.api.posts().length === 0) {
      this.api.getJournalPosts().subscribe();
    }
  }
}
