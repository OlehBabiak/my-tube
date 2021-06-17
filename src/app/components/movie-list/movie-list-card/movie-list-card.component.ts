import { Component, OnInit, Input } from '@angular/core';
import {IMovie} from "../../../interfaces/movie";
import {ActivatedRoute, Router} from "@angular/router";
import {IGenre} from "../../../interfaces/genre";
import {MovieResolveService} from "../../../services/movie-resolve.service";



@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.scss']
})
export class MovieListCardComponent implements OnInit {
@Input()
movie: IMovie
  @Input()
genres: IGenre[]
adult = ''
genresOfEachMovie: any[] = []
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieResolveService) {

  }

  ngOnInit(): void {
this.movie.adult? this.adult = 'Yes': this.adult = 'NO';
//=============================
let genresOfEachMovie: any = this.genres.filter(gnr => {
  return this.movie.genre_ids.indexOf(gnr.id) != -1

})
    console.log('genresOfEachMovie1', genresOfEachMovie)
    for (const genresOfEachMovieElement of genresOfEachMovie) {
      let {name} = genresOfEachMovieElement
      this.genresOfEachMovie.push(name)
    }
  }

}
