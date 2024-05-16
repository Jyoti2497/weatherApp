import { Component } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {
  city!:string;
  weatherData:any;
  constructor(private weatherService:WeatherServiceService){}
  ngOnInit(){}

  getWeather(){
    this.weatherService.getWeather(this.city)
    .subscribe(data=>{
      this.weatherData=data;
      console.log(data);
    })
  }
}
