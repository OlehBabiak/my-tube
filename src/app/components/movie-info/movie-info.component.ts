import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IMovieDetail} from "../../interfaces/movie-detail";
import {MovieByIdService} from "../../services/movie-by-id.service";



@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movieById: IMovieDetail
  adult = ''
  genresArr = []
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieByIdService) {}

  ngOnInit(): void {

this.activatedRoute.params.subscribe(params=>{
  this.movieService.getMovieByID(params.id).subscribe(value => {
this.movieById = value
    //////////////////////////////////
    this.movieById.adult? this.adult = 'Yes': this.adult = 'NO';
/////////////////////////
    for (const genre of this.movieById.genres) {
      console.log('genre!!!: ', genre)
        let {name} = genre
      this.genresArr.push(name)
      console.log('arr!!!: ', this.genresArr)
    }

    ///////////////////////////////
    })
   })



  }

  backToMoveList() {
    this.router.navigate(['all-movies'])
  }
}
