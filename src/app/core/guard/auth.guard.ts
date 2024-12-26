import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const router = inject(Router);

  if (!sessionService.getIsUserLoggedIn()) {
    router.navigate(['/auth']).then();
    return false;
  }
  return true;
};
