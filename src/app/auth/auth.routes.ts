import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./auth.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./register/register.component'),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./forgot-password/forgot-password.component'),
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
