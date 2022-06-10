import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type weatherData = any
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpclient: HttpClient) { }
  getWeather(): Observable<weatherData> {
    return this.httpclient.get<weatherData>('https://api.openweathermap.org/data/2.5/weather?zip=75249,US&appid=8938b67ff382926bc5730ce2017a16ba&units=imperial')
  }
}
