import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../interfaces/movie";
import {urls} from "../constants";
import {IMovieDetail} from "../interfaces/movie-detail";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesByGenresService {
movies: IMovie[]


  constructor(private httpClient: HttpClient) { }

  getMoviesByGenres(genre: string): Observable<IMovie[]>{
    return   this.httpClient.get<IMovie[]>(urls.movies, {headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA4MGEwNjQyNjBmNTRiZjRmYzY5ODc1NjU1MDM3MCIsInN1YiI6IjYwYzNjMTkyYWM2MTdjMDA3OGY2N2VmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8cdIkacs1PvSjrGz56xx7FVjdnAMgvRp6fbqlQdD5Y'
      })
    })
  }



}
