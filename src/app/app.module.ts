import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {AlertModule} from "ngx-bootstrap/alert";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListByGenreComponent } from './components/movie-list-by-genre/movie-list-by-genre/movie-list-by-genre.component';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UserInfoComponent } from './components/user-info/user-info.component';
import {MatSelectModule} from "@angular/material/select";





const routes: Routes = [
  {path: 'all-movies', loadChildren: ()=> import('./components/movie-list/movie-list/movie-list.module').then(m=> m.MovieListModule)},
  {path: 'all-genres', loadChildren: ()=> import('./components/genres/gnr-m/gnr-m.module').then(m=> m.GnrMModule)},
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListByGenreComponent,
    UserInfoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
