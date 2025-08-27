import { Stack } from "expo-router";
import './global.css';
import { StatusBar } from "react-native";
import { nowPlayingAction } from "./services/api";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <StatusBar hidden={true}></StatusBar>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="pages"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="movies/[id]"
            options={{ headerShown: false }}
          />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  ) 
}
