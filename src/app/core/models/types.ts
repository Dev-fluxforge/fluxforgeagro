export interface JournalPost {
  id: string;
  title: string;
  slug: string;
  category: 'Land & Survey' | 'Infrastructure' | 'Feed Mill' | 'Farm OS Tech' | 'Community';
  excerpt: string;
  body: string;
  imageUrl?: string;
  videoUrl?: string;
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  organization?: string;
  interestType: 'Investor / Grant Review' | 'Strategic Partner' | 'Feed Supply / Outgrower' | 'Community / Media';
  message: string;
  submittedAt: string;
  status: 'new' | 'reviewed' | 'responded';
}

export interface IngredientInput {
  name: string;
  costPerKg: number; // in NGN ₦
  quantityKg: number;
  crudeProteinPercent: number; // e.g. 45% for fishmeal, 10% for maize
}

export interface FeedFormulaCalculation {
  batchName: string;
  targetCategory: 'Aquaculture Catfish' | 'Aquaculture Tilapia' | 'Poultry Broiler' | 'Poultry Layer';
  ingredients: IngredientInput[];
  totalWeightKg: number;
  totalCostNgn: number;
  costPerKgNgn: number;
  crudeProteinAverage: number;
  commercialPelletBenchmarkNgnPerKg: number;
  savingsPerKgNgn: number;
  savingsPercentage: number;
}

export interface TraceabilityStep {
  stage: string;
  location: string;
  timestamp: string;
  operator: string;
  description: string;
  status: 'completed' | 'in_progress' | 'scheduled';
}

export interface FeedBatch {
  id: string;
  batchLabel: string;
  enterprise: 'Cocoa & Plantain' | 'Fishery & Feed Mill' | 'Poultry';
  specieOrCrop: string;
  origin: string;
  stage: 'Nursery / Hatchery' | 'Growout / Brooding' | 'Finishing & Conditioning' | 'Harvest Ready';
  startDate: string;
  targetHarvestDate: string;
  formulationUsed: string;
  currentFeedCostPerUnit: number;
  feedConversionRatio: number;
  notes: string;
  traceabilityLogs: TraceabilityStep[];
  qrCodeSnippet?: string;
}

export interface FarmOSDashboardSummary {
  activeBatches: number;
  averageFeedCostPerKg: number;
  commercialBenchmarkFeedCostPerKg: number;
  overallSavingsPercentage: number;
  projectedBiomassKg: number;
  directJobsPipeline: {
    year1Target: number;
    year3Target: number;
    currentVolunteersAndEngineers: number;
  };
}

export interface AuthResponse {
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
  };
}
