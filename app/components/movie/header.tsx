import { View, Image,Text, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { goBack } from 'expo-router/build/global-state/routing';
import { LinearGradient } from 'expo-linear-gradient';

interface Props{
    poster?:string;
    originalTitle?:string;
    title?:string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {

  const {height:screenHeight} = useWindowDimensions();

  return (
   <> 
   <LinearGradient
       colors={['rgba(0,0,0,0.3)', 'transparent']}
       style={{ height: screenHeight * 0.4, position: 'absolute',zIndex:1,width:'100%'}}
   >
   </LinearGradient>
    <View className='absolute top-14 left-0 right-0 z-50'>
        <Pressable onPress={() => goBack()}>
            <Ionicons className='pl-5' name="arrow-back" size={24} color="white" />
        </Pressable>
    </View>
    <View
        style={{
            height: screenHeight * 0.7,
        }}
        className='shadow-xl'
        >
      <View className='flex-1 rounded-b-[25px] overflow-hidden'>
        <Image
          source={{ uri:poster }}
          className='flex-1'
          resizeMode='cover'
        />
      </View>
    </View>   
   </>
  )
}

export default MovieHeader