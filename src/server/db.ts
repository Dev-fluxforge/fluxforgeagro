import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import type {
  JournalPost,
  ContactSubmission,
  FeedBatch,
  FeedFormulaCalculation,
  FarmOSDashboardSummary,
} from '../app/core/models/types';

interface DatabaseState {
  journalPosts: JournalPost[];
  contactSubmissions: ContactSubmission[];
  feedBatches: FeedBatch[];
}

const DATA_DIR = join(process.cwd(), '.data');
const DATA_FILE = join(DATA_DIR, 'db.json');

const INITIAL_JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'jp-001',
    title: 'Topographical Survey & Soil Suitability Analysis of Proposed Saki Agro Site',
    slug: 'topographical-survey-soil-analysis-saki',
    category: 'Land & Survey',
    excerpt: 'Detailed agronomy findings from initial site testing: pH 6.35, high loam-clay balance optimal for hybrid cocoa and plantain shading.',
    body: `In preparation for our 10-acre integrated venture, our technical team conducted preliminary soil and topological assessments across the selected parcel in Saki, Oyo State.

Key Agronomic Metrics Recorded:
1. Soil Profile: Sandy clay loam with high organic matter retention.
2. Soil pH: 6.35 — optimal range (6.0 - 6.8) for hybrid Upper Amazon and CRIN TC-series cocoa varieties.
3. Topography & Drainage: Gentle 3% gradient offering natural gravity flow for water drainage toward the lower terrace designated for aquaculture earthen ponds.

Note on Land Tenure:
A formal allocation request has been respectfully submitted to the Traditional Council and His Royal Highness The Okere of Saki. While formal customary deeds remain in process, our technical mapping confirms the parcel's ecological readiness for cocoa, plantain, and gravity-assisted pond circulation.`,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    author: 'Badmus Muhammad Adeniyi',
    publishedAt: '2026-08-14T09:00:00.000Z',
    readTimeMinutes: 4,
  },
  {
    id: 'jp-002',
    title: 'Formal Stakeholder Presentation to the Traditional Council of Saki',
    slug: 'formal-presentation-traditional-council-saki',
    category: 'Community',
    excerpt: 'Engaging traditional leadership and youth leaders in Saki: presenting the 33 direct STEMM agro-jobs roadmap and community empowerment model.',
    body: `Engaging local community leadership is fundamental to sustainable agricultural development in Oyo North. The FluxForge team presented the Agro-Enterprise Initiative blueprint before elders and representatives of the Traditional Council of Saki.

We outlined our three core pillars:
- Direct Employment: A phased ramp from 12 initial trainees up to 33 direct skilled jobs by Year 3 (feed technicians, pond operators, agronomy specialists).
- STEMM Application: Bringing applied science and software engineering (FluxForge Farm OS) directly into farm management.
- Local Value Retention: Sourcing raw feed inputs—cassava, plantain peel, yellow maize, and soy—directly from surrounding smallholder outgrowers.

The Council expressed warm enthusiasm for youth-driven technology in Saki, and discussions regarding the land boundary demarcation continue following customary protocols.`,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    author: 'Badmus Muhammad Adeniyi',
    publishedAt: '2026-09-02T14:30:00.000Z',
    readTimeMinutes: 5,
  },
  {
    id: 'jp-003',
    title: 'Prototyping High-Protein Fish Feed Pellets with Local Agro By-Products',
    slug: 'prototyping-high-protein-fish-feed-local-byproducts',
    category: 'Feed Mill',
    excerpt: 'Lab trials achieved 41.8% crude protein using local soybean meal, fishmeal, and plantain flour binder, cutting projected feed cost by 38%.',
    body: `Commercial imported fish feed currently represents 60% to 70% of total operational expenditure for Nigerian aquaculture farmers, with over one-third of commercial extruded feed imported from Europe and South America.

At our pilot workshop in Saki, we formulated and pelletized our prototype 2mm and 4mm floating catfish grower feed:
- Crude Protein Achieved: 41.8%
- Feed Composition: Soya meal (34%), Local marine fishmeal (26%), Yellow maize (18%), Plantain peel meal & cassava binder (16%), Bone meal & premix (6%).
- Cost Comparison: Formulated production cost calculated at ₦1,040/kg, compared to ₦1,780–₦1,920/kg for imported commercial brands.

Water stability tests demonstrated an average float buoyancy duration of 18 minutes, thoroughly satisfying nursery and growout ingestion windows.`,
    imageUrl: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80',
    author: 'Badmus Muhammad Adeniyi',
    publishedAt: '2026-09-21T11:15:00.000Z',
    readTimeMinutes: 4,
  },
  {
    id: 'jp-004',
    title: 'FluxForge Farm OS v0.4 Architecture: Real-Time Feed Conversion & Traceability',
    slug: 'farm-os-v04-architecture-feed-traceability',
    category: 'Farm OS Tech',
    excerpt: 'Combining software engineering with precision agriculture: automated feed conversion calculations, lot batching, and transparent supply-chain provenance.',
    body: `Drawing on my experience leading FluxForge Software Engineering Company across 20+ shipped web platforms, we developed Farm OS specifically for the realities of Nigerian agricultural operations.

Key Technical Capabilities:
1. Dynamic Feed-Cost Optimization: Solves least-cost formulation algorithms based on fluctuating market prices of local grain in Saki central market.
2. QR Code Provenance: Every harvested batch of catfish, table eggs, or fermented cocoa beans generates an immutable cryptographic traceability record.
3. Offline-First Resilience: Progressive web caching ensures technicians can record feeding regimes and pond water metrics even under intermittent network connectivity in rural Oyo State.

The public demo module is now accessible live through this portal for investors, grant committees, and partner cooperatives to inspect.`,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    author: 'Badmus Muhammad Adeniyi',
    publishedAt: '2026-10-01T16:00:00.000Z',
    readTimeMinutes: 6,
  },
];

