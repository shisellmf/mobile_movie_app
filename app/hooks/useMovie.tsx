

import { useQuery } from '@tanstack/react-query'
import { nowPlayingAction } from '../services/api'

const useMovie = () => {
   const nowPlayingQuery = useQuery({
       queryKey: ['movies','nowPlaying'],
       queryFn: nowPlayingAction,
       staleTime: 1000 * 60 * 60 * 24, // 1 day
   })

    const popularQuery = useQuery({
       queryKey: ['movies','popular'],
       queryFn: nowPlayingAction,
       staleTime: 1000 * 60 * 60 * 24, // 1 day
   })

   return {
       nowPlayingQuery,
       popularQuery
   }
}

export default useMovie