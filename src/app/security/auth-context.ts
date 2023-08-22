import {Injectable, Input} from '@angular/core';
import {apiClient} from '../api/api-client';
import {executeJwtAuthenticationService} from '../api/authentication-service';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean= false;
  userName: string | null = null;
  token: any;

  jwtHelper = new JwtHelperService();

  async login(username: string, password: string): Promise<boolean> {

    try {
      const response = await executeJwtAuthenticationService(username, password);
      if (response.status === 200) {
        const JwtToken = 'Bearer ' + response.data.token;
        this.isAuthenticated = true;
        this.userName = username;
        this.token = response.data.token;

        apiClient.interceptors.request.use(config => {
          config.headers.Authorization = JwtToken;
          return config;
        });

        return true;
      } else {
        this.logout();
        return false;
      }
    } catch (error) {
      this.logout();
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userName = null;
  }

  isTokenExpired(): boolean {
    return <boolean>!this.jwtHelper.isTokenExpired(this.token);
  }

  authenticator(){
    return this.isAuthenticated;
  }
}