const INITIAL_CONTACT_SUBMISSIONS: ContactSubmission[] = [
  {
    id: 'cs-001',
    name: 'Dr. Kolade Adeleke',
    email: 'k.adeleke@agrifund-westafrica.org',
    organization: 'West African Agri-Innovation Fund',
    interestType: 'Investor / Grant Review',
    message: 'Reviewing your Phase 1 grant application for the Saki Integrated Enterprise. Impressed by the on-site feed mill integration and Farm OS traceability.',
    submittedAt: '2026-09-28T10:14:00.000Z',
    status: 'reviewed',
  },
  {
    id: 'cs-002',
    name: 'Mrs. Folake Ogunbiyi',
    email: 'folake@sakicoopfarms.ng',
    organization: 'Oyo North Smallholder Grain Producers',
    interestType: 'Feed Supply / Outgrower',
    message: 'We represent 45 cassava and maize farmers in Saki West LGA. We would like to discuss supply agreements for your on-site feed mill.',
    submittedAt: '2026-10-03T15:22:00.000Z',
    status: 'new',
  },
];

const INITIAL_FEED_BATCHES: FeedBatch[] = [
  {
    id: 'batch-001',
    batchLabel: 'FF-2026-CAT-001',
    enterprise: 'Fishery & Feed Mill',
    specieOrCrop: 'African Catfish (Clarias gariepinus)',
    origin: 'Oyo State Certified Hatchery (Fingerlings @ 5g)',
    stage: 'Growout / Brooding',
    startDate: '2026-08-10',
    targetHarvestDate: '2026-12-15',
    formulationUsed: 'Saki Catfish Grower 42% CP',
    currentFeedCostPerUnit: 1045, // NGN per kg
    feedConversionRatio: 1.15,
    notes: 'Pond 2 earthen enclosure. Mortality rate < 2.8%. Fed twice daily using gravity floating pellets.',
    traceabilityLogs: [
      {
        stage: 'Fingerling Hatching & Sorting',
        location: 'Saki Agro Hatchery Bay A',
        timestamp: '2026-08-10 08:30',
        operator: 'Aquaculture Tech 1',
        description: '5,000 fingerlings sorted with avg weight 5.2g. Prophylactic salt bath completed.',
        status: 'completed',
      },
      {
        stage: 'Feed Regimen Initiation',
        location: 'On-site Feed Mill Unit',
        timestamp: '2026-08-15 11:00',
        operator: 'Feed Mill Lead',
        description: 'Formulation #FF-AQ-01 (42% CP local pellet) commenced. Feed consumption monitored at 3.5% body weight.',
        status: 'completed',
      },
      {
        stage: 'Mid-Cycle Sampling & Weighing',
        location: 'Earthen Pond 2',
        timestamp: '2026-09-25 09:15',
        operator: 'Aquaculture Tech 1',
        description: 'Biomass sample: mean weight 385g. Feed conversion ratio steady at 1.15.',
        status: 'completed',
      },
      {
        stage: 'Market Depuration & Harvest',
        location: 'Freshwater Depuration Tank',
        timestamp: '2026-12-15 07:00 (Scheduled)',
        operator: 'Harvest Team',
        description: 'Target mean harvest weight 1.1kg. Direct distribution to Saki cold hubs & Ibadan off-takers.',
        status: 'scheduled',
      },
    ],
  },
  {
    id: 'batch-002',
    batchLabel: 'FF-2026-PLT-001',
    enterprise: 'Poultry',
    specieOrCrop: 'Broiler (Cobb 500)',
    origin: 'Commercial Breeder Hatchery Ibadan (Day-Old Chicks)',
    stage: 'Finishing & Conditioning',
    startDate: '2026-09-01',
    targetHarvestDate: '2026-10-20',
    formulationUsed: 'FluxBroiler Finisher 19% CP',
    currentFeedCostPerUnit: 890,
    feedConversionRatio: 1.62,
    notes: 'Brooding Pen 1. Deep litter sawdust bed. Strict biosecurity footbaths enforced.',
    traceabilityLogs: [
      {
        stage: 'Brooding & Vaccination',
        location: 'Poultry Pen 1',
        timestamp: '2026-09-01 10:00',
        operator: 'Poultry Attendant',
        description: '1,200 DOCs placed. Gumboro and Newcastle vaccinations administered on schedule.',
        status: 'completed',
      },
      {
        stage: 'Finisher Phase Feed Transition',
        location: 'On-site Feed Mill Unit',
        timestamp: '2026-09-22 14:00',
        operator: 'Feed Mill Lead',
        description: 'Shifted from starter mash to custom pellet finisher formulated with local maize and soya.',
        status: 'completed',
      },
      {
        stage: 'Weight Verification & Harvest',
        location: 'Packaging & Processing Shed',
        timestamp: '2026-10-20 06:30 (Scheduled)',
        operator: 'Processing Crew',
        description: 'Projected weight 2.3kg average. Dressed and chilled for Saki hospitality buyers.',
        status: 'scheduled',
      },
    ],
  },
  {
    id: 'batch-003',
    batchLabel: 'FF-2026-COC-001',
    enterprise: 'Cocoa & Plantain',
    specieOrCrop: 'Hybrid Cocoa (TC1-TC8) & False Horn Plantain',
    origin: 'Cocoa Research Institute of Nigeria (CRIN) Certified Rootstock',
    stage: 'Nursery / Hatchery',
    startDate: '2026-07-20',
    targetHarvestDate: '2027-05-30',
    formulationUsed: 'Organic Compost & Decomposed Poultry Manure',
    currentFeedCostPerUnit: 320,
    feedConversionRatio: 1.0,
    notes: 'Polybag nursery with 50% palm frond shade. 6,200 cocoa seedlings paired with 2,400 plantain suckers.',
    traceabilityLogs: [
      {
        stage: 'Certified Seed Procurement',
        location: 'CRIN Ibadan Sub-Station',
        timestamp: '2026-07-20 09:00',
        operator: 'Agronomy Lead',
        description: 'Received certified CRIN TC disease-tolerant cocoa seed pods and suckers.',
        status: 'completed',
      },
      {
        stage: 'Polybag Potting & Shade Erection',
        location: 'Central Shaded Nursery Saki',
        timestamp: '2026-08-02 12:00',
        operator: 'Nursery Crew',
        description: '6,200 potting bags filled with topsoil, decomposed poultry manure, and river sand.',
        status: 'completed',
      },
      {
        stage: 'Transplanting to 5-Acre Plantation',
        location: 'Plantation Plot Sector A-C',
        timestamp: '2027-05-15 08:00 (Scheduled)',
        operator: 'Field Team',
        description: 'Permanent transplanting at onset of early rains with temporary plantain canopy.',
        status: 'scheduled',
      },
    ],
  },
];

