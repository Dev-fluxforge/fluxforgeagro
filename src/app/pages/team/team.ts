import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="space-y-16 lg:space-y-24 py-12 pb-24">
      
      <!-- HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
            <mat-icon class="mat-icon text-sm">badge</mat-icon>
            <span>Technical Leadership &amp; Operational Governance</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F4D3D] tracking-tight leading-tight">
            The Team Behind FluxForge Agro-Enterprise
          </h1>
          <p class="text-base sm:text-lg text-[#5B6560] leading-relaxed">
            Bridging software engineering precision with generational agricultural familiarity in Saki. Credible, verifiable execution with a documented history of delivered software systems.
          </p>
        </div>
      </section>

      <!-- FOUNDER PROFILE SPOTLIGHT -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-8 lg:p-12 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Founder Image / Avatar -->
            <div class="lg:col-span-4 flex flex-col items-center">
              <div class="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-[#1F4D3D]/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Badmus Muhammad Adeniyi, Founder of FluxForge"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="mt-4 text-center space-y-1">
                <span class="px-3 py-1 bg-[#1F4D3D] text-[#C9A227] text-xs font-bold rounded-full">
                  Founder &amp; Technical Director
                </span>
                <p class="text-xs text-[#5B6560] font-medium pt-1">Saki, Oyo State, Nigeria</p>
              </div>
            </div>

            <!-- Founder Bio & Track Record -->
            <div class="lg:col-span-8 space-y-6">
              <div>
                <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#1F4D3D]">
                  Badmus Muhammad Adeniyi
                </h2>
                <p class="text-xs sm:text-sm text-[#C9A227] font-semibold uppercase tracking-wider mt-0.5">
                  Final-Year Computer Science Student, LAUTECH · Founder, FluxForge Co.
                </p>
              </div>

              <div class="space-y-3 text-xs sm:text-sm text-[#5B6560] leading-relaxed">
                <p>
                  Badmus Muhammad Adeniyi is a final-year Computer Science undergraduate at Ladoke Akintola University of Technology (LAUTECH) and the founder of FluxForge Software Engineering Company. Under his technical leadership, FluxForge has engineered and shipped more than 20 production web and mobile software projects, demonstrating rigorous full-stack systems engineering capability.
                </p>
                <p>
                  Raised in Saki with deep roots across Oyo North's agricultural belt, Badmus identified the critical structural failure in Nigerian aquaculture: farmers paying 60–70% of revenue for expensive imported fish feed while abundant local grains and plantain by-products remain unintegrated. FluxForge Agro-Enterprise is the realization of his technical and agricultural vision: applying software rigor (FluxForge Farm OS) to on-site feed milling, cocoa agroforestry, and livestock biosecurity.
                </p>
              </div>

              <!-- Track Record Pillars -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                  <span class="font-serif text-lg font-bold text-[#1F4D3D] block">20+ Projects</span>
                  <span class="text-[11px] text-[#5B6560] leading-tight block mt-1">Shipped full-stack web platforms via FluxForge Software Co.</span>
                </div>
                <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                  <span class="font-serif text-lg font-bold text-[#1F4D3D] block">NUSS Leadership</span>
                  <span class="text-[11px] text-[#5B6560] leading-tight block mt-1">Stewardship in National Union of Saki Students driving youth empowerment.</span>
                </div>
                <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                  <span class="font-serif text-lg font-bold text-[#1F4D3D] block">EcoSharp Lead</span>
                  <span class="text-[11px] text-[#5B6560] leading-tight block mt-1">Pioneered circular resource recovery and community sustainability.</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- TEAM & FUTURE ROLES GRID -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Operational Governance</span>
          <h2 class="font-serif text-3xl font-bold text-[#1F4D3D] mt-1">
            Enterprise Management &amp; Open Agronomy Search
          </h2>
          <p class="text-sm text-[#5B6560]">
            Our structure pairs software engineering governance with experienced field managers.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: Founder Role -->
          <div class="bg-white rounded-3xl p-6 border border-[#E5E0D5] space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#1F4D3D] text-[#C9A227] flex items-center justify-center">
              <mat-icon class="mat-icon text-2xl">developer_mode</mat-icon>
            </div>
            <div>
              <span class="text-xs text-[#5B6560]">Active Leadership</span>
              <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Badmus Muhammad Adeniyi</h3>
              <p class="text-xs text-[#C9A227] font-semibold">Managing Director &amp; Lead Systems Architect</p>
            </div>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              Oversees technical design of Farm OS, feed-cost formulation logic, commercial partnerships, and Phase 1 grant milestone delivery.
            </p>
          </div>

          <!-- Card 2: CLEARLY MARKED PLACEHOLDER CARD FOR AGRONOMY LEAD -->
          <div class="bg-[#F7F5F0] rounded-3xl p-6 border-2 border-dashed border-[#C9A227] space-y-4 relative">
            <div class="absolute top-4 right-4">
              <span class="px-2.5 py-1 bg-[#C9A227] text-[#1F4D3D] text-[10px] font-bold rounded uppercase tracking-wider">
                Open Search / Phase 1
              </span>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-[#C9A227]/20 text-[#1F4D3D] flex items-center justify-center">
              <mat-icon class="mat-icon text-2xl">person_search</mat-icon>
            </div>
            <div>
              <span class="text-xs text-[#C9A227] font-bold uppercase tracking-wider">Key Role Placeholder</span>
              <h3 class="font-serif text-lg font-bold text-[#1A1A1A]">Farm Operations &amp; Agronomy Lead</h3>
              <p class="text-xs text-[#5B6560]">To Be Appointed upon Phase 1 Grant Disbursement</p>
            </div>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              We have explicitly structured a dedicated lead role for an experienced agronomist (BSc/HND in Crop Science or Aquaculture with 5+ years field experience in Southwestern Nigeria) to oversee cocoa nursery transplanting, feed mill extrusion calibration, and pond biosecurity.
            </p>
            <div class="pt-2 text-[11px] text-[#1F4D3D] font-semibold flex items-center gap-1">
              <mat-icon class="mat-icon text-xs text-[#C9A227]">info</mat-icon>
              <span>Candidates from Saki &amp; Oyo North prioritized</span>
            </div>
          </div>

          <!-- Card 3: Cooperative Advisory & Traditional Council Liaison -->
          <div class="bg-white rounded-3xl p-6 border border-[#E5E0D5] space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#4A6670]/15 text-[#4A6670] flex items-center justify-center">
              <mat-icon class="mat-icon text-2xl">account_balance</mat-icon>
            </div>
            <div>
              <span class="text-xs text-[#5B6560]">Community &amp; Customary Liaison</span>
              <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Traditional Council &amp; Smallholder Board</h3>
              <p class="text-xs text-[#4A6670] font-semibold">Community Stakeholder Council</p>
            </div>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              Ensures seamless alignment with the Traditional Council of Saki, local land custodians, and the Saki West smallholder grain suppliers providing maize, soy, and cassava to the on-site mill.
            </p>
          </div>

        </div>
      </section>

      <!-- INSTITUTIONAL CREDIBILITY & TECH AFFILIATION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-8 text-center space-y-6">
          <h3 class="font-serif text-xl font-bold text-[#1F4D3D]">Technical Foundations &amp; Research Alliances</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#5B6560]">
            <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5]">
              <span class="font-bold text-[#1A1A1A] block text-sm">LAUTECH</span>
              <span>Computer Science &amp; Agricultural Engineering alumni network</span>
            </div>
            <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5]">
              <span class="font-bold text-[#1A1A1A] block text-sm">CRIN Ibadan</span>
              <span>Rootstock alignment for hybrid disease-tolerant cocoa varieties</span>
            </div>
            <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5]">
              <span class="font-bold text-[#1A1A1A] block text-sm">Saki West LGA</span>
              <span>Host municipal base and local agricultural outgrower basin</span>
            </div>
            <div class="p-4 rounded-xl bg-[#F7F5F0] border border-[#E5E0D5]">
              <span class="font-bold text-[#1A1A1A] block text-sm">FluxForge Tech</span>
              <span>In-house development maintaining Farm OS algorithms</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
})
export class Team {}
