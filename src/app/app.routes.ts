import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'FluxForge Agro-Enterprise | 10-Acre Integrated Farm in Saki, Nigeria',
  },
  {
    path: 'problem-solution',
    loadComponent: () =>
      import('./pages/problem-solution/problem-solution').then(
        (m) => m.ProblemSolution
      ),
    title: 'The Problem & Circular Model | FluxForge Agro-Enterprise',
  },
  {
    path: 'product',
    loadComponent: () => import('./pages/product/product').then((m) => m.Product),
    title: 'FluxForge Farm OS | Precision Agriculture & Feed Formulation',
  },
  {
    path: 'impact',
    loadComponent: () => import('./pages/impact/impact').then((m) => m.Impact),
    title: 'Economic Impact & Farm Journal | FluxForge Saki',
  },
  {
    path: 'team',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
    title: 'Founder & Technical Leadership | FluxForge Agro-Enterprise',
  },
  {
    path: 'invest',
    loadComponent: () => import('./pages/invest/invest').then((m) => m.Invest),
    title: 'Partner & Invest | Milestone Roadmap | FluxForge Saki',
  },
  {
    path: 'farm-os',
    loadComponent: () => import('./pages/farm-os/farm-os').then((m) => m.FarmOs),
    title: 'FluxForge Farm OS Live Application | Feed Calculator & Traceability',
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then((m) => m.Admin),
    title: 'Operator Administration | FluxForge Agro-Enterprise',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

