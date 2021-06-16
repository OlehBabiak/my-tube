import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGenre} from "../../interfaces/genre";
import {GenreBudgesResolveService} from "../../services/genre-budges-resolve.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[]
  constructor(private movieService: GenreBudgesResolveService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({genres: {genres}})=> {
      this.genres = genres

    })
  }

  ngOnInit(): void {
  }

}
