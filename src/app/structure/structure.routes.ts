import { Routes } from '@angular/router';

export const structureRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component'),
      },
    ],
  },
];
