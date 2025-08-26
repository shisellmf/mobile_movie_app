import { MovieResponse, Result } from '@/interfaces/movieResponse';
import {MovieMap} from '../../../interfaces/movie';

export class MovieMapper{
    static fromMovieApi = (movie:Result):MovieMap => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.popularity
        }
    }
}