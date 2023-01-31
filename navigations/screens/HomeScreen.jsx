import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCoin } from '../components/UserCoin';


export const HomeScreen = ({ navigation }) => {

    return (

        <SafeAreaView className="px-4">
            <View View className="flex-row justify-between py-4" >
                <Text className="font-visbyBold text-xl">AirMission</Text>

                <UserCoin />
            </View >


            {/* KONTEN */}
            <ScrollView className="container">
                <View className="flex justify-between bg-blue-200 h-56 p-4 rounded-3xl mb-6">
                    <Text className="font-visbyBold text-3xl">Daftar Misi</Text>
                    <View className="flex items-start">
                        <Pressable
                            className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                            onPress={() => navigation.navigate('MissionList')}
                        >
                            <Text className="font-visbyBold text-white text-base">Daftar misi</Text>
                        </Pressable>
                    </View>
                </View>
                <View className="flex-row items-center justify-between bg-blue-200 p-4 rounded-3xl mb-6">
                    <Text className="font-visbyBold text-2xl">Aktivitas</Text>
                    <View className="flex items-start">
                        <Pressable
                            className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                            onPress={() => navigation.navigate('TestingCrud')}
                        >
                            <Text className="font-visbyBold text-white text-sm">Lihat</Text>
                        </Pressable>
                    </View>
                </View>

                {/* LAINNYA */}
                <Text className="font-visbyBold text-3xl mb-6">Lainnya</Text>
                <View className="flex-row gap-4 justify-between h-64 mb-10">
                    <View className="flex items-center justify-between bg-blue-200 p-4 flex-1 rounded-3xl mb-6">
                        <Text className="font-visbyBold text-2xl">Cuaca</Text>
                        <View className="flex items-start">
                            <Pressable
                                className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                                onPress={() => navigation.navigate('MissionList')}
                            >
                                <Text className="font-visbyBold text-white text-sm">Lihat</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className="flex items-center justify-between bg-blue-200 flex-1 p-4 rounded-3xl mb-6">
                        <Text className="font-visbyBold text-2xl">Kadar polusi</Text>
                        <View className="flex items-start">
                            <Pressable
                                className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                                onPress={() => navigation.navigate('MissionList')}
                            >
                                <Text className="font-visbyBold text-white text-sm">Detail</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <StatusBar style="auto" />

                {/*
        <Text className="text-3xl font-visbyHeavy">Misi a</Text>
        <Text className="text-3xl font-visbyExtraBold">Misi</Text>
        <Text className="text-3xl font-visbyBold">Misi Shop</Text>
        <Text className="text-3xl font-visbyMedium" style={{ fontFamily: "visbyMedium" }}>Misi</Text>
        <Text className="text-3xl font-visbyRegular">Misi</Text>
        <Text className="text-3xl font-visbyThin">Misi</Text> */}

            </ScrollView >
        </SafeAreaView >


    )
}
