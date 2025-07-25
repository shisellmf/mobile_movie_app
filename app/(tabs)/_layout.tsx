import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const TabIcon= ({focused,icon,title}:any) => {
    if(focused){
        return (
        <ImageBackground
            source={images.highlight}
            className='flex flex-row w-full flex-1
            min-w-[112px] min-h-16 mt-4 justify-center items-center
            overflow-hidden rounded-full'>
            <Image source={icon} 
                    tintColor='#151312'
            />
            <Text className='text-white text-base ml-2'>
                {title}
            </Text>
        </ImageBackground>
        )
    }

    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image  source={icon} tintColor='#E7DDFF'></Image>
        </View>
    )
    
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={
            {
                tabBarShowLabel:false,
                tabBarItemStyle:{
                    width: '100%',
                    height:'100%',
                    justifyContent: 'center',
                    alignItems:'center'
                },
                tabBarStyle:{
                    backgroundColor:'#0f0D23',
                    borderRadius:50,
                    marginHorizontal:20,
                    marginBottom:36,
                    height:52,
                    position:'absolute',
                    overflow:'hidden',
                    borderWidth:1
                }
            }
        }
    >
        <Tabs.Screen
            name="index"
            options={{
                title:'Home',
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <TabIcon
                        focused={focused}
                        icon={icons.home}
                        title="Home"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="save"
            options={{
                title:'Save',
                headerShown:true,
                tabBarIcon:({focused}) =>(
                    <TabIcon
                        focused={focused}
                        icon={icons.save}
                        title="Saved"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="search"
            options={{
                title:'Search',
                headerShown:true,
                tabBarIcon:({focused}) =>(
                    <TabIcon
                        focused={focused}
                        icon={icons.search}
                        title="Search"
                    />
                )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title:'Profile',
                headerShown:true,
                tabBarIcon:({focused}) =>(
                    <TabIcon
                        focused={focused}
                        icon={icons.person}
                        title="Profile"
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})