import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SportsService } from '../sports.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  sportData: any


  constructor(private sportsService: SportsService) { }

  ngOnInit(): void {
    this.sportsService.getSports().subscribe(response => {
      this.sportData = response
      console.log(this.sportData)
    })
  }


}

