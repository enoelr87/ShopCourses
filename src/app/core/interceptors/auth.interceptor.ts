import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const token = authService.getAuthToken();
  const authReq = addToken(req, token);

  return next(authReq).pipe(
    catchError((err) =>
      authService.refreshTokenUser().pipe(
        switchMap((res) => {
          localStorage.setItem('token', res.accessToken);

          const newReq = addToken(req, res.accessToken);
          return next(newReq);
        }),
        catchError((refreshErr) => {
          const finalError = new Error(refreshErr);
          authService.logout();
          return throwError(() => finalError);
        })
      )
    )
  );
};

export const addToken = (
  req: HttpRequest<any>,
  token: string | null
): HttpRequest<any> =>
  req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
