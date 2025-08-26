
import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_MOVIE_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  },
  params: {
     language:'es-MX'
  },
});