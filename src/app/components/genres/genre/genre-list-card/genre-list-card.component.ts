import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../../interfaces/movie";
import {IGenre} from "../../../../interfaces/genre";

@Component({
  selector: 'app-genre-list-card',
  templateUrl: './genre-list-card.component.html',
  styleUrls: ['./genre-list-card.component.css']
})
export class GenreListCardComponent implements OnInit {
@Input()
movie: IMovie
  @Input()
  genres: IGenre
  constructor() { }

  ngOnInit(): void {
  }

}
