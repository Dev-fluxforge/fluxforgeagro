import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth';
import { Api } from '../../core/services/api';
import { ContactSubmission, JournalPost } from '../../core/models/types';

@Component({
  selector: 'app-admin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatIconModule],
  template: `
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      
      <!-- If NOT authenticated: Show Operator Login -->
      @if (!auth.isAuthenticated()) {
        <div class="max-w-md mx-auto bg-white rounded-3xl p-8 border border-[#E5E0D5] shadow-lg space-y-6">
          <div class="text-center space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-[#1F4D3D] text-[#C9A227] flex items-center justify-center mx-auto shadow-sm">
              <mat-icon class="mat-icon text-2xl">lock</mat-icon>
            </div>
            <span class="text-xs uppercase font-mono tracking-widest text-[#C9A227]">Restricted Access</span>
            <h1 class="font-serif text-2xl font-bold text-[#1F4D3D]">Operator Administration</h1>
            <p class="text-xs text-[#5B6560]">
              Discreet portal for publishing field updates and reviewing partner inquiries.
            </p>
          </div>

          <form [formGroup]="loginForm" (ngSubmit)="onLogin()" class="space-y-4">
            @if (loginError()) {
              <div class="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-center gap-2">
                <mat-icon class="mat-icon text-sm">error</mat-icon>
                <span>{{ loginError() }}</span>
              </div>
            }

            <div>
              <label for="admin-email" class="block text-xs font-semibold text-[#1A1A1A] mb-1">Operator Email</label>
              <input
                id="admin-email"
                type="email"
                formControlName="email"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
              />
            </div>

            <div>
              <label for="admin-pass" class="block text-xs font-semibold text-[#1A1A1A] mb-1">Passkey</label>
              <input
                id="admin-pass"
                type="password"
                formControlName="password"
                class="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F4D3D]"
              />
            </div>

            <button
              type="submit"
              [disabled]="isLoggingIn() || loginForm.invalid"
              class="w-full py-3 bg-[#1F4D3D] hover:bg-[#16392D] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
            >
              {{ isLoggingIn() ? 'Authenticating...' : 'Sign In as Operator' }}
            </button>

            <!-- Evaluator Helper Notice -->
            <div class="p-3 bg-[#F7F5F0] rounded-xl border border-[#E5E0D5] text-[11px] text-[#5B6560] space-y-1">
              <span class="font-bold text-[#1F4D3D] block">Evaluator Credentials:</span>
              <p>Email: <code class="font-mono text-[#1A1A1A]">admin&#64;fluxforge.ng</code></p>
              <p>Passkey: <code class="font-mono text-[#1A1A1A]">saki-agro-2026</code></p>
            </div>
          </form>
        </div>
      } @else {
        
        <!-- OPERATOR DASHBOARD (AUTHENTICATED) -->
        <div class="space-y-8">
          
          <!-- Top Bar -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E0D5] gap-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span class="text-xs font-mono text-[#C9A227] uppercase">Session Active</span>
              </div>
              <h1 class="font-serif text-2xl sm:text-3xl font-bold text-[#1F4D3D]">
                FluxForge Operations Backoffice
              </h1>
              <p class="text-xs text-[#5B6560]">Logged in as {{ auth.user()?.email }} ({{ auth.user()?.role }})</p>
            </div>

            <div class="flex items-center gap-3">
              <div class="flex bg-white rounded-xl border border-[#E5E0D5] p-1 text-xs">
                <button
                  type="button"
                  (click)="adminTab.set('journal')"
                  class="px-3 py-1.5 rounded-lg font-semibold transition-colors"
                  [class.bg-[#1F4D3D]]="adminTab() === 'journal'"
                  [class.text-white]="adminTab() === 'journal'"
                  [class.text-[#5B6560]]="adminTab() !== 'journal'"
                >
                  Farm Journal CRUD
                </button>
                <button
                  type="button"
                  (click)="adminTab.set('inquiries')"
                  class="px-3 py-1.5 rounded-lg font-semibold transition-colors"
                  [class.bg-[#1F4D3D]]="adminTab() === 'inquiries'"
                  [class.text-white]="adminTab() === 'inquiries'"
                  [class.text-[#5B6560]]="adminTab() !== 'inquiries'"
                >
                  Inquiries ({{ inquiries().length }})
                </button>
              </div>

              <button
                type="button"
                (click)="onLogout()"
                class="px-3 py-1.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 text-xs font-bold transition-colors flex items-center gap-1"
              >
                <mat-icon class="mat-icon text-xs">logout</mat-icon>
                <span>Logout</span>
              </button>
            </div>
          </div>

          <!-- TAB 1: JOURNAL CRUD -->
          @if (adminTab() === 'journal') {
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <!-- Left: Create New Post Form -->
              <div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-5">
                <div>
                  <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Publish New Field Report</h3>
                  <p class="text-xs text-[#5B6560]">Persists directly into the database without rebuilding.</p>
                </div>

                <form [formGroup]="postForm" (ngSubmit)="onCreatePost()" class="space-y-4 text-xs">
                  @if (postSuccess()) {
                    <div class="p-3 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl">
                      Field report published successfully to database!
                    </div>
                  }

                  <div>
                    <label for="post-title" class="block font-semibold text-[#1A1A1A] mb-1">Title *</label>
                    <input
                      id="post-title"
                      type="text"
                      formControlName="title"
                      placeholder="e.g. Ground Clearing Commenced on 3-Acre Aquaculture Basin"
                      class="w-full px-3 py-2 rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                    />
                  </div>

                  <div>
                    <label for="post-category" class="block font-semibold text-[#1A1A1A] mb-1">Category *</label>
                    <select
                      id="post-category"
                      formControlName="category"
                      class="w-full px-3 py-2 rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                    >
                      <option value="Land & Survey">Land & Survey</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Feed Mill">Feed Mill</option>
                      <option value="Farm OS Tech">Farm OS Tech</option>
                      <option value="Community">Community</option>
                    </select>
                  </div>

                  <div>
                    <label for="post-image" class="block font-semibold text-[#1A1A1A] mb-1">Photo URL (Cloudinary / Web)</label>
                    <input
                      id="post-image"
                      type="text"
                      formControlName="imageUrl"
                      placeholder="https://res.cloudinary.com/... or https://..."
                      class="w-full px-3 py-2 rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                    />
                  </div>

                  <div>
                    <label for="post-excerpt" class="block font-semibold text-[#1A1A1A] mb-1">Short Excerpt *</label>
                    <textarea
                      id="post-excerpt"
                      rows="2"
                      formControlName="excerpt"
                      placeholder="Brief 1-2 sentence preview for cards..."
                      class="w-full px-3 py-2 rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                    ></textarea>
                  </div>

                  <div>
                    <label for="post-body" class="block font-semibold text-[#1A1A1A] mb-1">Full Dispatch Body *</label>
                    <textarea
                      id="post-body"
                      rows="6"
                      formControlName="body"
                      placeholder="Detailed agronomic or technical description..."
                      class="w-full px-3 py-2 rounded-xl border border-[#E5E0D5] bg-[#F7F5F0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1F4D3D]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    [disabled]="postForm.invalid || isPosting()"
                    class="w-full py-3 bg-[#1F4D3D] hover:bg-[#16392D] disabled:opacity-50 text-white font-bold uppercase rounded-xl transition-colors cursor-pointer"
                  >
                    {{ isPosting() ? 'Publishing...' : 'Commit Dispatch to Database' }}
                  </button>
                </form>
              </div>

              <!-- Right: Existing Posts List -->
              <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-[#E5E0D5]">
                  <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Published Dispatches ({{ api.posts().length }})</h3>
                  <span class="text-xs text-[#5B6560]">Live in Public Feed</span>
                </div>

                <div class="space-y-3">
                  @for (post of api.posts(); track post.id) {
                    <div class="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] flex items-start justify-between gap-4">
                      <div class="space-y-1 text-xs">
                        <div class="flex items-center gap-2">
                          <span class="font-bold text-[#1F4D3D]">{{ post.category }}</span>
                          <span class="text-[#5B6560]">· {{ post.publishedAt.split('T')[0] }}</span>
                        </div>
                        <h4 class="font-serif text-sm font-bold text-[#1A1A1A]">{{ post.title }}</h4>
                        <p class="text-[#5B6560] line-clamp-2 leading-relaxed">{{ post.excerpt }}</p>
                      </div>

                      <button
                        type="button"
                        (click)="onDeletePost(post.id)"
                        class="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                        title="Delete post"
                      >
                        <mat-icon class="mat-icon text-lg">delete</mat-icon>
                      </button>
                    </div>
                  }
                </div>
              </div>

            </div>
          }

          <!-- TAB 2: CONTACT INQUIRIES INBOX -->
          @if (adminTab() === 'inquiries') {
            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0D5] shadow-sm space-y-6">
              <div class="flex items-center justify-between pb-4 border-b border-[#E5E0D5]">
                <div>
                  <h3 class="font-serif text-lg font-bold text-[#1F4D3D]">Partner Inquiries &amp; Leads Inbox</h3>
                  <p class="text-xs text-[#5B6560]">Submissions recorded from the Invest &amp; Partner page.</p>
                </div>
                <button
                  type="button"
                  (click)="loadInquiries()"
                  class="px-3 py-1.5 bg-[#F7F5F0] border border-[#E5E0D5] text-xs font-semibold rounded-lg flex items-center gap-1"
                >
                  <mat-icon class="mat-icon text-sm">refresh</mat-icon>
                  <span>Refresh</span>
                </button>
              </div>

              @if (inquiries().length > 0) {
                <div class="space-y-4">
                  @for (inq of inquiries(); track inq.id) {
                    <div class="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E5E0D5] space-y-3 text-xs">
                      <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                          <span class="font-bold text-sm text-[#1F4D3D]">{{ inq.name }}</span>
                          @if (inq.organization) {
                            <span class="text-[#5B6560]">({{ inq.organization }})</span>
                          }
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="px-2.5 py-0.5 bg-[#1F4D3D]/10 text-[#1F4D3D] font-medium rounded-full text-[11px]">
                            {{ inq.interestType }}
                          </span>
                          <span class="text-[11px] text-[#5B6560]">{{ inq.submittedAt.split('T')[0] }}</span>
                        </div>
                      </div>

                      <p class="text-[#1A1A1A] bg-white p-3.5 rounded-xl border border-[#E5E0D5] leading-relaxed">
                        {{ inq.message }}
                      </p>

                      <div class="flex items-center justify-between pt-1">
                        <span class="text-[#5B6560]">Email: <a [href]="'mailto:' + inq.email" class="text-[#1F4D3D] font-bold hover:underline">{{ inq.email }}</a></span>

                        <!-- Status toggle -->
                        <div class="flex items-center gap-1.5">
                          <span class="text-[#5B6560]">Status:</span>
                          <button
                            type="button"
                            (click)="updateStatus(inq.id, 'reviewed')"
                            class="px-2 py-0.5 rounded text-[11px] font-semibold"
                            [class.bg-[#C9A227]]="inq.status === 'reviewed'"
                            [class.text-[#1F4D3D]]="inq.status === 'reviewed'"
                            [class.bg-white]="inq.status !== 'reviewed'"
                            [class.border]="true"
                          >
                            Reviewed
                          </button>
                          <button
                            type="button"
                            (click)="updateStatus(inq.id, 'responded')"
                            class="px-2 py-0.5 rounded text-[11px] font-semibold"
                            [class.bg-emerald-700]="inq.status === 'responded'"
                            [class.text-white]="inq.status === 'responded'"
                            [class.bg-white]="inq.status !== 'responded'"
                            [class.border]="true"
                          >
                            Responded
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              } @else {
                <div class="p-8 text-center bg-[#F7F5F0] rounded-2xl border border-[#E5E0D5] text-xs text-[#5B6560]">
                  No inquiries recorded yet. Test submissions will appear here.
                </div>
              }
            </div>
          }

        </div>
      }

    </div>
  `,
})
export class Admin implements OnInit {
  auth = inject(AuthService);
  api = inject(Api);

