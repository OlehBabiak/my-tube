import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie} from "../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieResolveService implements Resolve<IMovie[]>{
private url = 'https://api.themoviedb.org/3/discover/movie?page=2'
  constructor(private httpClient: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie[]> | Promise<any> | any {
    return this.httpClient.get(this.url, {headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA4MGEwNjQyNjBmNTRiZjRmYzY5ODc1NjU1MDM3MCIsInN1YiI6IjYwYzNjMTkyYWM2MTdjMDA3OGY2N2VmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8cdIkacs1PvSjrGz56xx7FVjdnAMgvRp6fbqlQdD5Y'
      })
    })
  }
}

