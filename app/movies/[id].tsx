import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, Image, View,Text, TouchableOpacity } from 'react-native'
import useFetch from '../services/useFetch';
import { fetchMoviesDetails } from '../services/api';
import { icons } from '@/constants/icons';

interface MovieInfoProps{
  label:string;
  value?: string | number | null;
}

const MovieInfo= ({label,value}:MovieInfoProps)=>(
  <View className='flex-col items-start justify-center mt-5'>
    <Text className='text-light-200 font-normal text-sm'>
      {label}
    </Text>
    <Text className='text-white text-sm mt-2'>
      {value || 'N/A'}
    </Text>
  </View>
);

const MovieDetails = () => {

  const { id } = useLocalSearchParams();
  const {data:movie,loading}= useFetch(
    ()=>fetchMoviesDetails(id as string));

  return (
    <View className='bg-primary flex-1'>
      <ScrollView
        contentContainerStyle={{
          paddingBottom:80 }}>
        <View>
          <Image 
            className='w-full h-[550px]' resizeMode='stretch'
            source={{uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`}}>
          </Image>
        </View>
        <View className='flex-col items-start
        justify-center mt-5 px-5'>
          <Text className='text-white font-bold text-xl'>
            {movie?.title}
          </Text>
          <View className='flex-row items-center gap-x-1 mt-2'>
            <Text className='text-light-200 text-sm'>
              {movie?.release_date?.split('-')[0]}
            </Text>
            <Text className='text-light-200 text-sm'>              
              {movie?.runtime}m
            </Text>
          </View>
          <View className='flex-row items-center
          bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>
            <Image source={icons.star} className='size-4'></Image>
            <Text className='text-light-200'>{Math.round(movie?.vote_average??0)}/10</Text>
            <Text className='text-light-200 text-sm'>
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie?.overview}></MovieInfo>
          <MovieInfo label="Overview" value={
            movie?.genres.map(genres => genres.name).join('·')
          }></MovieInfo>

          <View className='flex flex-row justify-between w-1/2'>
            <MovieInfo label="Released date" value={movie?.release_date}></MovieInfo>
            <MovieInfo label="Status" value={movie?.status}></MovieInfo>
          </View>

          <MovieInfo label="Production Companies" value={
            movie?.production_countries.map(country => country.name
            ).join('-') || 'N/A'
          }></MovieInfo>
        </View>
      </ScrollView>

      <TouchableOpacity className='absolute bottom-5 left-0 right-0 mx-5
      bg-accent rounded-lg py-3.5 flex flex-row justify-center z-50'
      onPress={router.back}>
        <Image source={icons.arrow} 
        className='size-5 mr-1 mt-0.5 rotate-180' tintColor="#fff"></Image>
        <Text className='text-white font-semibold text-base'>Go back</Text>
      </TouchableOpacity>

    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})