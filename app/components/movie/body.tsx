import { View, Text } from 'react-native'
import React from 'react'
import { Formatter } from '@/types/formatter';

interface Props {
    originalTitle?: string;
    title?: string;
    description?: string;
    budget?: number;
}

const MovieDescription = ({ originalTitle, title, description, budget }: Props) => {
  return (
    <View>
        <View className='p-4 mt-4'>
            <Text className='text-sm text-neutral-700'>{originalTitle}</Text>
            <Text className='text-lg font-bold'>{title}</Text>
            <Text className='text-lg font-bold opacity-50 mt-5'>Historia</Text>
            <Text className='text-sm text-neutral-700'>{description}</Text>
            <Text className='text-sm text-neutral-700 pt-2'>{Formatter.currency(budget ? budget : 0)}</Text>
        </View>
    </View>
  )
}

export default MovieDescription