import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { Request, Response, NextFunction } from 'express';
import { join } from 'node:path';
import { db } from './server/db';
import { signToken, verifyToken, UserPayload } from './server/auth';

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Parse JSON bodies
app.use(express.json());

// CORS & Security headers for API
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

// Auth middleware for protected routes
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const payload = verifyToken(token);
  if (!payload) {
    res.status(401).json({ error: 'Unauthorized: Token expired or invalid' });
    return;
  }

  (req as AuthenticatedRequest).user = payload;
  next();
}

// -------------------------------------------------------------
// REST API ROUTES
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    project: 'FluxForge Agro-Enterprise Initiative',
    location: 'Saki, Oyo State, Nigeria',
    timestamp: new Date().toISOString(),
  });
});

// Authentication
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env['ADMIN_EMAIL'] || 'admin@fluxforge.ng';
  const adminPassword = process.env['ADMIN_PASSWORD'] || 'saki-agro-2026';

  if (email === adminEmail && password === adminPassword) {
    const token = signToken({
      email,
      role: 'admin',
      name: 'Badmus Muhammad Adeniyi',
    });
    res.json({
      token,
      user: {
        email,
        name: 'Badmus Muhammad Adeniyi',
        role: 'Founder & Technical Director',
      },
    });
    return;
  }

  res.status(401).json({ error: 'Invalid credentials. Please verify your email and password.' });
});

app.get('/api/auth/verify', requireAuth, (req, res) => {
  res.json({ valid: true, user: (req as AuthenticatedRequest).user });
});

// Farm Journal endpoints
app.get('/api/journal', (req, res) => {
  const category = req.query['category'] as string | undefined;
  const posts = db.getJournalPosts(category);
  res.json(posts);
});

app.get('/api/journal/:slug', (req, res) => {
  const post = db.getJournalPostBySlug(String(req.params['slug']));
  if (!post) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }
  res.json(post);
});

app.post('/api/journal', requireAuth, (req, res) => {
  const { title, category, excerpt, body, imageUrl, videoUrl, author } = req.body;
  if (!title || !body || !category) {
    res.status(400).json({ error: 'Title, category, and body are required' });
    return;
  }
  const newPost = db.createJournalPost({
    title,
    category,
    excerpt: excerpt || body.slice(0, 160) + '...',
    body,
    imageUrl: imageUrl || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    videoUrl,
    author: author || 'Badmus Muhammad Adeniyi',
  });
  res.status(201).json(newPost);
});

app.delete('/api/journal/:id', requireAuth, (req, res) => {
  const deleted = db.deleteJournalPost(String(req.params['id']));
  if (!deleted) {
    res.status(404).json({ error: 'Journal post not found' });
    return;
  }
  res.json({ message: 'Journal post deleted successfully' });
});

// Contact & Investor leads endpoints
app.post('/api/contact', (req, res) => {
  const { name, email, organization, interestType, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required' });
    return;
  }

  // Basic email pattern check
  if (!email.includes('@')) {
    res.status(400).json({ error: 'Please provide a valid email address' });
    return;
  }

  const submission = db.createContactSubmission({
    name,
    email,
    organization: organization || 'Individual / Independent',
    interestType: interestType || 'Investor / Grant Review',
    message,
  });

  res.status(201).json({
    success: true,
    message: 'Your inquiry has been received. The FluxForge team will respond within 48 hours.',
    submission,
  });
});

app.get('/api/contact', requireAuth, (req, res) => {
  const submissions = db.getContactSubmissions();
  res.json(submissions);
});

app.patch('/api/contact/:id', requireAuth, (req, res) => {
  const { status } = req.body;
  if (!['new', 'reviewed', 'responded'].includes(status)) {
    res.status(400).json({ error: 'Invalid status' });
    return;
  }
  const updated = db.updateContactStatus(String(req.params['id']), status);
  if (!updated) {
    res.status(404).json({ error: 'Inquiry not found' });
    return;
  }
  res.json({ success: true });
});

// Farm OS Demo Endpoints
app.get('/api/farm-os/summary', (req, res) => {
  res.json(db.getDashboardSummary());
});

app.get('/api/farm-os/batches', (req, res) => {
  res.json(db.getFeedBatches());
});

app.get('/api/farm-os/batches/:identifier', (req, res) => {
  const batch = db.getFeedBatch(String(req.params['identifier']));
  if (!batch) {
    res.status(404).json({ error: 'Batch not found. Please verify the batch ID or scan code.' });
    return;
  }
  res.json(batch);
});

app.post('/api/farm-os/batches', (req, res) => {
  const batchData = req.body;
  if (!batchData.batchLabel || !batchData.specieOrCrop) {
    res.status(400).json({ error: 'batchLabel and specieOrCrop are required' });
    return;
  }
  const created = db.createFeedBatch(batchData);
  res.status(201).json(created);
});

app.post('/api/farm-os/calculate', (req, res) => {
  const { ingredients, targetCategory, batchName } = req.body;
  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    res.status(400).json({ error: 'At least one ingredient is required' });
    return;
  }

  const result = db.calculateFeedFormulation(
    ingredients,
    targetCategory || 'Aquaculture Catfish',
    batchName || 'Saki Local Formulation'
  );
  res.json(result);
});

// Media upload endpoint (Cloudinary proxy or curated preset gallery)
app.post('/api/media/upload', requireAuth, async (req, res) => {
  const { imageUrl } = req.body;
  // If user provided a URL or base64, return it or Cloudinary hosted link
  if (imageUrl) {
    res.json({
      url: imageUrl,
      publicId: `fluxforge_${Date.now()}`,
      status: 'uploaded',
    });
    return;
  }

  // Fallback high quality agro media presets for Saki
  const agroPresets = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
  ];
  const randomPreset = agroPresets[Math.floor(Math.random() * agroPresets.length)];
  res.json({
    url: randomPreset,
    status: 'success',
  });
});

// Sitemap.xml for SEO crawlers & grant review discovery
app.get('/sitemap.xml', (req, res) => {
  const baseUrl = process.env['APP_URL'] || 'https://fluxforge.ng';
  const posts = db.getJournalPosts();

  const postUrls = posts
    .map(
      (p) => `  <url>
    <loc>${baseUrl}/impact#${p.slug}</loc>
    <lastmod>${p.publishedAt.split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/problem-solution</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/product</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/farm-os</loc>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${baseUrl}/impact</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>${baseUrl}/team</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/invest</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${postUrls}
</urlset>`;

  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  const baseUrl = process.env['APP_URL'] || 'https://fluxforge.ng';
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${baseUrl}/sitemap.xml\n`);
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`FluxForge Agro-Enterprise Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
