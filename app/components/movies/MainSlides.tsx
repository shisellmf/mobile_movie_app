import { View,Text, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import { MovieMap } from '@/interfaces/movie'
import MoviePoster from './MoviePoster'
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

interface Props{
    className?: string
    movies: MovieMap[]
}

const MainSlidesShow = ({ className, movies }: Props) => {

 const ref= useRef<ICarouselInstance>(null);
 const width = useWindowDimensions().width;

  return (
    <View className={`w-full h-[200px] ${className}`}>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster 
          id={item.id} 
          poster={item.poster} 
          isSmallPoster={false} />
        )}
        width={200}
        height={300}
        style={{ width: width, height: 300 }}
        ></Carousel>
    </View>
  )
}

export default MainSlidesShow