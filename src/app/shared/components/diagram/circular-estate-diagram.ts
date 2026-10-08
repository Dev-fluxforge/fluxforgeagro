import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface NodeDetail {
  id: string;
  name: string;
  acreage: string;
  icon: string;
  color: string;
  inputs: string[];
  outputs: string[];
  byProductContribution: string;
  farmOsRole: string;
}

@Component({
  selector: 'app-circular-estate-diagram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="bg-white rounded-2xl border border-[#E5E0D5] p-6 lg:p-8 shadow-sm">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
        <div>
          <span class="text-xs font-semibold tracking-wider text-[#C9A227] uppercase">Interactive Circular Bio-Economy</span>
          <h3 class="font-serif text-2xl font-bold text-[#1F4D3D]">10-Acre Integrated Estate Flow</h3>
          <p class="text-sm text-[#5B6560]">Click any sector to inspect input-output loops and by-product synergies.</p>
        </div>
        
        <!-- Legend Pill Filter Tabs -->
        <div class="flex flex-wrap gap-2 text-xs">
          @for (item of nodes; track item.id) {
            <button
              type="button"
              (click)="selectNode(item.id)"
              class="px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5"
              [class.bg-[#1F4D3D]]="activeNodeId() === item.id"
              [class.text-white]="activeNodeId() === item.id"
              [class.bg-[#F7F5F0]]="activeNodeId() !== item.id"
              [class.text-[#1A1A1A]]="activeNodeId() !== item.id"
              [class.border]="true"
              [class.border-[#E5E0D5]]="activeNodeId() !== item.id"
            >
              <mat-icon class="mat-icon text-sm">{{ item.icon }}</mat-icon>
              <span>{{ item.name }}</span>
            </button>
          }
        </div>
      </div>

      <!-- Main Visual Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        
        <!-- Interactive Vector Canvas -->
        <div class="lg:col-span-7 flex justify-center items-center">
          <svg viewBox="0 0 600 500" class="w-full max-w-[540px] h-auto drop-shadow-sm select-none" role="img" aria-label="Circular agro-enterprise system flow diagram">
            
            <defs>
              <linearGradient id="gradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1F4D3D" />
                <stop offset="100%" stop-color="#2A6853" />
              </linearGradient>
              <linearGradient id="gradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#C9A227" />
                <stop offset="100%" stop-color="#E2BC3E" />
              </linearGradient>
              <linearGradient id="gradSlate" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4A6670" />
                <stop offset="100%" stop-color="#60818D" />
              </linearGradient>
              
              <marker id="arrowGold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#C9A227" />
              </marker>
              <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#1F4D3D" />
              </marker>
              <marker id="arrowSlate" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#4A6670" />
              </marker>
            </defs>

            <!-- Circular background pathway guide -->
            <circle cx="300" cy="250" r="170" fill="none" stroke="#E5E0D5" stroke-width="2" stroke-dasharray="6 6" />

            <!-- Dynamic flow vectors -->
            <!-- 1. Cocoa/Plantain (Top) -> Feed Mill (Right) -->
            <path
              d="M 300 120 C 420 120, 470 170, 470 250"
              fill="none"
              stroke="#C9A227"
              stroke-width="3"
              marker-end="url(#arrowGold)"
              class="transition-all duration-300"
            />
            <text x="430" y="160" fill="#B5901F" font-size="11" font-weight="600" text-anchor="middle">
              Plantain Meal & Biomass
            </text>

            <!-- 2. Feed Mill (Right) -> Fishery & Poultry (Bottom & Left) -->
            <path
              d="M 470 250 C 470 340, 390 380, 300 380"
              fill="none"
              stroke="#1F4D3D"
              stroke-width="3"
              marker-end="url(#arrowGreen)"
            />
            <text x="420" y="340" fill="#1F4D3D" font-size="11" font-weight="600" text-anchor="middle">
              Floating Pellets (42% CP)
            </text>

            <path
              d="M 470 250 C 390 250, 210 260, 130 250"
              fill="none"
              stroke="#4A6670"
              stroke-width="3"
              stroke-dasharray="4 4"
              marker-end="url(#arrowSlate)"
            />
            <text x="300" y="270" fill="#4A6670" font-size="11" font-weight="600" text-anchor="middle">
              Poultry Starter & Finisher Mash
            </text>

            <!-- 3. Fishery & Poultry -> Cocoa Plantation (Organic Nutrient Recycle) -->
            <path
              d="M 300 380 C 180 380, 130 320, 130 250"
              fill="none"
              stroke="#1F4D3D"
              stroke-width="3"
              marker-end="url(#arrowGreen)"
            />
            <text x="180" y="350" fill="#1F4D3D" font-size="11" font-weight="600" text-anchor="middle">
              Nutrient Pond Water
            </text>

            <path
              d="M 130 250 C 130 160, 210 120, 300 120"
              fill="none"
              stroke="#C9A227"
              stroke-width="3"
              marker-end="url(#arrowGold)"
            />
            <text x="160" y="160" fill="#B5901F" font-size="11" font-weight="600" text-anchor="middle">
              Poultry Manure Compost
            </text>

            <!-- Central Hub: Farm OS Layer -->
            <g transform="translate(300, 250)" class="cursor-pointer">
              <circle cx="0" cy="0" r="48" fill="#1F4D3D" stroke="#C9A227" stroke-width="3" />
              <text x="0" y="-8" fill="#C9A227" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">
                FARM OS
              </text>
              <text x="0" y="10" fill="#F7F5F0" font-size="11" font-weight="600" text-anchor="middle">
                Core Loop
              </text>
              <text x="0" y="24" fill="#F7F5F0" font-size="9" opacity="0.8" text-anchor="middle">
                Cost & Provenance
              </text>
            </g>

            <!-- Node 1: Cocoa & Plantain (Top) -->
            <g
              transform="translate(300, 80)"
              (click)="selectNode('cocoa')"
              class="cursor-pointer transition-transform hover:scale-105"
            >
              <circle
                cx="0"
                cy="0"
                r="44"
                [attr.fill]="activeNodeId() === 'cocoa' ? '#1F4D3D' : '#FFFFFF'"
                stroke="#1F4D3D"
                stroke-width="3"
              />
              <text x="0" y="-6" [attr.fill]="activeNodeId() === 'cocoa' ? '#F7F5F0' : '#1F4D3D'" font-size="12" font-weight="bold" text-anchor="middle">
                Cocoa & Plantain
              </text>
              <text x="0" y="12" [attr.fill]="activeNodeId() === 'cocoa' ? '#C9A227' : '#5B6560'" font-size="10" font-weight="600" text-anchor="middle">
                5 Acres
              </text>
            </g>

            <!-- Node 2: Feed Mill (Right) -->
            <g
              transform="translate(480, 250)"
              (click)="selectNode('feedmill')"
              class="cursor-pointer transition-transform hover:scale-105"
            >
              <circle
                cx="0"
                cy="0"
                r="44"
                [attr.fill]="activeNodeId() === 'feedmill' ? '#C9A227' : '#FFFFFF'"
                stroke="#C9A227"
                stroke-width="3"
              />
              <text x="0" y="-6" [attr.fill]="activeNodeId() === 'feedmill' ? '#1F4D3D' : '#1A1A1A'" font-size="12" font-weight="bold" text-anchor="middle">
                On-Site Feed Mill
              </text>
              <text x="0" y="12" [attr.fill]="activeNodeId() === 'feedmill' ? '#1F4D3D' : '#5B6560'" font-size="10" font-weight="600" text-anchor="middle">
                3-Acre Hub
              </text>
            </g>

            <!-- Node 3: Fishery / Aquaculture (Bottom) -->
            <g
              transform="translate(300, 420)"
              (click)="selectNode('fishery')"
              class="cursor-pointer transition-transform hover:scale-105"
            >
              <circle
                cx="0"
                cy="0"
                r="44"
                [attr.fill]="activeNodeId() === 'fishery' ? '#1F4D3D' : '#FFFFFF'"
                stroke="#1F4D3D"
                stroke-width="3"
              />
              <text x="0" y="-6" [attr.fill]="activeNodeId() === 'fishery' ? '#F7F5F0' : '#1F4D3D'" font-size="12" font-weight="bold" text-anchor="middle">
                Aquaculture
              </text>
              <text x="0" y="12" [attr.fill]="activeNodeId() === 'fishery' ? '#C9A227' : '#5B6560'" font-size="10" font-weight="600" text-anchor="middle">
                Catfish & Tilapia
              </text>
            </g>

            <!-- Node 4: Poultry (Left) -->
            <g
              transform="translate(120, 250)"
              (click)="selectNode('poultry')"
              class="cursor-pointer transition-transform hover:scale-105"
            >
              <circle
                cx="0"
                cy="0"
                r="44"
                [attr.fill]="activeNodeId() === 'poultry' ? '#4A6670' : '#FFFFFF'"
                stroke="#4A6670"
                stroke-width="3"
              />
              <text x="0" y="-6" [attr.fill]="activeNodeId() === 'poultry' ? '#F7F5F0' : '#1A1A1A'" font-size="12" font-weight="bold" text-anchor="middle">
                Poultry
              </text>
              <text x="0" y="12" [attr.fill]="activeNodeId() === 'poultry' ? '#F7F5F0' : '#5B6560'" font-size="10" font-weight="600" text-anchor="middle">
                2 Acres
              </text>
            </g>

          </svg>
        </div>

        <!-- Detail Inspector for Active Node -->
        <div class="lg:col-span-5 bg-[#F7F5F0] rounded-xl p-5 border border-[#E5E0D5]">
          @if (currentNode(); as current) {
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#E5E0D5]">
                <div class="flex items-center gap-2">
                  <span class="w-8 h-8 rounded-lg bg-[#1F4D3D] text-[#C9A227] flex items-center justify-center">
                    <mat-icon class="mat-icon text-lg">{{ current.icon }}</mat-icon>
                  </span>
                  <div>
                    <h4 class="font-serif text-lg font-bold text-[#1F4D3D]">{{ current.name }}</h4>
                    <span class="text-xs text-[#5B6560] font-medium">{{ current.acreage }}</span>
                  </div>
                </div>
              </div>

              <!-- Flow Inputs & Outputs -->
              <div class="space-y-3 text-xs">
                <div>
                  <span class="font-semibold text-[#1A1A1A] block mb-1">Inputs Received:</span>
                  <ul class="list-disc list-inside space-y-1 text-[#5B6560]">
                    @for (inp of current.inputs; track inp) {
                      <li>{{ inp }}</li>
                    }
                  </ul>
                </div>

                <div>
                  <span class="font-semibold text-[#1A1A1A] block mb-1">Primary Produce:</span>
                  <ul class="list-disc list-inside space-y-1 text-[#5B6560]">
                    @for (out of current.outputs; track out) {
                      <li>{{ out }}</li>
                    }
                  </ul>
                </div>

                <div class="p-3 bg-white rounded-lg border border-[#E5E0D5]">
                  <span class="font-semibold text-[#1F4D3D] block mb-1">Circular By-Product Contribution:</span>
                  <p class="text-[#5B6560] leading-relaxed">{{ current.byProductContribution }}</p>
                </div>

                <div class="p-3 bg-[#1F4D3D]/5 rounded-lg border border-[#1F4D3D]/20">
                  <span class="font-semibold text-[#1F4D3D] block mb-1">Farm OS Integration:</span>
                  <p class="text-[#1F4D3D] leading-relaxed">{{ current.farmOsRole }}</p>
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    </div>
  `,
})
export class CircularEstateDiagram {
  nodes: NodeDetail[] = [
    {
      id: 'cocoa',
      name: 'Cocoa & Plantain',
      acreage: '5 Acres Allocation',
      icon: 'forest',
      color: '#1F4D3D',
      inputs: [
        'Hybrid CRIN TC-series cocoa seedlings',
        'False Horn plantain suckers',
        'Composted poultry manure from 2-acre pens',
        'Sediment-rich drainage water from fish ponds',
      ],
      outputs: [
        'Fermented premium dry cocoa beans (export grade)',
        'Fresh plantain bunches for Saki & Ibadan markets',
      ],
      byProductContribution:
        'Plantain peel and pseudo-stems are dried and milled on-site into fiber and carbohydrate binders for floating fish feed.',
      farmOsRole:
        'Tree density tracking, seedling survival rates, soil moisture intervals, and lot-level traceability of dry cocoa beans.',
    },
    {
      id: 'feedmill',
      name: 'On-Site Feed Mill',
      acreage: 'Integrated in 3-Acre Fishery Zone',
      icon: 'precision_manufacturing',
      color: '#C9A227',
      inputs: [
        'Local Saki yellow maize & soya cake from outgrowers',
        'Farm plantain flour & cassava binders',
        'Marine fishmeal & premix fortifiers',
      ],
      outputs: [
        'Extruded 2mm & 4mm floating catfish grower pellets (42% CP)',
        'Poultry broiler starter mash & finisher pellets',
      ],
      byProductContribution:
        'Transforms 60-70% external feed reliance into an internally controlled cost center, saving 35-42% per kilogram produced.',
      farmOsRole:
        'Least-cost formulation engine, nutritional protein ratio calculations, batch costing, and raw ingredient inventory tracking.',
    },
    {
      id: 'fishery',
      name: 'Fishery & Ponds',
      acreage: 'Part of 3-Acre Aquaculture Hub',
      icon: 'water',
      color: '#1F4D3D',
      inputs: [
        'Certified Clarias gariepinus fingerlings',
        'Gravity borehole freshwater circulation',
        'Farm-produced 42% CP floating pellets',
      ],
      outputs: [
        'Fresh table-size African catfish (1.0 - 1.2kg)',
        'Smoked catfish packages with QR provenance',
      ],
      byProductContribution:
        'Nutrient-loaded pond drainage water is routed directly to irrigate the lower slope of the cocoa & plantain groves.',
      farmOsRole:
        'Batch feed conversion ratio (FCR) tracking, mortality rates, water parameter logs, and slaughter QR codes.',
    },
    {
      id: 'poultry',
      name: 'Poultry Pens',
      acreage: '2 Acres Allocation',
      icon: 'egg',
      color: '#4A6670',
      inputs: [
        'Day-old broiler and layer chicks',
        'Sawdust bedding from local Saki timber mills',
        'On-site formulated mash and pellets',
      ],
      outputs: [
        'Dressed market-ready broilers (2.2 - 2.5kg)',
        'Commercial table eggs in graded crates',
      ],
      byProductContribution:
        'Poultry litter and manure are aged and composted to generate high-nitrogen organic fertilizer for the cocoa plantation.',
      farmOsRole:
        'Vaccination calendar alerts, egg production curves, daily feed intake per bird, and cold-chain logging.',
    },
  ];

  activeNodeId = signal<string>('feedmill');

  selectNode(id: string): void {
    this.activeNodeId.set(id);
  }

  currentNode = () => this.nodes.find((n) => n.id === this.activeNodeId()) || this.nodes[0];
}
