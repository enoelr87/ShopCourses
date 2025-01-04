import { Injectable } from '@angular/core';
import { UserAuthenticatedDto, UserDto } from '../models/user.model';
import { deleteCookie, getCookie, setCookie } from '../utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { accessToken, refreshToken } from '../constants/general.constant';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private userLogged$: BehaviorSubject<UserDto> = new BehaviorSubject<any>(
    null
  );
  private userAccessToken$: BehaviorSubject<string> = new BehaviorSubject<any>(
    null
  );
  private userRefreshToken$: BehaviorSubject<string> = new BehaviorSubject<any>(
    null
  );

  get getUserLogged$(): Observable<UserDto> {
    return this.userLogged$.asObservable();
  }

  get userLogged(): UserDto {
    return this.userLogged$.getValue();
  }

  setUserLogged$(userLogged: UserDto): void {
    this.userLogged$.next(userLogged);
  }

  setUserLoggedIn(user: UserAuthenticatedDto): void {
    this.setUserLogged$(user.user);
    this.setAccessToken(user.accessToken);
    this.setRefreshToken(user.refreshToken);
  }

  getAccessToken(): string {
    return this.userAccessToken$.getValue() || getCookie(accessToken);
  }

  getAccessToken$(): Observable<string> {
    return this.userAccessToken$.asObservable();
  }

  setAccessToken(token: string): void {
    if (token) {
      this.userAccessToken$.next(token);
      setCookie(accessToken, token);
    }
  }

  getRefreshToken(): string {
    return this.userRefreshToken$.getValue() || getCookie(refreshToken);
  }

  getRefreshToken$(): Observable<string> {
    return this.userRefreshToken$.asObservable();
  }

  setRefreshToken(refresh: string): void {
    if (refresh) {
      this.userRefreshToken$.next(refresh);
      setCookie(refreshToken, refresh);
    }
  }

  clearUserSession(): void {
    this.setAccessToken('');
    this.setRefreshToken('');
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    document.location.reload();
  }
}
