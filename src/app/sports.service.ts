import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

type sportsData = any
type soccerData = any
type baseballData = any

@Injectable({
  providedIn: 'root'
})
export class SportsService {


  constructor(private httpclient: HttpClient) { }
  getSports(): Observable<sportsData> {
    return this.httpclient.get<sportsData>('https://www.thesportsdb.com/api/v1/json/50130162/eventshighlights.php')
    .pipe(map((response: sportsData) => response));
  }
  getSoccerScores(): Observable<soccerData> {
    return this.httpclient.get<soccerData>('https://www.thesportsdb.com/api/v2/json/50130162/livescore.php?s=Soccer')
    .pipe(map((response: soccerData) => response));
  }
  getBaseballScores(): Observable<baseballData> {
    return this.httpclient.get<baseballData>('https://www.thesportsdb.com/api/v2/json/50130162/livescore.php?l=4424')
    .pipe(map((response: baseballData) => response));
  }


}
