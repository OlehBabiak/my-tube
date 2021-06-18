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
import { GenreListCardComponent } from './components/genres/genre/genre-list-card/genre-list-card.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { HomeComponent } from './components/home/home.component';





const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all-movies', loadChildren: ()=> import('./components/movie-list/movie-list/movie-list.module').then(m=> m.MovieListModule)},
  {path: 'all-genres', loadChildren: ()=> import('./components/genres/gnr-m/gnr-m.module').then(m=> m.GnrMModule)},
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListByGenreComponent,
    UserInfoComponent,
    GenreListCardComponent,
    HomeComponent,

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
    MatSelectModule,
    MatPaginatorModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
