import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'


const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

        <Stack>
          <StatusBar hidden={true}></StatusBar>
          <Stack.Screen
            name="movie/[id]"
            options={{ headerShown: false }}
          />
        </Stack>
 
    </GestureHandlerRootView>
  )
}

export default _layout