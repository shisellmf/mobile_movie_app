import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import useMovie from '../hooks/useMovie';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlidesShow from '../components/movies/MainSlides';
import MovieHorizontal from '../components/movies/MovieHorizontal';

const save = () => {

  const safeArea= useSafeAreaInsets()
  const {nowPlayingQuery,popularQuery} = useMovie();

  if(nowPlayingQuery.isLoading){
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator color={Colors.primary} size={40}></ActivityIndicator>
      </View>
    )
  }

  return (
    <View className='mt-2' style={{paddingTop: safeArea.top}}> 
      <Text className='text-3xl font-bold px-4 mb-2'>Movies Save</Text>
      <MainSlidesShow movies={nowPlayingQuery.data??[]}></MainSlidesShow>

      <MovieHorizontal movies={popularQuery.data??[]}></MovieHorizontal>
    </View>
  )
}

export default save

const styles = StyleSheet.create({})