import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.authRoutes),
  },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
