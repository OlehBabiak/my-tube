import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import {MovieListComponent} from "../movie-list.component";

import {MovieListCardComponent} from "../movie-list-card/movie-list-card.component";
import {HttpClientModule} from "@angular/common/http";
import {MovieInfoComponent} from "../../movie-info/movie-info.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";







@NgModule({
  declarations: [
    MovieListComponent,
    MovieListCardComponent,
    MovieInfoComponent,
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [

  ],
})
export class MovieListModule { }
