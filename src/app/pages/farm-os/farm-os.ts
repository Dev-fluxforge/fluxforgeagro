import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Api } from '../../core/services/api';
import { FeedBatch, FeedFormulaCalculation, IngredientInput } from '../../core/models/types';

@Component({
  selector: 'app-farm-os',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, MatIconModule],
  template: `
    <div class="space-y-10 lg:space-y-12 py-8 pb-24">
      
      <!-- TOP STATUS & BREADCRUMB -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-[#1F4D3D] text-[#F7F5F0] rounded-3xl p-6 sm:p-8 border border-[#16392D] shadow-lg">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-mono text-[#C9A227] tracking-wider uppercase">
                  FluxForge Farm OS v0.4 · Production Live Demo
                </span>
              </div>
              <h1 class="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#F7F5F0]">
                Precision Feed Formulator &amp; Batch Traceability Engine
              </h1>
              <p class="text-xs sm:text-sm text-[#F7F5F0]/80 max-w-2xl leading-relaxed">
                Working software backing the 10-acre Saki estate. Formulate real feed recipes against Saki local market pricing, track lot conversions, and verify end-to-end harvest provenance.
              </p>
            </div>

            <!-- Header Quick Badge -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div class="p-3 bg-white/10 rounded-2xl border border-white/15 text-xs">
                <span class="text-[#C9A227] font-bold block">DB Connected</span>
                <span class="text-[11px] text-[#F7F5F0]/70">Postgres Schema Ready</span>
              </div>
              <a
                routerLink="/product"
                class="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-medium rounded-xl border border-white/20 transition-colors"
              >
                Architecture Spec
              </a>
            </div>
          </div>

          <!-- MODULE TABS -->
          <div class="mt-8 pt-6 border-t border-white/15 flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              (click)="activeTab.set('dashboard')"
              class="px-4 py-2 rounded-xl font-semibold transition-all flex items-center gap-2"
              [class.bg-[#C9A227]]="activeTab() === 'dashboard'"
              [class.text-[#1F4D3D]]="activeTab() === 'dashboard'"
              [class.bg-white/10]="activeTab() !== 'dashboard'"
              [class.text-[#F7F5F0]]="activeTab() !== 'dashboard'"
            >
              <mat-icon class="mat-icon text-sm">dashboard</mat-icon>
              <span>Operational Dashboard</span>
            </button>

            <button
              type="button"
              (click)="activeTab.set('calculator')"
              class="px-4 py-2 rounded-xl font-semibold transition-all flex items-center gap-2"
              [class.bg-[#C9A227]]="activeTab() === 'calculator'"
              [class.text-[#1F4D3D]]="activeTab() === 'calculator'"
              [class.bg-white/10]="activeTab() !== 'calculator'"
              [class.text-[#F7F5F0]]="activeTab() !== 'calculator'"
            >
              <mat-icon class="mat-icon text-sm">calculate</mat-icon>
              <span>Feed-Cost Calculator</span>
            </button>

            <button
              type="button"
              (click)="activeTab.set('traceability')"
              class="px-4 py-2 rounded-xl font-semibold transition-all flex items-center gap-2"
              [class.bg-[#C9A227]]="activeTab() === 'traceability'"
              [class.text-[#1F4D3D]]="activeTab() === 'traceability'"
              [class.bg-white/10]="activeTab() !== 'traceability'"
              [class.text-[#F7F5F0]]="activeTab() !== 'traceability'"
            >
              <mat-icon class="mat-icon text-sm">qr_code_scanner</mat-icon>
              <span>Traceability Lookup</span>
            </button>

            <button
              type="button"
              (click)="activeTab.set('batches')"
              class="px-4 py-2 rounded-xl font-semibold transition-all flex items-center gap-2"
              [class.bg-[#C9A227]]="activeTab() === 'batches'"
              [class.text-[#1F4D3D]]="activeTab() === 'batches'"
              [class.bg-white/10]="activeTab() !== 'batches'"
              [class.text-[#F7F5F0]]="activeTab() !== 'batches'"
            >
              <mat-icon class="mat-icon text-sm">inventory_2</mat-icon>
              <span>Batch Registry</span>
            </button>
          </div>
        </div>
      </section>

      <!-- TAB 1: OPERATIONAL DASHBOARD -->
      @if (activeTab() === 'dashboard') {
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <!-- Key Metric Cards Strip -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Card 1 -->
            <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm space-y-2">
              <div class="flex items-center justify-between text-xs text-[#5B6560]">
                <span>Active Estate Batches</span>
                <mat-icon class="mat-icon text-sm text-[#1F4D3D]">category</mat-icon>
              </div>
              <div class="font-serif text-3xl font-extrabold text-[#1F4D3D]">
                {{ api.batches().length }} Batches
              </div>
              <p class="text-[11px] text-[#5B6560]">Catfish, Broilers &amp; Hybrid Cocoa</p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm space-y-2">
              <div class="flex items-center justify-between text-xs text-[#5B6560]">
                <span>Avg Farm-Formulated Feed</span>
                <mat-icon class="mat-icon text-sm text-[#C9A227]">payments</mat-icon>
              </div>
              <div class="font-serif text-3xl font-extrabold text-[#1F4D3D]">
                ₦1,045 <span class="text-xs font-normal text-[#5B6560]">/ kg</span>
              </div>
              <p class="text-[11px] text-emerald-700 font-semibold">vs ₦1,850/kg imported commercial pellets</p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm space-y-2">
              <div class="flex items-center justify-between text-xs text-[#5B6560]">
                <span>Calculated Cost Savings</span>
                <mat-icon class="mat-icon text-sm text-emerald-600">trending_down</mat-icon>
              </div>
              <div class="font-serif text-3xl font-extrabold text-[#C9A227]">
                43.5%
              </div>
              <p class="text-[11px] text-[#5B6560]">Saving ₦805 on every kg fed</p>
            </div>

            <!-- Card 4 -->
            <div class="bg-white rounded-2xl p-5 border border-[#E5E0D5] shadow-sm space-y-2">
              <div class="flex items-center justify-between text-xs text-[#5B6560]">
                <span>Projected Biomass Cycle</span>
                <mat-icon class="mat-icon text-sm text-[#4A6670]">scale</mat-icon>
              </div>
              <div class="font-serif text-3xl font-extrabold text-[#1A1A1A]">
                8,400 <span class="text-xs font-normal text-[#5B6560]">kg</span>
              </div>
              <p class="text-[11px] text-[#5B6560]">Mean FCR: 1.15 catfish / 1.62 poultry</p>
            </div>

          </div>

          <!-- Trend Chart & Economics Comparison -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- Feed Cost Comparison Visualizer -->
            <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-6">
              <div class="flex items-center justify-between pb-4 border-b border-[#E5E0D5]">
                <div>
                  <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Feed Expenditure Comparative Benchmark</h3>
                  <p class="text-xs text-[#5B6560]">Cost breakdown per 1,000 kg (1 Tonne) feed production in Saki</p>
                </div>
                <span class="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  ₦805,000 / Tonne Saved
                </span>
              </div>

              <!-- Bar 1: Imported Commercial Pellets -->
              <div class="space-y-1.5">
                <div class="flex justify-between text-xs">
                  <span class="font-medium text-[#1A1A1A]">Imported Commercial Catfish Pellets (42% CP)</span>
                  <span class="font-bold text-red-800">₦1,850,000 / Tonne (₦1,850/kg)</span>
                </div>
                <div class="w-full h-8 bg-red-100 rounded-lg overflow-hidden flex">
                  <div class="w-full bg-red-700/80 h-full flex items-center px-3 text-[11px] font-bold text-white">
                    100% Benchmark Cost (High FX Exposure)
                  </div>
                </div>
              </div>

              <!-- Bar 2: FluxForge On-Site Extruded Pellets -->
              <div class="space-y-1.5 pt-2">
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

              <div class="p-4 bg-[#F7F5F0] rounded-2xl border border-[#E5E0D5] text-xs text-[#5B6560] leading-relaxed">
                <span class="font-bold text-[#1F4D3D]">Algorithmic Advantage:</span> By using local plantain peel meal (from our 5-acre plantation) and Saki smallholder yellow maize, the on-site extruder eliminates distributor markups, import duties, and interstate haulage expenses.
              </div>
            </div>

            <!-- Active Production Overview Card -->
            <div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-6">
              <div class="flex items-center justify-between pb-4 border-b border-[#E5E0D5]">
                <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Current Cycle Status</h3>
                <span class="text-xs text-[#5B6560]">Saki Field Station</span>
              </div>

              <div class="space-y-4 text-xs">
                <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
                  <div class="flex justify-between">
                    <span class="font-semibold text-[#1A1A1A]">Pond 2 (Catfish Growout)</span>
                    <span class="text-[#1F4D3D] font-bold">FF-2026-CAT-001</span>
                  </div>
                  <p class="text-[#5B6560]">Biomass sample 385g · FCR 1.15 · Target Harvest Dec 2026</p>
                </div>

                <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
                  <div class="flex justify-between">
                    <span class="font-semibold text-[#1A1A1A]">Brooding Pen 1 (Broilers)</span>
                    <span class="text-[#1F4D3D] font-bold">FF-2026-PLT-001</span>
                  </div>
                  <p class="text-[#5B6560]">Finisher phase · Sawdust deep litter · 1,200 birds</p>
                </div>

                <div class="p-3.5 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] space-y-1">
                  <div class="flex justify-between">
                    <span class="font-semibold text-[#1A1A1A]">Shaded Nursery (Cocoa/Plantain)</span>
                    <span class="text-[#1F4D3D] font-bold">FF-2026-COC-001</span>
                  </div>
                  <p class="text-[#5B6560]">6,200 CRIN hybrid seedlings potted with organic compost</p>
                </div>
              </div>

              <div class="pt-2">
                <button
                  type="button"
                  (click)="activeTab.set('calculator')"
                  class="w-full py-2.5 px-4 bg-[#1F4D3D] hover:bg-[#16392D] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <mat-icon class="mat-icon text-sm text-[#C9A227]">add_circle</mat-icon>
                  <span>Formulate New Feed Mix</span>
                </button>
              </div>
            </div>

          </div>

        </section>
      }

      <!-- TAB 2: FEED-COST CALCULATOR (GENUINE WORKING LOGIC) -->
      @if (activeTab() === 'calculator') {
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div class="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0D5] shadow-sm space-y-8">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Functional Algorithm</span>
                <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#1F4D3D] mt-1">
                  Least-Cost Ration Calculator &amp; Crude Protein Balance
                </h2>
                <p class="text-xs sm:text-sm text-[#5B6560]">
                  Modify quantities and ingredient wholesale rates in Saki to calculate true production cost per kilogram.
                </p>
              </div>

              <!-- Presets Buttons -->
              <div class="flex flex-wrap items-center gap-2 text-xs">
                <span class="text-[#5B6560] font-medium mr-1">Ration Presets:</span>
                <button
                  type="button"
                  (click)="loadPreset('catfish')"
                  class="px-3 py-1.5 rounded-lg bg-[#F7F5F0] hover:bg-[#1F4D3D] hover:text-white border border-[#E5E0D5] font-semibold transition-colors"
                >
                  Catfish Grower (42% CP)
                </button>
                <button
                  type="button"
                  (click)="loadPreset('tilapia')"
                  class="px-3 py-1.5 rounded-lg bg-[#F7F5F0] hover:bg-[#1F4D3D] hover:text-white border border-[#E5E0D5] font-semibold transition-colors"
                >
                  Tilapia Starter (38% CP)
                </button>
                <button
                  type="button"
                  (click)="loadPreset('poultry')"
                  class="px-3 py-1.5 rounded-lg bg-[#F7F5F0] hover:bg-[#1F4D3D] hover:text-white border border-[#E5E0D5] font-semibold transition-colors"
                >
                  Broiler Finisher (19% CP)
                </button>
              </div>
            </div>

            <!-- Form Content -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <!-- Ingredients Table Inputs -->
              <div class="lg:col-span-8 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-serif text-base font-bold text-[#1A1A1A]">Ingredient Inclusions (Batch Mix)</h3>
                  <button
                    type="button"
                    (click)="addIngredientRow()"
                    class="text-xs font-bold text-[#1F4D3D] hover:text-[#C9A227] flex items-center gap-1"
                  >
                    <mat-icon class="mat-icon text-sm">add</mat-icon>
                    <span>Add Custom Ingredient</span>
                  </button>
                </div>

                <div class="overflow-x-auto border border-[#E5E0D5] rounded-2xl">
                  <table class="w-full text-left text-xs">
                    <thead class="bg-[#F7F5F0] text-[#5B6560] uppercase font-semibold text-[11px] border-b border-[#E5E0D5]">
                      <tr>
                        <th class="py-3 px-3">Ingredient Name</th>
                        <th class="py-3 px-3 w-28">Quantity (kg)</th>
                        <th class="py-3 px-3 w-32">Rate (₦/kg)</th>
                        <th class="py-3 px-3 w-24">Protein %</th>
                        <th class="py-3 px-3 w-28 text-right">Subtotal (₦)</th>
                        <th class="py-3 px-2 w-10"></th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[#E5E0D5]">
                      @for (item of ingredients(); track $index) {
                        <tr>
                          <td class="p-2">
                            <input
                              type="text"
                              [value]="item.name"
                              (input)="onFieldInput($index, 'name', $event)"
                              class="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E0D5] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                            />
                          </td>
                          <td class="p-2">
                            <input
                              type="number"
                              [value]="item.quantityKg"
                              (input)="onFieldInput($index, 'quantityKg', $event)"
                              class="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E0D5] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                            />
                          </td>
                          <td class="p-2">
                            <input
                              type="number"
                              [value]="item.costPerKg"
                              (input)="onFieldInput($index, 'costPerKg', $event)"
                              class="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E0D5] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                            />
                          </td>
                          <td class="p-2">
                            <input
                              type="number"
                              [value]="item.crudeProteinPercent"
                              (input)="onFieldInput($index, 'crudeProteinPercent', $event)"
                              class="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E0D5] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                            />
                          </td>
                          <td class="p-2 text-right font-medium text-[#1A1A1A]">
                            ₦{{ (item.quantityKg * item.costPerKg).toLocaleString() }}
                          </td>
                          <td class="p-2 text-center">
                            <button
                              type="button"
                              (click)="removeIngredientRow($index)"
                              class="text-red-500 hover:text-red-700"
                              title="Remove ingredient"
                            >
                              <mat-icon class="mat-icon text-sm">delete</mat-icon>
                            </button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>

                <div class="flex items-center justify-between text-xs pt-2">
                  <span class="text-[#5B6560]">Calculations update instantaneously via reactive signals.</span>
                  <button
                    type="button"
                    (click)="recalculate()"
                    class="px-4 py-2 bg-[#1F4D3D] text-white font-semibold rounded-lg text-xs"
                  >
                    Recalculate Formula
                  </button>
                </div>
              </div>

              <!-- Calculation Output Card -->
              <div class="lg:col-span-4 bg-[#F7F5F0] rounded-2xl p-6 border border-[#E5E0D5] space-y-6">
                <div>
                  <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Formula Results</span>
                  <h3 class="font-serif text-xl font-bold text-[#1F4D3D] mt-0.5">{{ currentCategory() }}</h3>
                </div>

                <div class="space-y-3 text-xs">
                  <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                    <span class="text-[#5B6560]">Total Batch Weight:</span>
                    <span class="font-bold text-[#1A1A1A]">{{ calculatedResult()?.totalWeightKg }} kg</span>
                  </div>

                  <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                    <span class="text-[#5B6560]">Weighted Crude Protein:</span>
                    <span class="font-bold text-[#1F4D3D] text-sm">{{ calculatedResult()?.crudeProteinAverage }}% CP</span>
                  </div>

                  <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                    <span class="text-[#5B6560]">Total Batch Cost:</span>
                    <span class="font-bold text-[#1A1A1A]">₦{{ calculatedResult()?.totalCostNgn?.toLocaleString() }}</span>
                  </div>

                  <div class="p-4 bg-[#1F4D3D] text-[#F7F5F0] rounded-xl border border-[#16392D] space-y-1">
                    <span class="text-[11px] text-[#C9A227] uppercase font-bold tracking-wider">Calculated Cost Per Kg</span>
                    <div class="font-serif text-3xl font-extrabold text-[#F7F5F0]">
                      ₦{{ calculatedResult()?.costPerKgNgn }} <span class="text-xs font-normal">/ kg</span>
                    </div>
                  </div>

                  <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 space-y-1">
                    <div class="flex justify-between font-bold">
                      <span>Savings vs Commercial:</span>
                      <span>{{ calculatedResult()?.savingsPercentage }}%</span>
                    </div>
                    <p class="text-[11px] text-emerald-800">
                      Saving ₦{{ calculatedResult()?.savingsPerKgNgn }} per kg compared to imported pellets (₦{{ calculatedResult()?.commercialPelletBenchmarkNgnPerKg }}/kg).
                    </p>
                  </div>
                </div>

                <!-- Save Action -->
                <button
                  type="button"
                  (click)="saveFormulaAsBatch()"
                  [disabled]="isSavingBatch()"
                  class="w-full py-3 px-4 bg-[#C9A227] hover:bg-[#B5901F] text-[#1F4D3D] font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <mat-icon class="mat-icon text-sm">bookmark</mat-icon>
                  <span>{{ isSavingBatch() ? 'Recording Batch to Database...' : 'Save Formula as New Farm Batch' }}</span>
                </button>

                @if (saveSuccessMessage()) {
                  <p class="text-xs text-emerald-700 font-semibold text-center">
                    {{ saveSuccessMessage() }}
                  </p>
                }
              </div>

            </div>

          </div>

        </section>
      }

      <!-- TAB 3: TRACEABILITY LOOKUP -->
      @if (activeTab() === 'traceability') {
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div class="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0D5] shadow-sm space-y-8">
            
            <div class="max-w-2xl space-y-3">
              <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Supply Chain Provenance</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#1F4D3D]">
                Verify Batch Lifecycle &amp; Feed Composition
              </h2>
              <p class="text-xs sm:text-sm text-[#5B6560]">
                Enter any batch identification label or select an active demonstration record to trace its origin, feeding schedule, and testing records.
              </p>
            </div>

            <!-- Search Bar -->
            <div class="flex flex-col sm:flex-row items-stretch gap-3 max-w-xl">
              <div class="relative flex-1">
                <mat-icon class="mat-icon absolute left-3.5 top-3 text-[#5B6560] text-lg">search</mat-icon>
                <input
                  type="text"
                  [value]="searchQuery()"
                  (input)="searchQuery.set($any($event.target).value)"
                  placeholder="Enter Batch ID (e.g. FF-2026-CAT-001)"
                  class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
                />
              </div>
              <button
                type="button"
                (click)="performLookup(searchQuery())"
                class="px-6 py-2.5 bg-[#1F4D3D] hover:bg-[#16392D] text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
              >
                Inspect Provenance
              </button>
            </div>

            <!-- Quick Pill Selector for Demo Batches -->
            <div class="flex items-center gap-2 text-xs flex-wrap">
              <span class="text-[#5B6560]">Sample Batches in Database:</span>
              @for (b of api.batches(); track b.id) {
                <button
                  type="button"
                  (click)="performLookup(b.batchLabel)"
                  class="px-2.5 py-1 rounded-md bg-[#F7F5F0] hover:bg-[#C9A227]/20 border border-[#E5E0D5] font-mono text-[11px] text-[#1F4D3D] transition-colors"
                >
                  {{ b.batchLabel }}
                </button>
              }
            </div>

            <!-- Batch Detail Output Card -->
            @if (activeBatch(); as batch) {
              <div class="mt-8 pt-8 border-t border-[#E5E0D5] grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <!-- Left Details -->
                <div class="lg:col-span-7 space-y-6">
                  
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="px-3 py-1.5 bg-[#1F4D3D] text-[#C9A227] font-mono text-sm font-bold rounded-lg">
                        {{ batch.batchLabel }}
                      </span>
                      <span class="text-xs text-[#5B6560] font-semibold">{{ batch.enterprise }}</span>
                    </div>
                    <span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-full">
                      {{ batch.stage }}
                    </span>
                  </div>

                  <div class="grid grid-cols-2 gap-4 text-xs">
                    <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                      <span class="text-[#5B6560] block">Specie / Crop:</span>
                      <span class="font-bold text-[#1A1A1A]">{{ batch.specieOrCrop }}</span>
                    </div>
                    <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                      <span class="text-[#5B6560] block">Certified Origin:</span>
                      <span class="font-bold text-[#1A1A1A]">{{ batch.origin }}</span>
                    </div>
                    <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                      <span class="text-[#5B6560] block">Feed Formulation Used:</span>
                      <span class="font-bold text-[#1F4D3D]">{{ batch.formulationUsed }}</span>
                    </div>
                    <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5]">
                      <span class="text-[#5B6560] block">Feed Conversion Ratio:</span>
                      <span class="font-bold text-[#1F4D3D]">{{ batch.feedConversionRatio }} FCR (₦{{ batch.currentFeedCostPerUnit }}/kg)</span>
                    </div>
                  </div>

                  <!-- Traceability Audit Trail Timeline -->
                  <div class="space-y-4 pt-2">
                    <h4 class="font-serif text-base font-bold text-[#1A1A1A]">Audit Trail &amp; Verification Milestones</h4>
                    
                    <div class="space-y-4 border-l-2 border-[#1F4D3D]/30 pl-5 text-xs">
                      @for (step of batch.traceabilityLogs; track step.stage) {
                        <div class="relative space-y-1">
                          <span
                            class="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                            [class.bg-[#1F4D3D]]="step.status === 'completed'"
                            [class.bg-[#C9A227]]="step.status === 'in_progress'"
                            [class.bg-slate-300]="step.status === 'scheduled'"
                          ></span>
                          
                          <div class="flex items-center justify-between">
                            <span class="font-bold text-[#1A1A1A]">{{ step.stage }}</span>
                            <span class="text-[11px] text-[#5B6560] font-mono">{{ step.timestamp }}</span>
                          </div>
                          
                          <p class="text-[#5B6560] leading-relaxed">{{ step.description }}</p>
                          
                          <div class="text-[11px] text-[#1F4D3D] font-medium flex items-center gap-2">
                            <span>Location: {{ step.location }}</span>
                            <span>·</span>
                            <span>Operator: {{ step.operator }}</span>
                          </div>
                        </div>
                      }
                    </div>
                  </div>

                </div>

                <!-- Right Certificate & QR Visual Card -->
                <div class="lg:col-span-5 flex flex-col items-center justify-between p-6 bg-[#F7F5F0] rounded-3xl border border-[#E5E0D5] text-center space-y-6">
                  
                  <div class="space-y-2">
                    <span class="text-[10px] uppercase font-bold tracking-widest text-[#C9A227]">
                      Digital Provenance Record
                    </span>
                    <h4 class="font-serif text-lg font-bold text-[#1F4D3D]">
                      FluxForge Farm Provenance Certificate
                    </h4>
                    <p class="text-[11px] text-[#5B6560]">
                      Cryptographically signed by FluxForge Farm OS deployed in Saki, Oyo State.
                    </p>
                  </div>

                  <!-- QR Code Render -->
                  <div class="w-40 h-40 bg-white p-3 rounded-2xl border-2 border-[#E5E0D5] flex flex-col items-center justify-center shadow-md">
                    <mat-icon class="mat-icon text-7xl text-[#1F4D3D]">qr_code_2</mat-icon>
                    <span class="font-mono text-[9px] text-[#5B6560] mt-1">{{ batch.batchLabel }}</span>
                  </div>

                  <div class="text-xs space-y-1 w-full p-4 bg-white rounded-xl border border-[#E5E0D5] text-left">
                    <div class="flex justify-between">
                      <span class="text-[#5B6560]">Cycle Start:</span>
                      <span class="font-medium text-[#1A1A1A]">{{ batch.startDate }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[#5B6560]">Target Harvest:</span>
                      <span class="font-medium text-[#1A1A1A]">{{ batch.targetHarvestDate }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[#5B6560]">Status:</span>
                      <span class="font-bold text-[#1F4D3D]">{{ batch.stage }}</span>
                    </div>
                  </div>

                  <p class="text-[10px] text-[#5B6560] italic">
                    Ready for wholesale off-takers, supermarkets, and export compliance verification.
                  </p>

                </div>

              </div>
            } @else {
              <div class="p-8 bg-[#F7F5F0] rounded-2xl text-center border border-[#E5E0D5] space-y-2">
                <mat-icon class="mat-icon text-3xl text-[#5B6560]">search_off</mat-icon>
                <p class="text-xs font-semibold text-[#1A1A1A]">No batch selected or record not found.</p>
                <p class="text-[11px] text-[#5B6560]">Click one of the sample batch IDs above to test the lookup.</p>
              </div>
            }

          </div>

        </section>
      }

      <!-- TAB 4: BATCH REGISTRY -->
      @if (activeTab() === 'batches') {
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div class="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0D5] shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Estate Registry</span>
                <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#1F4D3D] mt-1">
                  Active Production Batches in Database
                </h2>
              </div>
              <button
                type="button"
                (click)="activeTab.set('calculator')"
                class="px-4 py-2 bg-[#1F4D3D] hover:bg-[#16392D] text-white text-xs font-semibold rounded-xl flex items-center gap-2"
              >
                <mat-icon class="mat-icon text-sm text-[#C9A227]">add</mat-icon>
                <span>Formulate New Batch</span>
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="border-b border-[#E5E0D5] text-[#5B6560] uppercase text-[11px]">
                    <th class="py-3 px-3">Batch Code</th>
                    <th class="py-3 px-3">Enterprise</th>
                    <th class="py-3 px-3">Specie / Crop</th>
                    <th class="py-3 px-3">Current Stage</th>
                    <th class="py-3 px-3">Feed Cost / Unit</th>
                    <th class="py-3 px-3">FCR</th>
                    <th class="py-3 px-3">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#E5E0D5] text-[#1A1A1A]">
                  @for (b of api.batches(); track b.id) {
                    <tr class="hover:bg-[#F7F5F0]/60 transition-colors">
                      <td class="py-3.5 px-3 font-mono font-bold text-[#1F4D3D]">{{ b.batchLabel }}</td>
                      <td class="py-3.5 px-3">{{ b.enterprise }}</td>
                      <td class="py-3.5 px-3 font-medium">{{ b.specieOrCrop }}</td>
                      <td class="py-3.5 px-3">
                        <span class="px-2.5 py-1 bg-[#1F4D3D]/10 text-[#1F4D3D] rounded-full text-[11px] font-semibold">
                          {{ b.stage }}
                        </span>
                      </td>
                      <td class="py-3.5 px-3 font-semibold">₦{{ b.currentFeedCostPerUnit }}/kg</td>
                      <td class="py-3.5 px-3">{{ b.feedConversionRatio }}</td>
                      <td class="py-3.5 px-3">
                        <button
                          type="button"
                          (click)="performLookup(b.batchLabel); activeTab.set('traceability')"
                          class="text-xs font-bold text-[#C9A227] hover:underline"
                        >
                          Trace →
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>

        </section>
      }

    </div>
  `,
})
export class FarmOs implements OnInit {
  api = inject(Api);
  private route = inject(ActivatedRoute);

