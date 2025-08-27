import { MovieResponse } from "@/interfaces/movieResponse";
import { apiClient } from "../actions/app-api";
import { MovieMapper } from "../infraestructure/mappers/movie.mapper";


export const TMDB_CONFIG={
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const nowPlayingAction= async () => {
  return getMovies('/now_playing');
};

export const ratedAction= async () => {
  return getMovies('/top_rated');
};

export const popularAction= async () => {
  return getMovies('/popular');
};


export const upcomingAction= async () => {
  return getMovies('/upcoming');
};


export const getMovies = async (query:string) => {
     try {
       const {data} = await apiClient.get<MovieResponse>(query);

       const movies = data.results.map(MovieMapper.fromMovieApi);

       return movies;
   } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch now playing movies');
   }
}

export const fetchMovies= async ({query}:{query:string})=> {
    const endpoint= query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response= await fetch(endpoint, {
        method:'GET',
        headers: TMDB_CONFIG.headers, 
    });

    if(!response.ok){
        throw new Error('Failed to fetch movies');
    }

    const data= await response.json();
    return data.results;
}

export const fetchMoviesDetails= async(movieId:string):Promise<MovieDetails>=>{
    try {
        const response= await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
            {
                method: 'GET',
                headers:TMDB_CONFIG.headers
            }
        ); 

        // console.log(response.status)
        // console.log(await response.text())

        if(!response.ok){
            throw new Error('Failed to fetch movies');
        }

        const data= await response.json();

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}