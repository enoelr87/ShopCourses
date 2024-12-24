import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component'),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./auth/forgot-password/forgot-password.component'),
      },
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];
