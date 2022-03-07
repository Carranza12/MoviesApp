import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detail:any
  constructor(private route:ActivatedRoute,private omdb:OmdbService) {
    this.route.params.subscribe(params=>{
      this.omdb.getQuery(`&i=${params[`id`]}&plot=full`)
      .subscribe(response=>{
        this.detail=response
        })
    })
   }
  

  ngOnInit(): void {
  }

}
