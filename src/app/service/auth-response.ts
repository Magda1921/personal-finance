import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  token?: string;
  user?: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/api/v1/auth/authenticate`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          if (res?.token) localStorage.setItem('token', res.token);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
