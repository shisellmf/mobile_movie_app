import { View, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { MovieMap } from '@/interfaces/movie'
import MoviePoster from './MoviePoster'

interface Props {
  title?: string
  movies: MovieMap[]
  loadNextPage?: () => void
}

const MovieHorizontal = ({title,movies,loadNextPage}: Props) => {

  const ref= useRef<FlatList<MovieMap>>(null);
  const isLoading = useRef(false);

  useEffect(() => { 
    setTimeout(() => {
      isLoading.current=false;
    }, 200);
  }, [movies]);


  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>)=>{
    if(isLoading.current) return;

    const {
      contentOffset,
      layoutMeasurement,
      contentSize
    } = event.nativeEvent;

    const isEndReached = contentOffset.x + layoutMeasurement.width >= contentSize.width - 20;

    if(!isEndReached) return

    isLoading.current=true;

    loadNextPage && loadNextPage()
  }

  return (
    <View>
      {title && <Text className='text-3xl font-bold px-4 mb-2 mt-6'>{title}</Text>}
      <FlatList
        ref={ref}
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster 
          id={item.id} 
          poster={item.poster} 
          isSmallPoster={true}
          />
        )}
        onScroll={onScroll}
      >
      </FlatList>
    </View>
  )
}

export default MovieHorizontal