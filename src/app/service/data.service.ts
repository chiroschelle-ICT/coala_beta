import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:3000/api';
  private apiUsersUrl = 'http://localhost:3000/api/users'; // Anders doen --> geen var voor elke api route
  private apiLedenUrl = 'http://localhost:3000/api/leden';
  private apiLedenAfdelingUrl = 'http://localhost:3000/api/leden/afdelingId';


  constructor(private http: HttpClient) {}

  // user api calls
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUsersUrl);
  }

  // leden api calls
  getLeden(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLedenUrl);
  }
  getAfdelingId(afdelingId: any): Observable<any[]>{
    console.log("AfdelingId Service: "+afdelingId)
    return this.http.get<any[]>(`${this.baseUrl}/leden/${afdelingId}`);
  }


  
}
