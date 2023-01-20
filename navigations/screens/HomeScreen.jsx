import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFonts } from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (

        <SafeAreaView className="bg-orange-200 px-4">
            <View className="flex-row justify-between py-2">
                <Text className="font-visbyBold text-3xl">AirMission</Text>
                <View className="flex self-center">
                    <View className="py-1 px-2 rounded-md bg-green-400">
                        <Text className="font-visbyBold">Air Mission</Text>
                    </View>
                </View>
            </View>

            <ScrollView className="container mx-auto bg-green-300">
                <View className="bg-blue-200 p-4 h-auto rounded-2xl ">
                    <Text className="font-visbyBold text-xl mb-6">Proses Saya new</Text>
                    <Pressable
                        className="inline bg-zinc-600 px-4 py-2 rounded-xl"
                        onPress={() => navigation.navigate('MissionList')}
                    >
                        <Text className="inline text-white font-bold">Daftar misi</Text>
                    </Pressable>
                </View>
                <View className="container grid items-center justify-center">
                    <Text className="text-red-500 text-4xl font-bold">Natkun top</Text>
                    <Image
                        className="h-8 w-8"
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text className="text-red-500 text-4xl font-bold mt-[1000px]">Natkun bawah</Text>
                    <Pressable
                        className="bg-zinc-600 px-4 py-2 mb-80 rounded-xl"
                        onPress={() => navigation.navigate('Shop')}
                    >
                        <Text className="text-white font-bold">Shop</Text>
                    </Pressable>
                    <StatusBar style="auto" />
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
