import { Routes } from '@angular/router';

export const structureRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
    ],
  },
];