class DatabaseService {
  private state: DatabaseState;

  constructor() {
    this.state = this.loadState();
  }

  private loadState(): DatabaseState {
    try {
      if (existsSync(DATA_FILE)) {
        const raw = readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('Could not read existing data file, initializing default seed:', err);
    }

    const defaultState: DatabaseState = {
      journalPosts: INITIAL_JOURNAL_POSTS,
      contactSubmissions: INITIAL_CONTACT_SUBMISSIONS,
      feedBatches: INITIAL_FEED_BATCHES,
    };

    this.saveState(defaultState);
    return defaultState;
  }

  private saveState(state: DatabaseState): void {
    try {
      if (!existsSync(DATA_DIR)) {
        mkdirSync(DATA_DIR, { recursive: true });
      }
      writeFileSync(DATA_FILE, JSON.stringify(state, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  }

  // --- Journal Posts ---
  public getJournalPosts(category?: string): JournalPost[] {
    if (category && category !== 'All') {
      return this.state.journalPosts.filter(p => p.category === category);
    }
    return [...this.state.journalPosts].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  public getJournalPostBySlug(slug: string): JournalPost | undefined {
    return this.state.journalPosts.find(p => p.slug === slug || p.id === slug);
  }

  public createJournalPost(
    post: Omit<JournalPost, 'id' | 'publishedAt' | 'slug' | 'readTimeMinutes'>
  ): JournalPost {
    const newPost: JournalPost = {
      ...post,
      id: `jp-${Date.now()}`,
      slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      publishedAt: new Date().toISOString(),
      readTimeMinutes: Math.max(2, Math.ceil(post.body.split(/\s+/).length / 200)),
    };
    this.state.journalPosts.unshift(newPost);
    this.saveState(this.state);
    return newPost;
  }

  public deleteJournalPost(id: string): boolean {
    const initialLen = this.state.journalPosts.length;
    this.state.journalPosts = this.state.journalPosts.filter(p => p.id !== id);
    if (this.state.journalPosts.length !== initialLen) {
      this.saveState(this.state);
      return true;
    }
    return false;
  }

  // --- Contact Submissions ---
  public getContactSubmissions(): ContactSubmission[] {
    return [...this.state.contactSubmissions].sort(
      (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  }

  public createContactSubmission(
    submission: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>
  ): ContactSubmission {
    const newSub: ContactSubmission = {
      ...submission,
      id: `cs-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    this.state.contactSubmissions.unshift(newSub);
    this.saveState(this.state);
    return newSub;
  }

  public updateContactStatus(id: string, status: 'new' | 'reviewed' | 'responded'): boolean {
    const sub = this.state.contactSubmissions.find(s => s.id === id);
    if (sub) {
      sub.status = status;
      this.saveState(this.state);
      return true;
    }
    return false;
  }

  // --- Feed Batches & Traceability ---
  public getFeedBatches(): FeedBatch[] {
    return [...this.state.feedBatches];
  }

  public getFeedBatch(identifier: string): FeedBatch | undefined {
    const cleanId = identifier.trim().toUpperCase();
    return this.state.feedBatches.find(
      b => b.id.toUpperCase() === cleanId || b.batchLabel.toUpperCase() === cleanId
    );
  }

  public createFeedBatch(batch: Omit<FeedBatch, 'id'>): FeedBatch {
    const newBatch: FeedBatch = {
      ...batch,
      id: `batch-${Date.now()}`,
    };
    this.state.feedBatches.unshift(newBatch);
    this.saveState(this.state);
    return newBatch;
  }

  // --- Calculation Logic for Feed Cost ---
  public calculateFeedFormulation(
    ingredients: { name: string; costPerKg: number; quantityKg: number; crudeProteinPercent: number }[],
    targetCategory: FeedFormulaCalculation['targetCategory'],
    batchName = 'Custom Saki Mix'
  ): FeedFormulaCalculation {
    const totalWeightKg = ingredients.reduce((sum, ing) => sum + (Number(ing.quantityKg) || 0), 0);
    const totalCostNgn = ingredients.reduce((sum, ing) => sum + (Number(ing.quantityKg) || 0) * (Number(ing.costPerKg) || 0), 0);
    const costPerKgNgn = totalWeightKg > 0 ? Math.round(totalCostNgn / totalWeightKg) : 0;

    const weightedProtein = ingredients.reduce(
      (sum, ing) => sum + ((Number(ing.quantityKg) || 0) * (Number(ing.crudeProteinPercent) || 0)),
      0
    );
    const crudeProteinAverage = totalWeightKg > 0 ? Number((weightedProtein / totalWeightKg).toFixed(1)) : 0;

    // Commercial imported pellet benchmark in Nigerian market:
    // Catfish imported pellet (e.g. Coppens, Aller Aqua): ~₦1,850 - ₦2,100 / kg
    // Poultry commercial finisher: ~₦1,350 - ₦1,500 / kg
    const commercialBenchmark = targetCategory.includes('Aquaculture') ? 1850 : 1380;
    const savingsPerKgNgn = Math.max(0, commercialBenchmark - costPerKgNgn);
    const savingsPercentage = commercialBenchmark > 0
      ? Number(((savingsPerKgNgn / commercialBenchmark) * 100).toFixed(1))
      : 0;

    return {
      batchName,
      targetCategory,
      ingredients,
      totalWeightKg,
      totalCostNgn,
      costPerKgNgn,
      crudeProteinAverage,
      commercialPelletBenchmarkNgnPerKg: commercialBenchmark,
      savingsPerKgNgn,
      savingsPercentage,
    };
  }

  // --- Summary for Dashboard ---
  public getDashboardSummary(): FarmOSDashboardSummary {
    const batches = this.state.feedBatches;
    const avgCost = batches.length > 0
      ? Math.round(batches.reduce((sum, b) => sum + b.currentFeedCostPerUnit, 0) / batches.length)
      : 1040;
    const benchmark = 1850;
    const savingsPct = Number((((benchmark - avgCost) / benchmark) * 100).toFixed(1));

    return {
      activeBatches: batches.length,
      averageFeedCostPerKg: avgCost,
      commercialBenchmarkFeedCostPerKg: benchmark,
      overallSavingsPercentage: savingsPct,
      projectedBiomassKg: 8400, // projected across active cycles
      directJobsPipeline: {
        year1Target: 12,
        year3Target: 33,
        currentVolunteersAndEngineers: 5,
      },
    };
  }
}

export const db = new DatabaseService();
