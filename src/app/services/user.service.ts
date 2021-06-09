import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import jwtDecode from 'jwt-decode';

export interface IAuth {
  login: string;
  password: string;
}

export interface IAuthResponse {
  Bearer: string;
}

export interface IDecodedToken {
  rle: string;
}

export interface IUser {
  id: number;
  login: string;
  role: string;
  checks: number;
  last: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(loginData: IAuth): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${environment.BaseURL}/login`, loginData);
  }

  register(registerData: IAuth): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(`${environment.BaseURL}/register`, registerData);
  }

  getIsAuthorized(): Observable<boolean> {
    return of(!!localStorage.getItem('token'));
  }

  getIsAdmin(): Observable<boolean> {
    return of(!!localStorage.getItem('token'));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getRole(): Observable<string> {
    const isToken = !!localStorage.getItem('token');
    if (isToken) {
      return of(jwtDecode<IDecodedToken>(localStorage.getItem('token')).rle);
    }
    return null;
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.BaseURL}/users`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
  }
}
