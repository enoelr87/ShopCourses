import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.authRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./structure/structure.routes').then((r) => r.structureRoutes),
    canActivate: [adminGuard],
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
