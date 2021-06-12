import { Component, OnInit } from '@angular/core';
import {MovieResolveService} from "../services/movie-resolve.service";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../interfaces/movie";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies: IMovie[]
  constructor(private movieService: MovieResolveService, private activatedRoute: ActivatedRoute) {
   this.activatedRoute.data.subscribe(({data})=> {
     this.movies = data
     console.log(data)
   })
  }

  ngOnInit(): void {
  }

}