  activeTab = signal<'dashboard' | 'calculator' | 'traceability' | 'batches'>('dashboard');
  searchQuery = signal<string>('FF-2026-CAT-001');
  activeBatch = signal<FeedBatch | null>(null);

  // Calculator State
  currentCategory = signal<FeedFormulaCalculation['targetCategory']>('Aquaculture Catfish');
  ingredients = signal<IngredientInput[]>([
    { name: 'Soya Meal (44% CP)', costPerKg: 1150, quantityKg: 340, crudeProteinPercent: 44 },
    { name: 'Marine Fishmeal Local (65% CP)', costPerKg: 2200, quantityKg: 260, crudeProteinPercent: 65 },
    { name: 'Yellow Maize (Saki Grown 9% CP)', costPerKg: 580, quantityKg: 180, crudeProteinPercent: 9 },
    { name: 'Plantain Peel Meal (Estate 7% CP)', costPerKg: 220, quantityKg: 160, crudeProteinPercent: 7 },
    { name: 'Bone Meal & Premix Fortifier', costPerKg: 850, quantityKg: 60, crudeProteinPercent: 12 },
  ]);

  calculatedResult = signal<FeedFormulaCalculation | null>(null);
  isSavingBatch = signal<boolean>(false);
  saveSuccessMessage = signal<string | null>(null);

