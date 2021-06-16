import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GenreBudgesResolveService} from "../../../services/genre-budges-resolve.service";
import {GenresComponent} from "../genres.component";

import {MovieListByGenreComponent} from "../../movie-list-by-genre/movie-list-by-genre/movie-list-by-genre.component";

const routes: Routes = [
  {path: '', component: GenresComponent, resolve: {genres: GenreBudgesResolveService}, children: [
      {path: ':id', component: MovieListByGenreComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnrMRoutingModule { }
