import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth.component'),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
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
