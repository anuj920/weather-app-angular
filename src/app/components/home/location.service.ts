import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }


  getPosition(): Observable<any>
  {
    return this.http.get(`https://api.ipfind.com/me?auth=d2ad358e-d861-49a4-9a5a-226bfa831b29`);
  }

}
