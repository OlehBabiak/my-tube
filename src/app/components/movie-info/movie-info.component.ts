import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IMovieDetail} from "../../interfaces/movie-detail";
import {MovieByIdService} from "../../services/movie-by-id.service";


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movieById: IMovieDetail
  adult = ''

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieByIdService) {}

  ngOnInit(): void {


this.activatedRoute.params.subscribe(params=>{
  console.log('params: ', params)
  this.movieService.getMovieByID(params.id).subscribe(value => {
    console.log('val; ', value)
this.movieById = value
  })
})
    this.movieById.adult? this.adult = 'Yes': this.adult = 'NO';  //???????????????????

  }
}
