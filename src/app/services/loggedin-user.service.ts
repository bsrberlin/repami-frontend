import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggedInUserService {
  private token: string | null = '';
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  async checkTokenValidity(): Promise<boolean> {
    this.token = localStorage.getItem('jwtToken');
    const apiUrl = `${environment.strapiUrl}/api/users/me`; 
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };

    if (this.token) {
      try {
        const response = await this.http.get(apiUrl, { headers }).toPromise();
        this.isLoggedIn = true;
        return true;
      } catch (error) {
        this.isLoggedIn = false;
        return false;
      }
    } else {
      return false;
    }
  }
}
