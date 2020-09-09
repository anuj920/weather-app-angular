import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  APIKEY = '90bdd6d0fb6e366c2f3e560ca6b4cfcf';
  UNIT = 'metric';

  constructor(private http: HttpClient ) { }

  getWeatherByLonLat(lon,lat):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.APIKEY}&exclude=minutely&units=${this.UNIT}`);
  }

  getCityListByQuery(value):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${this.APIKEY}&units=${this.UNIT}`)
  }


}
