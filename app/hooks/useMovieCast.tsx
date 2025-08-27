
import { useQuery } from '@tanstack/react-query'
import { getMovieCast } from '../services/api';


export const useMovieCast= (idMovie: string) => {
  const movieCasting= useQuery({
    queryKey: ['movieCasting', idMovie],
    queryFn: () => getMovieCast(idMovie),
    enabled: !!idMovie,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    movieCasting
  }
};

