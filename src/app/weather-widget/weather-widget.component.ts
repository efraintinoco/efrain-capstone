import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  weatherData: any

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(response => {
      this.weatherData = response
      console.log(this.weatherData)
    })
  }


}
