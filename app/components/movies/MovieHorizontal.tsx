import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { MovieMap } from '@/interfaces/movie'
import MoviePoster from './MoviePoster'

interface Props {
  movies: MovieMap[]
}

const MovieHorizontal = ({movies}: Props) => {

  const ref= useRef<FlatList<MovieMap>>(null);

  return (
    <View>
      <Text className='text-3xl font-bold px-4 mb-2 mt-20'>Populars</Text>
      <FlatList
        ref={ref}
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster 
          id={item.id} 
          poster={item.poster} 
          isSmallPoster={true} />
        )}
      >
      </FlatList>
    </View>
  )
}

export default MovieHorizontal