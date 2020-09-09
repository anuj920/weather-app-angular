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
    return this.http.get(`http://ip-api.com/json`);
  }

}
