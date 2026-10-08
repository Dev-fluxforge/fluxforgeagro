import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Api } from '../../core/services/api';


@Component({
  selector: 'app-impact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  template: `
    <div class="space-y-16 lg:space-y-24 py-12 pb-24">
      
      <!-- HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
            <mat-icon class="mat-icon text-sm">handshake</mat-icon>
            <span>Measurable Outcomes &amp; Community Value Creation</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F4D3D] tracking-tight leading-tight">
            Economic Impact, Job Trajectory &amp; Live Farm Journal
          </h1>
          <p class="text-base sm:text-lg text-[#5B6560] leading-relaxed">
            Real agribusiness creates tangible local livelihoods. We track our direct employment trajectory up to 33 direct jobs by Year 3, backed by timestamped, photo-verified dispatches from our field operations in Saki.
          </p>
        </div>
      </section>

      <!-- SECTION 1: JOB CREATION BREAKDOWN (YEAR 1 vs YEAR 3) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-6 sm:p-10 shadow-sm space-y-8">
          
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
            <div>
              <span class="text-xs font-semibold text-[#1F4D3D] uppercase tracking-wider">Employment Trajectory</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-1">
                Direct STEMM &amp; Agricultural Employment Plan
              </h2>
            </div>
            <div class="text-xs text-[#5B6560] bg-[#F7F5F0] px-4 py-2 rounded-xl border border-[#E5E0D5]">
              <span class="font-bold text-[#1F4D3D]">Target:</span> Up to 33 direct formal jobs by Year 3
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Year 1 Phase: 12 Direct Jobs -->
            <div class="p-6 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-5">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Phase 1 (Pilot Year)</span>
                  <h3 class="font-serif text-2xl font-bold text-[#1F4D3D]">12 Direct Jobs</h3>
                </div>
                <span class="px-3 py-1 bg-[#1F4D3D]/10 text-[#1F4D3D] text-xs font-bold rounded-lg">
                  Setup &amp; Nursery
                </span>
              </div>

              <div class="space-y-3 text-xs">
                <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                  <span class="font-medium text-[#1A1A1A]">Feed Mill Technicians &amp; Millers</span>
                  <span class="font-bold text-[#1F4D3D]">3 Roles</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                  <span class="font-medium text-[#1A1A1A]">Aquaculture / Hatchery Technicians</span>
                  <span class="font-bold text-[#1F4D3D]">3 Roles</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                  <span class="font-medium text-[#1A1A1A]">Poultry Attendants &amp; Brooding</span>
                  <span class="font-bold text-[#1F4D3D]">2 Roles</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                  <span class="font-medium text-[#1A1A1A]">Cocoa Nursery Hands &amp; Agronomy</span>
                  <span class="font-bold text-[#1F4D3D]">3 Roles</span>
                </div>
                <div class="p-3 bg-white rounded-xl border border-[#E5E0D5] flex justify-between items-center">
                  <span class="font-medium text-[#1A1A1A]">Farm OS Technical Director &amp; Ops</span>
                  <span class="font-bold text-[#1F4D3D]">1 Role</span>
                </div>
              </div>

              <p class="text-[11px] text-[#5B6560] italic">
                Focus: Ground clearing, earthen pond civil works, pilot 2-ton feed mill installation, and 6,200 hybrid cocoa seedlings.
              </p>
            </div>

            <!-- Year 3 Scaling Phase: Up to 33 Direct Jobs -->
            <div class="p-6 rounded-2xl bg-[#1F4D3D] text-[#F7F5F0] border border-[#16392D] space-y-5">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-[#C9A227] uppercase tracking-wider">Phase 3 (Full Operational Scale)</span>
                  <h3 class="font-serif text-2xl font-bold text-[#F7F5F0]">Up to 33 Direct Jobs</h3>
                </div>
                <span class="px-3 py-1 bg-[#C9A227] text-[#1F4D3D] text-xs font-bold rounded-lg">
                  Full Capacity
                </span>
              </div>

              <div class="space-y-3 text-xs text-[#1A1A1A]">
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex justify-between items-center text-[#F7F5F0]">
                  <span class="font-medium">Commercial Feed Extrusion &amp; Packaging</span>
                  <span class="font-bold text-[#C9A227]">9 Roles</span>
                </div>
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex justify-between items-center text-[#F7F5F0]">
                  <span class="font-medium">Aquaculture Growout, Depuration &amp; Smoking</span>
                  <span class="font-bold text-[#C9A227]">8 Roles</span>
                </div>
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex justify-between items-center text-[#F7F5F0]">
                  <span class="font-medium">Poultry Layer &amp; Broiler Operations</span>
                  <span class="font-bold text-[#C9A227]">6 Roles</span>
                </div>
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex justify-between items-center text-[#F7F5F0]">
                  <span class="font-medium">5-Acre Cocoa &amp; Plantain Field Agronomy</span>
                  <span class="font-bold text-[#C9A227]">7 Roles</span>
                </div>
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex justify-between items-center text-[#F7F5F0]">
                  <span class="font-medium">Farm OS Systems, Traceability &amp; Logistics</span>
                  <span class="font-bold text-[#C9A227]">3 Roles</span>
                </div>
              </div>

              <p class="text-[11px] text-[#F7F5F0]/70 italic">
                Plus indirect linkage with 45+ Saki outgrower farming families supplying maize, soy, and plantains to our feed mill.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- SECTION 2: FARM JOURNAL & PROOF-OF-PROGRESS FEED -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Audit Trail &amp; Evidence</span>
            <h2 class="font-serif text-3xl font-bold text-[#1F4D3D] mt-1">Farm Journal: Live Field Dispatches</h2>
            <p class="text-sm text-[#5B6560]">
              Real-world milestones published directly from our database. Transparent proof of progress for investors and reviewers.
            </p>
          </div>

          <!-- Category Segmented Filters -->
          <div class="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-[#E5E0D5] text-xs">
            @for (cat of categories; track cat) {
              <button
                type="button"
                (click)="filterCategory(cat)"
                class="px-3 py-1.5 rounded-lg font-medium transition-all"
                [class.bg-[#1F4D3D]]="selectedCategory() === cat"
                [class.text-white]="selectedCategory() === cat"
                [class.text-[#5B6560]]="selectedCategory() !== cat"
                [class.hover:text-[#1A1A1A]]="selectedCategory() !== cat"
              >
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Journal Posts Grid -->
        @if (filteredPosts().length > 0) {
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @for (post of filteredPosts(); track post.id) {
              <article
                [id]="post.slug"
                class="bg-white rounded-3xl overflow-hidden border border-[#E5E0D5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div class="aspect-[16/9] w-full overflow-hidden bg-[#E5E0D5] relative">
                    <img
                      [src]="post.imageUrl"
                      [alt]="post.title"
                      class="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div class="absolute top-4 left-4">
                      <span class="px-2.5 py-1 bg-[#1F4D3D] text-[#C9A227] text-xs font-semibold rounded-md shadow-sm">
                        {{ post.category }}
                      </span>
                    </div>
                  </div>

                  <div class="p-6 sm:p-8 space-y-4">
                    <div class="flex items-center gap-2 text-xs text-[#5B6560]">
                      <span class="font-medium text-[#1A1A1A]">{{ post.author }}</span>
                      <span aria-hidden="true">·</span>
                      <span>{{ post.publishedAt.split('T')[0] }}</span>
                      <span aria-hidden="true">·</span>
                      <span>{{ post.readTimeMinutes }} min read</span>
                    </div>

                    <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#1F4D3D] leading-snug">
                      {{ post.title }}
                    </h3>

                    <p class="text-xs sm:text-sm text-[#5B6560] leading-relaxed">
                      {{ post.excerpt }}
                    </p>

                    <!-- Expandable Full Article Body -->
                    @if (expandedPostId() === post.id) {
                      <div class="pt-4 border-t border-[#E5E0D5] text-xs sm:text-sm text-[#1A1A1A] whitespace-pre-line leading-relaxed space-y-3 bg-[#F7F5F0] p-4 rounded-xl">
                        {{ post.body }}
                      </div>
                    }
                  </div>
                </div>

                <div class="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E5E0D5]/60 mt-4">
                  <button
                    type="button"
                    (click)="toggleExpand(post.id)"
                    class="text-xs font-bold text-[#1F4D3D] hover:text-[#C9A227] flex items-center gap-1.5"
                  >
                    <span>{{ expandedPostId() === post.id ? 'Collapse Dispatch' : 'Read Full Dispatch' }}</span>
                    <mat-icon class="mat-icon text-sm">
                      {{ expandedPostId() === post.id ? 'expand_less' : 'expand_more' }}
                    </mat-icon>
                  </button>

                  <span class="text-[11px] text-[#5B6560]">
                    Verified Field Record
                  </span>
                </div>
              </article>
            }
          </div>
        } @else {
          <!-- Polish Intentional Empty State -->
          <div class="bg-white rounded-3xl p-12 text-center border border-[#E5E0D5] max-w-lg mx-auto space-y-4">
            <div class="w-12 h-12 rounded-xl bg-[#F7F5F0] text-[#C9A227] flex items-center justify-center mx-auto">
              <mat-icon class="mat-icon text-2xl">feed</mat-icon>
            </div>
            <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">No Updates in this Category Yet</h3>
            <p class="text-xs text-[#5B6560] leading-relaxed">
              Field dispatches are published as active physical operations occur. Check back soon or view all categories.
            </p>
            <button
              (click)="filterCategory('All')"
              class="px-4 py-2 bg-[#1F4D3D] text-white text-xs font-semibold rounded-lg"
            >
              Show All Updates
            </button>
          </div>
        }

      </section>

    </div>
  `,
})
export class Impact implements OnInit {
  api = inject(Api);

  categories: string[] = ['All', 'Land & Survey', 'Feed Mill', 'Farm OS Tech', 'Community'];
  selectedCategory = signal<string>('All');
  expandedPostId = signal<string | null>(null);

  ngOnInit(): void {
    this.api.getJournalPosts().subscribe();
  }

  filterCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  toggleExpand(postId: string): void {
    if (this.expandedPostId() === postId) {
      this.expandedPostId.set(null);
    } else {
      this.expandedPostId.set(postId);
    }
  }

  filteredPosts = () => {
    const cat = this.selectedCategory();
    const all = this.api.posts();
    if (cat === 'All') return all;
    return all.filter((p) => p.category === cat);
  };
}
