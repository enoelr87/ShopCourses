import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';
import { buildApiURL } from '../utils/url.util';
import {
  LoginUserDto,
  RegisterUserDto,
  UserAuthenticatedDto,
} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);

  private apiPath = buildApiURL('/api/v1') + '/auth';
  private authToken: string | null = null;
  private refreshToken: string | null = null;

  getAuthToken(): string | null {
    return this.authToken;
  }

  mapResponse(response: Observable<any>): Observable<any> {
    return response.pipe(map((data: any) => data));
  }

  loginUser(loginUser: LoginUserDto): Observable<UserAuthenticatedDto> {
    const response = this.httpClient.post<UserAuthenticatedDto>(
      `${this.apiPath}/login`,
      loginUser
    );
    return this.mapResponse(response);
  }

  registerUser(registerUser: RegisterUserDto): Observable<any> {
    const response = this.httpClient.post<any>(
      `${this.apiPath}/register`,
      registerUser
    );
    return this.mapResponse(response);
  }

  refreshTokenUser(): Observable<any> {
    return this.httpClient
      .post<UserAuthenticatedDto>(`${this.apiPath}/refresh-token`, {
        refreshToken: this.refreshToken,
      })
      .pipe(
        tap((tokens: any) => {
          this.authToken = tokens.accessToken;
          this.refreshToken = tokens.refreshToken;
        })
      );
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    this.authToken = accessToken;
    this.refreshToken = refreshToken;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  // Método para cargar tokens desde el almacenamiento
  loadTokens(): void {
    this.authToken = localStorage.getItem('accessToken');
    this.refreshToken = localStorage.getItem('refreshToken');
  }

  logout(): void {
    this.authToken = null;
    this.refreshToken = null;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
