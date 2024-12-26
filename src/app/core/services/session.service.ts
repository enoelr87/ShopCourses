import { Injectable } from '@angular/core';
import { UserAuthenticatedDto, UserDto } from '../models/user.model';
import { setCookie } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private isLoggedIn = false;
  private loggedUser: UserDto | null = null;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  setUserLoggedIn(user: UserAuthenticatedDto): void {
    this.isLoggedIn = true;
    this.loggedUser = user.user;
    this.setAccessToken(user.accessToken);
    this.setRefreshToken(user.refreshToken);
  }

  getIsUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getUserLoggedIn(): UserDto | null {
    return this.loggedUser;
  }

  setAccessToken(token: string): void {
    if (token) {
      this.accessToken = token;
      setCookie('accessToken', token);
    }
  }

  setRefreshToken(refresh: string): void {
    if (refresh) {
      this.refreshToken = refresh;
      setCookie('refreshToken', refresh);
    }
  }
}
