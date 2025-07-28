import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { fetchMovies } from "../services/api";
import useFetch from "../services/useFetch";
import MovieCard from "../components/MovieCard";
import { getTrendingMovies } from "../services/appwrite";

export default function Index() {
   const router = useRouter();

   const {
    data:trendingMovies,
    loading: trendingLoading,
    error: trendingerror
   } = useFetch(getTrendingMovies);

   const{
      data:movies,
      loading: moviesLoading,
      error: moviesError
    } =
      useFetch(()=> fetchMovies({
      query:''}
    ));
  
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg}
       className='absolute w-full z-0'></Image>

        <ScrollView className="flex-1 px-5" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{minHeight:'100%', paddingBottom:10}}
        >
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 
          mx-auto"></Image>
        
          {moviesLoading || trendingLoading ? (
            <ActivityIndicator 
             size="large"
             color="#0000ff"
             className="mt-0 self-center"
            />
          ):moviesError || trendingerror ? (
            <Text>Error: {
              moviesError?.message || trendingerror?.message}
              </Text>
          ):(
             <View className="flex-1 mt-5">
               <SearchBar
                 onPress={()=> router.push("/search")}
                 placeholder="Search for a movie">
               </SearchBar>
               {trendingMovies && (
                <View>
                  <Text className="text-lg text-white font-bold mt-5 mb-3">
                    Trending Movies</Text>
                  <FlatList 
                    data={trendingMovies}
                    renderItem={({item,index}) => (
                    <Text className="text-white text-sm">
                      {item.title}
                    </Text>                     
                    )}
                    keyExtractor={(item) => item.movie_id.toString()}>
                  </FlatList>
                </View> 
               )}
               <Text className="text-lg text-white">Latest Movies</Text>
               <FlatList
                data={movies}
                renderItem={({item }) => (
                  <MovieCard
                  {...item}
                  ></MovieCard>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent:"space-between",
                  gap:20,
                  paddingRight:5,
                  marginBottom:10
                }}
                className="mt-2 pb-32"
               >                
               </FlatList>
             </View>        
          )
         }        
       </ScrollView>
    </View>
  );
}
