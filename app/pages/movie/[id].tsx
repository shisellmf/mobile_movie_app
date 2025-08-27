import { View, ScrollView, ActivityIndicator,Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { useMovie } from '@/app/hooks/useMovieDetail';
import MovieHeader from '@/app/components/movie/header';
import MovieDescription from '@/app/components/movie/body';
import { useMovieCast } from '@/app/hooks/useMovieCast';
import MovieCastFooter from '@/app/components/movie/footer';

const MovieDetail = () => {

  const {id}= useLocalSearchParams();
  const {movieDetail} = useMovie(id.toString());
  const {movieCasting} = useMovieCast(id.toString());

  if(movieDetail.isLoading) {
    <View className='flex-1'>
        <ActivityIndicator size="large" color="blue" />
    </View>
  }
//   if(movieDetail.error) return <Text>Error: {movieDetail.error.message}</Text>;

  return (
   <View className='flex-1'>
    <ScrollView
        contentContainerStyle={{paddingBottom:80 }}>
        <MovieHeader
            poster={movieDetail.data?.poster}
            originalTitle={movieDetail.data?.title}
            title={movieDetail.data?.title}
        />
        <MovieDescription
            originalTitle={movieDetail.data?.title}
            title={movieDetail.data?.title}
            description={movieDetail.data?.description}
            budget={movieDetail.data?.budget}
        />
        <Text className='pl-4 opacity-30 text-lg'>Elenco</Text>
        <MovieCastFooter casting={movieCasting.data??[]} />
    </ScrollView>
    </View>
  )
}

export default MovieDetail