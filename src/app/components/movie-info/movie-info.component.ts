import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesByGenresService} from "../../services/movies-by-genres.service";
import {IMovieDetail} from "../../interfaces/movie-detail";
import {MovieByIdService} from "../../services/movie-by-id.service";


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movieById: IMovieDetail


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieByIdService) {
    // this.activatedRoute.params.subscribe((params =>{
    //   console.log(params)
    //   this.movie = this.router.getCurrentNavigation()?.extras.state as IMovie
    //   console.log('This movie: ', this.movie)
    // }))
  }

  ngOnInit(): void {
this.activatedRoute.params.subscribe(params=>{
  console.log('params: ', params)
  this.movieService.getMovieByID(params.id).subscribe(value => {
//????????????????????????
    console.log('val; ', value)
this.movieById = value
  })
})
  }

}
