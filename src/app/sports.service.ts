import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type sportsData = any

@Injectable({
  providedIn: 'root'
})
export class SportsService {


  constructor(private httpclient: HttpClient) { }
  getSports(): Observable<sportsData> {
    return this.httpclient.get<sportsData>('https://www.thesportsdb.com/api/v1/json/50130162/eventshighlights.php')
  }
}


