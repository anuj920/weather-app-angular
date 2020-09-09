import { Component, OnInit } from '@angular/core';

import { LocationService } from './location.service';
import { HomeService } from './home.service';
declare function weatherGraph(label,temp);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lat:number;
  lon:number;
  city: any;
  search_value:any="";
  forcast_weekly:Array<any>;
  current_forcast:any;
  daily_forcast:Array<any>;
  hourly_forcast:Array<any>;
  WeatherSearchList: Array<any>;
  search_true: boolean;

  constructor(private locationService: LocationService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.getLocation();
  }


  getLocation(){
    this.locationService.getPosition().subscribe(pos=>{
     this.lon = pos.longitude;
     this.lat = pos.latitude;
     this.city = pos.city +" ,"+pos.region;
     this.search_value = this.city;
     this.getWeatherByLonLat();
    })
  }

  getWeatherByLonLat(){
    this.homeService.getWeatherByLonLat(this.lon,this.lat).subscribe(res=>{
      if(res){
        this.current_forcast = res.current;
        this.forcast_weekly = res.daily;

        this.forcast_weekly = this.forcast_weekly.slice(0,6);     // Reduce weekly forcast only to 6 Days

        this.hourly_forcast = res.hourly;
        this.daily_forcast = this.hourly_forcast.slice(0,24);
        let daily_data = [];
        let daily_label = [];
          for (let index = 0; index < this.daily_forcast.length; index=index+2) {
            const element = this.daily_forcast[index];
            daily_data.push(parseInt(element.temp));

            let t = (new Date(element.dt*1000).getHours());
            let label = ''
            if(t<11){
              label = String(t)+" AM";
            }
            else{
              label = String(t)+" PM";
            }
            daily_label.push(label);
          }

        weatherGraph(daily_label,daily_data)  
      }
    })
  }

  getWeatherIconUrl(value){
    if(value){
      return "https://openweathermap.org/img/wn/"+value.weather[0].icon+".png"
    }
  }


  focusFunction(){
    this.search_value = "";
  }

  focusOut(){
    this.search_value = this.city;
    this.search_true = false;
  }

  onInputChange(value){
    if(value && value.length>0){
      this.homeService.getCityListByQuery(value).subscribe(res=>{
        this.WeatherSearchList = res;
        this.search_true = true
        this.city = res.name;
      },
      err=>{
        this.WeatherSearchList=[]
        this.search_true=false
      })
    }
  }

  SearchOnclick(value){
    if(value){
      // console.log(this.lon,this.lat)
      this.lon = value.coord.lon;
      this.lat = value.coord.lat;
      // console.log(this.lon,this.lat)
      this.getWeatherByLonLat();
      this.search_true=false;
    }
  }

}
