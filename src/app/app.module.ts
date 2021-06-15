import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {AlertModule} from "ngx-bootstrap/alert";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MovieListModule} from "./components/movie-list/movie-list/movie-list.module";
import {GnrMModule} from "./components/genres/gnr-m/gnr-m.module";


const routes: Routes = [
  {path: 'all-movies', loadChildren: ()=> import('./components/movie-list/movie-list/movie-list.module').then(m=> m.MovieListModule)},
  {path: 'all-genres', loadChildren: ()=> import('./components/genres/gnr-m/gnr-m.module').then(m=> m.GnrMModule)},
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MovieListModule,
    GnrMModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
