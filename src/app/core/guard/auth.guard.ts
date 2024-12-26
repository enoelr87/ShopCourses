import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  console.info('authGuard', route, state);
  if (!localStorage.getItem('accessToken')) {
    router.navigate(['/forbidden']).then();
    return false;
  }
  return true;
};
