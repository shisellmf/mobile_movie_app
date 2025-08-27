

import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { nowPlayingAction, popularAction, ratedAction, upcomingAction } from '../services/api'

const useMovie = () => {
   const nowPlayingQuery = useQuery({
       queryKey: ['movies','nowPlaying'],
       queryFn: nowPlayingAction,
       staleTime: 1000 * 60 * 60 * 24, // 1 day
   })

   const popularQuery = useQuery({
       queryKey: ['movies','popular'],
       queryFn: () => popularAction(),
       staleTime: 1000 * 60 * 60 * 24, // 1 day
   })

   const ratedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies','topRated'],
        queryFn: ({ pageParam = 1 }) => {
            return ratedAction({ page: pageParam, limit: 20 });
        },
        staleTime: 1000 * 60 * 60 * 24, // 1 day
        getNextPageParam: (_, pages) => pages.length + 1,
   })

   const upComingQuery = useQuery({
       queryKey: ['movies','upcoming'],
       queryFn: () => upcomingAction(),
       staleTime: 1000 * 60 * 60 * 24, // 1 day
   })

   return {
       nowPlayingQuery,
       popularQuery,
       ratedQuery,
       upComingQuery
   }
}

export default useMovie