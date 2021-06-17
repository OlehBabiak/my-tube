import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GnrMRoutingModule } from './gnr-m-routing.module';
import {GenresComponent} from "../genres.component";
import {GenreComponent} from "../genre/genre.component";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    GenresComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    GnrMRoutingModule,
    HttpClientModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class GnrMModule { }
