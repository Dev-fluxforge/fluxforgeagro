# FluxForge Agro-Enterprise Initiative

A 10-acre circular agribusiness initiative in Saki, Oyo State, Nigeria, paired with **FluxForge Farm OS**—custom precision software for feed-cost tracking and end-to-end batch traceability.

Founded by **Badmus Muhammad Adeniyi**, final-year Computer Science student at LAUTECH and founder of FluxForge Software Engineering Company (20+ shipped web platforms).

---

## 🌾 The Enterprise Blueprint

- **Total Land Area**: 10 acres in Saki, Oyo State
  - **5 Acres**: Cocoa & Plantain Plantation (intercropped hybrid CRIN TC-series cocoa under plantain nurse shade)
  - **3 Acres**: Fishery & On-Site Feed Mill (earthen & concrete catfish growout ponds + 500kg/hr extruder mill)
  - **2 Acres**: Poultry Production (biosecure broiler and layer facilities)
- **Direct Employment**: Phased ramp from **12 direct jobs** in Year 1 up to **33 direct formal jobs** by Year 3
- **STEMM Pillars Addressed**: **Science** (nutritional crude protein biochemistry & organic soil regeneration) and **Technology** (FluxForge Farm OS software engine)
- **Core Problem Solved**:
  - ~1.7 million Nigerian graduates enter the labor market annually with low formal absorption.
  - Feed represents **60–70% of aquaculture operational cost** in Nigeria, with roughly **one-third of commercial extruded feed imported**, subjecting producers to foreign exchange shocks.
  - FluxForge mills feed on-site using local Saki grains and plantain by-products, reducing unit feed cost by **35% to 42%**.
- **Land Tenure Status**: Formally requested from the Traditional Council & His Royal Highness The Okere of Saki. Topographical and agronomic soil tests are complete; statutory customary allocation is under active administrative review.

---

## 💻 Tech Stack & Architecture

- **Frontend**: Angular 21 (standalone components, signals, zoneless architecture), TypeScript, Tailwind CSS v4 design tokens.
- **Backend**: Node.js + Express 5 running unified SSR and REST APIs (`/api/*`).
- **Database & Persistence**:
  - Development / Demo: Built-in resilient JSON file-backed database (`.data/db.json`) pre-seeded with real Saki dispatches and production batches.
  - Production: PostgreSQL with Prisma ORM (`prisma/schema.prisma`).
- **Media Uploads**: Cloudinary integration for field dispatch photos and videos.
- **Security / Auth**: Discreet operator session authentication (`HS256` JWT) for the administrative backoffice.

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js >= 20.x
- npm >= 10.x

### 2. Installation
```bash
git clone https://github.com/fluxforge/agro-enterprise.git
cd agro-enterprise
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Key variables:
```env
PORT=3000
APP_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/fluxforge_agro
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@fluxforge.ng
ADMIN_PASSWORD=saki-agro-2026
CLOUDINARY_CLOUD_NAME=fluxforge-agro
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### 4. Running the Application
```bash
npm run dev
```
The application will launch on **http://localhost:3000**.
The dev server boots both Angular and Express SSR APIs simultaneously.

---

## 🛠️ Farm OS Module Capabilities

Navigate to `/farm-os` to inspect the live software:
1. **Operational Dashboard**: Feed cost per acre, active batch registry, and savings comparison vs imported pellets (₦1,045/kg vs ₦1,850/kg).
2. **Least-Cost Feed Calculator**: Reactive formula generator balancing crude protein (e.g. 42% CP Catfish Grower) using local yellow maize, soya meal, fishmeal, and plantain flour. You can save formulations directly into active batches.
3. **Traceability Lookup**: Enter batch codes like `FF-2026-CAT-001`, `FF-2026-PLT-001`, or `FF-2026-COC-001` to view the authenticated lifecycle audit trail and printable provenance QR card.

---

## 🔒 Operator Backoffice (`/admin`)

- Accessible via `/admin` (discreet URL, not linked from main header).
- **Default Credentials**:
  - Email: `admin@fluxforge.ng`
  - Passkey: `saki-agro-2026`
- **Capabilities**:
  - Publish, edit, and delete Farm Journal field dispatches.
  - Review submitted partner and investor inquiries from the `/invest` contact form.
  - Update inquiry lead statuses (`new` → `reviewed` → `responded`).

---

## 🚢 Production Deployment

### Option A: Railway (Recommended for Full-Stack Node + PostgreSQL)
1. Fork or push this repository to GitHub.
2. In Railway, click **New Project** → **Deploy from GitHub repo**.
3. Add a **PostgreSQL** plugin in Railway.
4. Set the environment variables (`DATABASE_URL`, `JWT_SECRET`, `ADMIN_PASSWORD`).
5. Railway detects `railway.json` and runs `npm run build` and `node dist/app/server/server.mjs`.

### Option B: Render
1. Create a **Web Service** pointing to this repository.
2. Build command: `npm install && npm run build`
3. Start command: `node dist/app/server/server.mjs`
4. Attach a Render PostgreSQL database and set `DATABASE_URL`.

---

## 📝 Founder Notes & Verification Checklist

1. **Land Tenure Accuracy**: As noted throughout the platform, the 10 acres are requested from the Traditional Ruler of Saki and are not yet formally granted.
2. **Seed Data Replacement**: Demo batches and sample inquiries are pre-loaded so reviewers have an immediate interactive experience. Before full public launch, the founder can archive test batches via `/admin`.
3. **Cloudinary Bucket**: Add active production credentials in your hosting dashboard so image uploads route to your verified CDN.
