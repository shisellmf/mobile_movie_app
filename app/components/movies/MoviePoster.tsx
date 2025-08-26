import { Image, Pressable } from 'react-native'
import React from 'react'

interface Props{
  id: number;
  poster: string;
  isSmallPoster: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, isSmallPoster=false, className}: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
    >
      <Image source={{ uri: poster }} 
       className="shadow-lg w-full h-full rounded-2xl" 
       style={{ 
        width: isSmallPoster ? 85 : 150, 
        height: isSmallPoster ? 130 : 250,
      }}
      resizeMode='cover'
       />
    </Pressable>
  )
}

export default MoviePoster