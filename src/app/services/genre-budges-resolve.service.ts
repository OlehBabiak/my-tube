import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IGenre} from "../interfaces/genre";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreBudgesResolveService implements Resolve<IGenre[]>{

  constructor(private httpClient: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenre[]> | Promise<any> | any {
    return this.httpClient.get(urls.genres, {headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDA4MGEwNjQyNjBmNTRiZjRmYzY5ODc1NjU1MDM3MCIsInN1YiI6IjYwYzNjMTkyYWM2MTdjMDA3OGY2N2VmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X8cdIkacs1PvSjrGz56xx7FVjdnAMgvRp6fbqlQdD5Y'
      })
    })
  }
}
