import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import {MovieListComponent} from "../movie-list.component";

import {MovieListCardComponent} from "../movie-list-card/movie-list-card.component";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "../../header/header.component";



@NgModule({
  declarations: [
    HeaderComponent,
    MovieListComponent,
    MovieListCardComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    HttpClientModule,
  ]
})
export class MovieListModule { }