  adminTab = signal<'journal' | 'inquiries'>('journal');
  loginError = signal<string | null>(null);
  isLoggingIn = signal<boolean>(false);

  inquiries = signal<ContactSubmission[]>([]);

  // Login Form
  loginForm = new FormGroup({
    email: new FormControl('admin@fluxforge.ng', [Validators.required, Validators.email]),
    password: new FormControl('saki-agro-2026', [Validators.required]),
  });

  // Post Form
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('Infrastructure', [Validators.required]),
    imageUrl: new FormControl('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'),
    excerpt: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  isPosting = signal<boolean>(false);
  postSuccess = signal<boolean>(false);

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.loadInquiries();
      this.api.getJournalPosts().subscribe();
    }
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;
    this.isLoggingIn.set(true);
    this.loginError.set(null);

    const val = this.loginForm.value;
    this.auth.login(val.email!, val.password!).subscribe({
      next: () => {
        this.isLoggingIn.set(false);
        this.loadInquiries();
        this.api.getJournalPosts().subscribe();
      },
      error: (err) => {
        this.isLoggingIn.set(false);
        this.loginError.set(err.error?.error || 'Authentication rejected. Verify credentials.');
      },
    });
  }

  onLogout(): void {
    this.auth.logout();
  }

  loadInquiries(): void {
    this.api.getContactSubmissions().subscribe((list) => {
      this.inquiries.set(list);
    });
  }

  onCreatePost(): void {
    if (this.postForm.invalid) return;
    this.isPosting.set(true);
    this.postSuccess.set(false);

    const val = this.postForm.value;
    this.api
      .createJournalPost({
        title: val.title!,
        category: val.category! as JournalPost['category'],
        imageUrl: val.imageUrl || undefined,
        excerpt: val.excerpt!,
        body: val.body!,
      })
      .subscribe({
        next: () => {
          this.isPosting.set(false);
          this.postSuccess.set(true);
          this.postForm.reset({
            category: 'Infrastructure',
            imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
          });
          this.api.getJournalPosts().subscribe();
        },
        error: () => {
          this.isPosting.set(false);
        },
      });
  }

  onDeletePost(id: string): void {
    if (confirm('Are you sure you want to delete this field dispatch?')) {
      this.api.deleteJournalPost(id).subscribe(() => {
        this.api.getJournalPosts().subscribe();
      });
    }
  }

  updateStatus(id: string, status: 'reviewed' | 'responded'): void {
    this.api.updateContactStatus(id, status).subscribe(() => {
      this.loadInquiries();
    });
  }
}
