import { images } from '@/constants/images'
import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../services/api';
import useFetch from '../services/useFetch';
import MovieCard from '../components/MovieCard';
import { icons } from '@/constants/icons';
import SearchBar from "../components/SearchBar";
import { StyleSheet, Image, View, 
         FlatList, ActivityIndicator,Text } from 'react-native'
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';

const search = () => {    
  const[searchQuery,setSearchQuery]= useState('');

  const{data:movies,loading,error,
        refetch: loadMovies, reset} = useFetch(
        ()=> fetchMovies({query:searchQuery}),true
      );

  useEffect(()=>{
    const timeout= setTimeout(
      async () =>{
        if(searchQuery.trim()){
          await loadMovies();
        }else{
          reset();
        }
      },500)
      return () => clearTimeout(timeout);
  },[searchQuery])

  return (
    <View className='flex-1 bg-primary'>
     <Image source={images.bg} className='flex-1 absolute w-full z-0'
     resizeMode='cover'>      
     </Image>
     <FlatList data={movies}
                renderItem={({item }) => (
                  <MovieCard
                  {...item}
                  ></MovieCard>
                )}
                keyExtractor={(item)=> item.id.toString()}
                className='px-5'
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent:"center",
                  gap:16,
                  marginVertical:16
                }}
                contentContainerStyle={{paddingBottom:100}}
        ListHeaderComponent={
        <>
          <View className='w-full flex-row justify-center mt-20
              items-center'>
              <Image source={icons.logo} className='w-12 h-10'/>
          </View>
          <View className='my-5'>
            <SearchBar 
              placeholder='Search movies...'
              value={searchQuery}
              onChangeText={
                (text:string)=> setSearchQuery(text)
              }
              ></SearchBar>
          </View>
          {loading && (
            <ActivityIndicator size='large' color='#0000ff'
            className='my-3'>
            </ActivityIndicator>
          )}
          {error && (
            <Text className='text-red-500 px-5 my-3'>
              {error.message}
            </Text>
          )}
          {!loading && !error 
            && searchQuery.trim() && movies?.length>0 && (
            <Text className='text-xl text-white font-bold'>
              Search Result for{' '}
              <Text className='text-accent'>
                {searchQuery}
              </Text>
            </Text>
            )}
        </>
      }
      ListEmptyComponent={
        !loading && !error ? (
          <View className='mt-10 px-5'>
            <Text className='text-gray-500 text-center'>
              {
                searchQuery.trim() 
                ? 'No movies found' 
                : 'Search for a movie'
              }
              </Text>
          </View>
        ):null
      }
      >
     </FlatList>
    </View>
  )
} 

export default search

const styles = StyleSheet.create({})