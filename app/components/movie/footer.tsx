import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { MovieCast } from '@/interfaces/movie';

interface MovieCastProps {
    casting: MovieCast[]
}

const MovieCastFooter = ({ casting }: MovieCastProps) => {

  return (
    <View className='pl-2'>
      <FlatList
        data={casting}
        horizontal={true}
        style={{ paddingVertical: 10, paddingHorizontal: 5 }}
        renderItem={({ item }) => (
          <View className='items-center'>
            <Image 
              source={{uri:item.profilePath}}
              className='rounded-xl shadow-lg w-32 h-36 mr-2 bg-primary'
            ></Image>
            <Text className='text-xs pt-2 font-semibold'>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default MovieCastFooter