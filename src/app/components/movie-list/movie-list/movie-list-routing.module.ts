import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "../movie-list.component";
import {MovieResolveService} from "../../../services/movie-resolve.service";
import {MovieInfoComponent} from "../../movie-info/movie-info.component";
import {GenreBudgesResolveService} from "../../../services/genre-budges-resolve.service";



const routes: Routes = [
  {path: '', component: MovieListComponent, resolve: {movies: MovieResolveService, genres: GenreBudgesResolveService}},
  {path: ':id', component: MovieInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }
