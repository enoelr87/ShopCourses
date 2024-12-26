import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.authRoutes),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    canActivate: [authGuard],
  },
  {
    path: 'forbidden',
    loadComponent: () => import('./forbidden/forbidden.component'),
  },
  {
    path: 'under-construction',
    loadComponent: () =>
      import('./under-construction/under-construction.component'),
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component'),
  },
];
