import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovieDetail} from "../interfaces/movie-detail";

@Injectable({
  providedIn: 'root'
})
export class MovieByIdService {
  private MovieURL= 'https://api.themoviedb.org/3/movie'
  constructor(private httpClient: HttpClient) { }

  getMovieByID(id: string): Observable<IMovieDetail>{
    return   this.httpClient.get<IMovieDetail>(this.MovieURL + '/' + id, {headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA4MGEwNjQyNjBmNTRiZjRmYzY5ODc1NjU1MDM3MCIsInN1YiI6IjYwYzNjMTkyYWM2MTdjMDA3OGY2N2VmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8cdIkacs1PvSjrGz56xx7FVjdnAMgvRp6fbqlQdD5Y'
      })
    })
  }

}