  ngOnInit(): void {
    // Initial fetch of batches
    this.api.getBatches().subscribe((batches) => {
      if (batches.length > 0 && !this.activeBatch()) {
        this.activeBatch.set(batches[0]);
      }
    });
    this.recalculate();

    // Check fragment or query params
    this.route.fragment.subscribe((frag) => {
      if (frag === 'calculator') this.activeTab.set('calculator');
      if (frag === 'traceability') this.activeTab.set('traceability');
    });
  }

  loadPreset(type: 'catfish' | 'tilapia' | 'poultry'): void {
    if (type === 'catfish') {
      this.currentCategory.set('Aquaculture Catfish');
      this.ingredients.set([
        { name: 'Soya Meal (44% CP)', costPerKg: 1150, quantityKg: 340, crudeProteinPercent: 44 },
        { name: 'Marine Fishmeal Local (65% CP)', costPerKg: 2200, quantityKg: 260, crudeProteinPercent: 65 },
        { name: 'Yellow Maize (Saki Grown 9% CP)', costPerKg: 580, quantityKg: 180, crudeProteinPercent: 9 },
        { name: 'Plantain Peel Meal (Estate 7% CP)', costPerKg: 220, quantityKg: 160, crudeProteinPercent: 7 },
        { name: 'Bone Meal & Premix Fortifier', costPerKg: 850, quantityKg: 60, crudeProteinPercent: 12 },
      ]);
    } else if (type === 'tilapia') {
      this.currentCategory.set('Aquaculture Tilapia');
      this.ingredients.set([
        { name: 'Soya Meal (44% CP)', costPerKg: 1150, quantityKg: 280, crudeProteinPercent: 44 },
        { name: 'Marine Fishmeal Local (65% CP)', costPerKg: 2200, quantityKg: 200, crudeProteinPercent: 65 },
        { name: 'Yellow Maize (Saki Grown 9% CP)', costPerKg: 580, quantityKg: 240, crudeProteinPercent: 9 },
        { name: 'Wheat Bran & Offal (15% CP)', costPerKg: 420, quantityKg: 180, crudeProteinPercent: 15 },
        { name: 'Cassava Binder Flour (2% CP)', costPerKg: 310, quantityKg: 100, crudeProteinPercent: 2 },
      ]);
    } else {
      this.currentCategory.set('Poultry Broiler');
      this.ingredients.set([
        { name: 'Yellow Maize (Saki Grown 9% CP)', costPerKg: 580, quantityKg: 520, crudeProteinPercent: 9 },
        { name: 'Soya Meal (44% CP)', costPerKg: 1150, quantityKg: 310, crudeProteinPercent: 44 },
        { name: 'Local Fishmeal (65% CP)', costPerKg: 2200, quantityKg: 60, crudeProteinPercent: 65 },
        { name: 'Bone Meal & Limestone (0% CP)', costPerKg: 400, quantityKg: 80, crudeProteinPercent: 0 },
        { name: 'Broiler Premix Fortifier (10% CP)', costPerKg: 1200, quantityKg: 30, crudeProteinPercent: 10 },
      ]);
    }
    this.recalculate();
  }

