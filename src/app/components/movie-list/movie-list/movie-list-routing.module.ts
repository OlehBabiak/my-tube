import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "../movie-list.component";
import {MovieResolveService} from "../../services/movie-resolve.service";

const routes: Routes = [
  {path: '', component: MovieListComponent, resolve: {data: MovieResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }
