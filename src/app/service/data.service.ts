import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000';
  private apiUsersUrl = 'http://localhost:3000/api/users'; // Anders doen --> geen var voor elke api route
  private apiLedenUrl = 'http://localhost:3000/api/leden'; 

  constructor(private http: HttpClient) {}

  // user api calls
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUsersUrl);
  }

  // leden api calls
  getLeden(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLedenUrl);
  }
  getLedenByParameter(parameterValue: any): Observable<any[]> {
    const apiUrl = `${this.baseUrl}/api/leden/${parameterValue}`; 
    return this.http.get<any[]>(apiUrl);
  }
}
