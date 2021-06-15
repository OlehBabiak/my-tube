import { Component, OnInit } from '@angular/core';
import {MovieResolveService} from "../../services/movie-resolve.service";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces/movie";
import {IGenre} from "../../interfaces/genre";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

movies: IMovie[] = []
genres: IGenre[]
pageSlice = this.movies.slice(0, 2)
  constructor(private movieService: MovieResolveService, private activatedRoute: ActivatedRoute) {
   this.activatedRoute.data.subscribe(({movies:{results}, genres: {genres}})=> {
     this.movies = results
   })
      }


  ngOnInit(): void {
  }

OnPageCange(event: PageEvent){
  console.log(event)
const startIndex = event.pageIndex * event.pageSize;
let endIndex = startIndex + event.pageSize;
if (endIndex > this.movies.length){
  endIndex = this.movies.length
}
this.pageSlice = this.movies.slice(startIndex, endIndex)
  console.log(this.pageSlice)
}
}
