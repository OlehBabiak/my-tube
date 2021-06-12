import { Component, OnInit, Input } from '@angular/core';
import {IMovie} from "../../interfaces/movie";

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {
@Input()
movie: IMovie
  constructor() { }

  ngOnInit(): void {
  }

}
