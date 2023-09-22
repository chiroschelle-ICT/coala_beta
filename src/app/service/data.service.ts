import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
}
