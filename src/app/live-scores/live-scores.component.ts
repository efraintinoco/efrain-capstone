import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-live-scores',
  templateUrl: './live-scores.component.html',
  styleUrls: ['./live-scores.component.css']
})
export class LiveScoresComponent implements OnInit {

  soccerData: any
  baseballData: any

  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.sportsService.getSoccerScores().subscribe(response => {
      this.soccerData = response.events
      console.log(this.soccerData)
    })
    this.sportsService.getBaseballScores().subscribe(response => {
      this.baseballData = response.events
      console.log(this.baseballData)
    })
  }
}