  addIngredientRow(): void {
    this.ingredients.update((list) => [
      ...list,
      { name: 'Local Grain / By-Product', costPerKg: 500, quantityKg: 50, crudeProteinPercent: 12 },
    ]);
    this.recalculate();
  }

  removeIngredientRow(index: number): void {
    this.ingredients.update((list) => list.filter((_, i) => i !== index));
    this.recalculate();
  }

  onFieldInput(index: number, field: keyof IngredientInput, event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    this.updateIngredient(index, field, inputEl.value);
  }

  updateIngredient(index: number, field: keyof IngredientInput, val: string): void {
    this.ingredients.update((list) => {
      const copy = [...list];
      const target = { ...copy[index] };
      if (field === 'name') {
        target.name = val;
      } else {
        (target[field] as number) = Number(val) || 0;
      }
      copy[index] = target;
      return copy;
    });
    this.recalculate();
  }

  recalculate(): void {
    this.api
      .calculateFeed(this.ingredients(), this.currentCategory(), 'Saki Local Ration')
      .subscribe((res) => {
        this.calculatedResult.set(res);
      });
  }

  saveFormulaAsBatch(): void {
    const calc = this.calculatedResult();
    if (!calc) return;

    this.isSavingBatch.set(true);
    this.saveSuccessMessage.set(null);

    const isAqua = this.currentCategory().includes('Aquaculture');
    const newBatch: Partial<FeedBatch> = {
      batchLabel: `FF-2026-${isAqua ? 'CAT' : 'PLT'}-00${this.api.batches().length + 1}`,
      enterprise: isAqua ? 'Fishery & Feed Mill' : 'Poultry',
      specieOrCrop: isAqua ? 'African Catfish (Clarias gariepinus)' : 'Broiler (Cobb 500)',
      origin: 'Saki Field Nursery Bay',
      stage: 'Nursery / Hatchery',
      startDate: new Date().toISOString().split('T')[0],
      targetHarvestDate: new Date(Date.now() + 120 * 86400000).toISOString().split('T')[0],
      formulationUsed: `${this.currentCategory()} (${calc.crudeProteinAverage}% CP)`,
      currentFeedCostPerUnit: calc.costPerKgNgn,
      feedConversionRatio: isAqua ? 1.15 : 1.62,
      notes: `Formulated on-site at Saki mill. Total batch weight ${calc.totalWeightKg}kg with ₦${calc.savingsPerKgNgn}/kg savings.`,
      traceabilityLogs: [
        {
          stage: 'Batch Formulation & Extrusion',
          location: 'On-site Feed Mill Unit',
          timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
          operator: 'Feed Mill Tech',
          description: `Custom ration compounded with ${calc.ingredients.length} ingredients. Calculated unit cost: ₦${calc.costPerKgNgn}/kg.`,
          status: 'completed',
        },
      ],
    };

    this.api.createBatch(newBatch).subscribe({
      next: (created) => {
        this.isSavingBatch.set(false);
        this.saveSuccessMessage.set(
          `Batch ${created.batchLabel} registered in database! You can trace it in Traceability Lookup.`
        );
        this.api.getBatches().subscribe();
      },
      error: () => {
        this.isSavingBatch.set(false);
      },
    });
  }

  performLookup(query: string): void {
    this.searchQuery.set(query);
    this.api.getBatch(query).subscribe((found) => {
      this.activeBatch.set(found);
    });
  }
}
