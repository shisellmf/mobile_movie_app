
import { useQuery } from '@tanstack/react-query'
import { getMovieDetail } from '../services/api';


export const useMovie= (idMovie: string) => {
  const movieDetail= useQuery({
    queryKey: ['movieDetail', idMovie],
    queryFn: () => getMovieDetail(idMovie),
    enabled: !!idMovie,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    movieDetail
  }
};

