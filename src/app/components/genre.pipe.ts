import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genrePipe'
})
export class GenrePipe implements PipeTransform {

  transform(genres: any, ...genreMovieArr: any[]): any {
    return genres.filter(
      (genre: any) => {
        return genre.id.includes(genreMovieArr)
      }
    )
  }
}
