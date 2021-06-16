import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/movie";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movie: IMovie


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params =>{
      console.log(params)
      this.movie = this.router.getCurrentNavigation()?.extras.state as IMovie
      console.log('This movie: ', this.movie)
    }))
  }

  ngOnInit(): void {

  }

}
