import { Component, OnInit } from '@angular/core';
import {MoviesByGenresService} from "../../../services/movies-by-genres.service";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../../interfaces/movie";
import {PageEvent} from "@angular/material/paginator";
import {IGenre} from "../../../interfaces/genre";

@Component({
  selector: 'app-movie-list-by-genre',
  templateUrl: './movie-list-by-genre.component.html',
  styleUrls: ['./movie-list-by-genre.component.css']
})
export class MovieListByGenreComponent implements OnInit {
movies: IMovie[] = []
  genres: IGenre[]
  result:any
  pageSlice = this.movies.slice(0, 4)
  constructor(private moviesByGenresService: MoviesByGenresService) {}


  ngOnInit(): void {
    this.moviesByGenresService.getMoviesByGenres('').subscribe(value => {
    // як дістати масив result?? і як параметром закинути жанр з кнопки
    })
  }

  onPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.movies.length){
      endIndex = this.movies.length
    }
    this.pageSlice = this.movies.slice(startIndex, endIndex)
  }
}

