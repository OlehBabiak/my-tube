import {environment} from "../../environments/environment";

const {API_MOVIE, API_GENRE} = environment

export const urls = {
  movies: `${API_MOVIE}`,
  genres: `${API_GENRE}`
}
