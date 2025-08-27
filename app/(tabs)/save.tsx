import React from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import useMovie from '../hooks/useMovie';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlidesShow from '../components/movies/MainSlides';
import MovieHorizontal from '../components/movies/MovieHorizontal';
import { ScrollView } from 'react-native-gesture-handler';

const save = () => {

  const safeArea= useSafeAreaInsets()
  const {nowPlayingQuery,popularQuery,ratedQuery,upComingQuery} = useMovie();

  if(nowPlayingQuery.isLoading){
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator color={Colors.primary} size={40}></ActivityIndicator>
      </View>
    )
  }

  return (
    <SafeAreaView className='flex-1 pt-safe'>
        <ScrollView className='flex-1'>
          <View className='pb-40' style={{paddingTop: safeArea.top}}> 
            <Text className='text-3xl font-bold px-4 mb-2'>Movies Save</Text>
            <MainSlidesShow className='mb-12' movies={nowPlayingQuery.data??[]}></MainSlidesShow>
            <MovieHorizontal title='Populars' movies={popularQuery.data??[]}></MovieHorizontal>
            <MovieHorizontal title='Top Rated' movies={ratedQuery.data??[]}></MovieHorizontal>
            <MovieHorizontal title='Upcoming' movies={upComingQuery.data??[]}></MovieHorizontal>
          </View>
      </ScrollView>
    </SafeAreaView>   
  )
}

export default save

const styles = StyleSheet.create({})