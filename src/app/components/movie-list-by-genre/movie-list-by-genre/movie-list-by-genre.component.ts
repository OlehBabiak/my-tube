import { Component, OnInit } from '@angular/core';
import {MoviesByGenresService} from "../../../services/movies-by-genres.service";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../../interfaces/movie";

@Component({
  selector: 'app-movie-list-by-genre',
  templateUrl: './movie-list-by-genre.component.html',
  styleUrls: ['./movie-list-by-genre.component.css']
})
export class MovieListByGenreComponent implements OnInit {
movies: any
  constructor(private moviesByGenresService: MoviesByGenresService) {}


  ngOnInit(): void {
    this.moviesByGenresService.getMoviesByGenres().subscribe(value => {
      let aaa = value
      console.log(aaa)
    })
  }

}
// this.userService.getUsers().subscribe(value => {
//   this.users = value
