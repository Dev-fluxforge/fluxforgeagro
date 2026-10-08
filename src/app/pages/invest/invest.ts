import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-invest',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <div class="space-y-16 lg:space-y-24 py-12 pb-24">
      
      <!-- HEADER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9A227]">
            <mat-icon class="mat-icon text-sm">trending_up</mat-icon>
            <span>Milestone-Driven Capital Deployment</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-5xl font-extrabold text-[#1F4D3D] tracking-tight leading-tight">
            Partner With Us: Phase Roadmap &amp; Direct Inquiry
          </h1>
          <p class="text-base sm:text-lg text-[#5B6560] leading-relaxed">
            We are structuring grant partnerships, concessional debt, and co-investment for Phase 1 execution in Saki. Every milestone is measurable, capital-efficient, and tied to verifiable real-world outcomes.
          </p>
        </div>
      </section>

      <!-- MILESTONE ROADMAP (PHASE 1, 2, 3) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span class="text-xs font-semibold text-[#1F4D3D] uppercase tracking-wider">Strategic Sequence</span>
          <h2 class="font-serif text-3xl font-bold text-[#1A1A1A] mt-1">
            Execution Roadmap &amp; Milestone Deliverables
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Phase 1 -->
          <div class="bg-white rounded-3xl p-7 border-2 border-[#1F4D3D] shadow-md flex flex-col justify-between space-y-6 relative">
            <div class="absolute -top-3 left-6">
              <span class="px-3 py-1 bg-[#1F4D3D] text-[#C9A227] text-xs font-bold rounded-full uppercase tracking-wider">
                Current Priority · Phase 1
              </span>
            </div>
            <div class="space-y-4 pt-2">
              <div>
                <span class="text-xs text-[#5B6560] font-semibold">Months 1 – 6</span>
                <h3 class="font-serif text-2xl font-bold text-[#1F4D3D] mt-0.5">Nursery &amp; Infrastructure Setup</h3>
              </div>
              <p class="text-xs text-[#5B6560] leading-relaxed">
                Establish the physical, legal, and biological foundation across the 10-acre perimeter in Saki.
              </p>
              <ul class="text-xs text-[#1A1A1A] space-y-2 border-t border-[#E5E0D5] pt-4">
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">check_circle</mat-icon>
                  <span>Completion of customary land allocation deed with Saki Traditional Council</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">check_circle</mat-icon>
                  <span>Solar borehole water reticulation &amp; perimeter security fencing</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">check_circle</mat-icon>
                  <span>Cocoa polybag nursery (6,200 CRIN hybrid seedlings) &amp; plantain suckers</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">check_circle</mat-icon>
                  <span>Direct employment ramp: 12 foundational roles recruited</span>
                </li>
              </ul>
            </div>
            <div class="p-3 bg-[#1F4D3D]/5 rounded-xl border border-[#1F4D3D]/10 text-xs font-medium text-[#1F4D3D]">
              Key Ask: Pre-Seed Grant &amp; Civil Works Co-Funding
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="bg-white rounded-3xl p-7 border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div>
                <span class="text-xs text-[#5B6560] font-semibold">Months 7 – 18</span>
                <h3 class="font-serif text-2xl font-bold text-[#1A1A1A] mt-0.5">Feed Mill &amp; Aquaculture Scale</h3>
              </div>
              <p class="text-xs text-[#5B6560] leading-relaxed">
                Installing the on-site feed extruder to eliminate reliance on expensive imported commercial feed.
              </p>
              <ul class="text-xs text-[#1A1A1A] space-y-2 border-t border-[#E5E0D5] pt-4">
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Installation of 500kg/hr floating pellet extruder &amp; hammer mill</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Excavation and stocking of 4 earthen ponds (12,000 catfish capacity)</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Erection of 2-acre poultry pens &amp; deep-litter composting shed</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Direct employment ramp: 22 skilled technical roles</span>
                </li>
              </ul>
            </div>
            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] text-xs font-medium text-[#5B6560]">
              Milestone: 38% feed cost savings achieved on-site
            </div>
          </div>

          <!-- Phase 3 -->
          <div class="bg-white rounded-3xl p-7 border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div>
                <span class="text-xs text-[#5B6560] font-semibold">Months 19 – 36</span>
                <h3 class="font-serif text-2xl font-bold text-[#1A1A1A] mt-0.5">Full Capacity &amp; Outgrower Hub</h3>
              </div>
              <p class="text-xs text-[#5B6560] leading-relaxed">
                Reaching mature circular operations, farm-gate distribution, and Farm OS outgrower integration.
              </p>
              <ul class="text-xs text-[#1A1A1A] space-y-2 border-t border-[#E5E0D5] pt-4">
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Transplanted 5-acre cocoa plantation enters closed-canopy phase</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Continuous 3-ton/month catfish harvest &amp; QR provenance cold packaging</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Full-scale employment: up to 33 direct jobs sustained in Saki</span>
                </li>
                <li class="flex items-start gap-2">
                  <mat-icon class="mat-icon text-sm text-[#C9A227] shrink-0 mt-0.5">radio_button_unchecked</mat-icon>
                  <span>Feed mill supplies surplus formulated pellets to 40+ local farmers</span>
                </li>
              </ul>
            </div>
            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] text-xs font-medium text-[#5B6560]">
              Milestone: Self-sustaining operational cashflows
            </div>
          </div>

        </div>
      </section>

      <!-- CONTACT & INVESTOR INQUIRY FORM (REAL BACKEND SUBMISSION) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-[#E5E0D5] p-8 sm:p-12 shadow-sm">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Left Info Panel -->
            <div class="lg:col-span-5 space-y-6">
              <div>
                <span class="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">Direct Engagement</span>
                <h2 class="font-serif text-3xl font-bold text-[#1F4D3D] mt-1">
                  Start a Conversation
                </h2>
                <p class="text-sm text-[#5B6560] mt-2 leading-relaxed">
                  Submissions are reviewed directly by founder Badmus Muhammad Adeniyi and our technical advisors. We respond within 48 hours with comprehensive pitch materials and data rooms.
                </p>
              </div>

              <div class="space-y-4 pt-2 text-xs text-[#1A1A1A]">
                <div class="p-4 bg-[#F7F5F0] rounded-2xl border border-[#E5E0D5] space-y-1">
                  <span class="font-bold text-[#1F4D3D] block text-sm">Direct Email</span>
                  <span class="text-[#5B6560]">contact&#64;fluxforge.ng · badmus&#64;fluxforge.ng</span>
                </div>
                <div class="p-4 bg-[#F7F5F0] rounded-2xl border border-[#E5E0D5] space-y-1">
                  <span class="font-bold text-[#1F4D3D] block text-sm">Headquarters</span>
                  <span class="text-[#5B6560]">Saki, Oyo North Senatorial District, Oyo State, Nigeria</span>
                </div>
                <div class="p-4 bg-[#1F4D3D]/5 rounded-2xl border border-[#1F4D3D]/15 space-y-1">
                  <span class="font-bold text-[#1F4D3D] block text-sm">Grant Data Room</span>
                  <span class="text-[#5B6560]">Financial model, topographical survey records, and Farm OS architecture documents available upon inquiry.</span>
                </div>
              </div>
            </div>

            <!-- Right Interactive Form -->
            <div class="lg:col-span-7">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-5">
                
                @if (submitSuccess()) {
                  <div class="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 space-y-2">
                    <div class="flex items-center gap-2 font-bold text-sm">
                      <mat-icon class="mat-icon text-emerald-700">check_circle</mat-icon>
                      <span>Inquiry Successfully Transmitted</span>
                    </div>
                    <p class="text-xs text-emerald-800 leading-relaxed">
                      {{ successMessage() }}
                    </p>
                    <button
                      type="button"
                      (click)="resetForm()"
                      class="text-xs font-semibold text-emerald-900 underline pt-1"
                    >
                      Send another message
                    </button>
                  </div>
                }

                @if (submitError()) {
                  <div class="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-xs flex items-center gap-2">
                    <mat-icon class="mat-icon text-sm text-red-600">error</mat-icon>
                    <span>{{ submitError() }}</span>
                  </div>
                }

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Name -->
                  <div>
                    <label for="contact-name" class="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      Full Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      formControlName="name"
                      placeholder="e.g. Dr. Kolade Adeleke"
                      class="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label for="contact-email" class="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      formControlName="email"
                      placeholder="e.g. k.adeleke@agrifund.org"
                      class="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Organization -->
                  <div>
                    <label for="contact-org" class="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      Organization / Affiliation
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      formControlName="organization"
                      placeholder="e.g. Agri-Innovation Fund / Cooperative"
                      class="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
                    />
                  </div>

                  <!-- Interest Type -->
                  <div>
                    <label for="contact-type" class="block text-xs font-semibold text-[#1A1A1A] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-type"
                      formControlName="interestType"
                      class="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
                    >
                      <option value="Investor / Grant Review">Investor / Grant Review Committee</option>
                      <option value="Strategic Partner">Agricultural Development Partner</option>
                      <option value="Feed Supply / Outgrower">Smallholder Grain Supplier / Outgrower</option>
                      <option value="Community / Media">Community / Academic Inquiry</option>
                    </select>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <label for="contact-message" class="block text-xs font-semibold text-[#1A1A1A] mb-1">
                    Message / Proposal Scope <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    formControlName="message"
                    placeholder="Describe your review criteria, partnership scope, or questions about the 10-acre Saki estate..."
                    class="w-full px-4 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  [disabled]="isSubmitting() || contactForm.invalid"
                  class="w-full py-3.5 px-6 rounded-xl bg-[#1F4D3D] hover:bg-[#16392D] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <mat-icon class="mat-icon text-base">send</mat-icon>
                  <span>{{ isSubmitting() ? 'Submitting to Database...' : 'Submit Inquiry to FluxForge Team' }}</span>
                </button>

                <p class="text-[11px] text-[#5B6560] text-center">
                  Submissions are stored securely in the FluxForge backend database. We never share partner contact information.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  `,
})
export class Invest {
  private api = inject(Api);

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    organization: new FormControl(''),
    interestType: new FormControl('Investor / Grant Review', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  isSubmitting = signal<boolean>(false);
  submitSuccess = signal<boolean>(false);
  successMessage = signal<string>('');
  submitError = signal<string | null>(null);

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    const formVal = this.contactForm.value;

    this.api
      .submitContact({
        name: formVal.name!,
        email: formVal.email!,
        organization: formVal.organization || undefined,
        interestType: formVal.interestType!,
        message: formVal.message!,
      })
      .subscribe({
        next: (res) => {
          this.isSubmitting.set(false);
          this.submitSuccess.set(true);
          this.successMessage.set(
            res.message || 'Your inquiry was recorded successfully in our database.'
          );
          this.contactForm.reset({
            interestType: 'Investor / Grant Review',
          });
        },
        error: (err) => {
          this.isSubmitting.set(false);
          this.submitError.set(
            err.error?.error || 'A network error occurred. Please try again or email us directly.'
          );
        },
      });
  }

  resetForm(): void {
    this.submitSuccess.set(false);
    this.submitError.set(null);
  }
}
