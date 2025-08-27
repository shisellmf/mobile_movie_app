import { Result } from '@/interfaces/movieResponse';
import {CompleteMovie, MovieCast, MovieMap} from '../../../interfaces/movie';
import { MovieDetailResponse } from '@/interfaces/movieDetailResponse';
import { Cast } from '@/interfaces/movieCastResponse';

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

    static fromMovieDetailApi = (movie:MovieDetailResponse):CompleteMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.popularity,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres.map(genre => ({ id: genre.id, name: genre.name })),
            duration: movie.runtime,
            budget: movie.budget,
            originalLanguage: movie.original_language,
        }
    }

    static fromMovieCastApi = (castMovie:Cast):MovieCast => {
        return {
            id: castMovie.id,
            name: castMovie.name,
            profilePath: `https://image.tmdb.org/t/p/w500${castMovie.profile_path}`,
            character: castMovie.character
        }
    }
}

