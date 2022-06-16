import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  sportsData: any

  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.sportsService.getSports().subscribe(response => {
      this.sportsData = response.tvhighlights
    })
  }
}

