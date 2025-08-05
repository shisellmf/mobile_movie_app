import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from '@/constants/images';

export default function TrandingCard(
   { movie:{movie_id,title,poster_url}, index}: TrendingCardProps){
  return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className='w-32 relative pl-2'>
            <Image
                source={{uri:poster_url}}
                className="w-32 h-48 rounded-lg"
                resizeMode="cover"/>
            <View className='absolute bottom-9 -left-3.5
                px-2 py-1 rounded-full'>
                <MaskedView 
                style={{height: 50 }}
                maskElement={
                    <Text className='font-bold text-6xl text-white'>
                        {index + 1}
                    </Text>
                }>
                <Image source={images.rankingGradient}
                    className='sixe-14' resizeMode='cover'
                />
                </MaskedView>                    
            </View>
            <Text className='text-sm font-bold mt-2
            text-light-200' numberOfLines={2}>
                {title}
            </Text>
        </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({})