import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const HomeScreen = ({ navigation }) => {

    return (

        <SafeAreaView className="px-4">
            <View View className="flex-row justify-between py-4" >
                <Text className="font-visbyBold text-xl">AirMission</Text>

                <View className="flex-row items-center px-2 rounded-md bg-white">
                    <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'rgb(251, 191, 36)'} />
                    <Text className="font-visbyBold text-sm">250</Text>
                </View>
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
                    <Text className="font-visbyBold text-2xl">Testing CRUD</Text>
                    <View className="flex items-start">
                        <Pressable
                            className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                            onPress={() => navigation.navigate('TestingCrud')}
                        >
                            <Text className="font-visbyBold text-white text-sm">Testing</Text>
                        </Pressable>
                    </View>
                </View>

                {/* LAINNYA */}
                <Text className="font-visbyBold text-3xl mb-6">Lainnya</Text>
                <View className="flex-row gap-4 justify-between h-64 mb-10">
                    <View className="flex items-center justify-between bg-blue-200 p-4 flex-1 rounded-3xl mb-6">
                        <Text className="font-visbyBold text-2xl">Daftar Misi</Text>
                        <View className="flex items-start">
                            <Pressable
                                className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                                onPress={() => navigation.navigate('MissionList')}
                            >
                                <Text className="font-visbyBold text-white text-sm">View Detail</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className="flex items-center justify-between bg-blue-200 flex-1 p-4 rounded-3xl mb-6">
                        <Text className="font-visbyBold text-2xl">Daftar Misi</Text>
                        <View className="flex items-start">
                            <Pressable
                                className="bg-zinc-600 px-4 py-2 rounded-xl items-start"
                                onPress={() => navigation.navigate('MissionList')}
                            >
                                <Text className="font-visbyRegular text-white text-sm">View Detail</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <StatusBar style="auto" />
            </ScrollView >
        </SafeAreaView >


    )
}
