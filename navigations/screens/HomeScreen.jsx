import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCoin } from '../components/UserCoin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../context/AuthContext';




export const HomeScreen = ({ navigation }) => {

    const { test } = useContext(AuthContext)

    return (

        <SafeAreaView className="px-4 h-full bg-white">
            <View View className="flex-row justify-between py-4" >
                <Text className="font-visbyBold text-xl">Dozone</Text>

                <UserCoin />
            </View >


            {/* KONTEN */}
            <ScrollView showsVerticalScrollIndicator={false} className="container ">

                <ImageBackground
                    className="flex justify-between bg-primary1 h-56 p-4 rounded-2xl mb-6"
                    source={require('../../assets/image/summer.png')}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 16 }}
                >
                    <Text className="font-visbyBold text-3xl text-white">Daftar Misi</Text>
                    <View className="flex items-start">
                        <Pressable
                            className="bg-white px-4 py-2 rounded-full items-start"
                            onPress={() => navigation.navigate('MissionList')}
                        >
                            <Text className="font-visbyMedium text-accent1 text-sm">Daftar misi</Text>
                        </Pressable>
                    </View>
                </ImageBackground>

                <View
                    // source={{ uri: 'https://img.freepik.com/free-photo/beautiful-shot-high-white-hilltops-mountains-covered-fog_181624-399.jpg?w=996&t=st=1676888066~exp=1676888666~hmac=88b7e7a0fb14e55aa1fdb8b7de91b38e782d3790381d030b645174cc29f3dad5' }}
                    resizeMode="cover"
                    className='flex-row items-center justify-between px-4 py-5 mb-6 bg-primary2 rounded-2xl'
                    imageStyle={{ borderRadius: 16 }}
                >
                    <View className='w-56'>
                        <Text className="font-visbyBold text-lg text-white">Aktivitas</Text>
                        <Text className="font-visbyMedium text-xs text-white">Seluruh aktivitas dalam aplikasi dozone</Text>
                    </View>

                    <Pressable
                        className="bg-white px-4 py-2 rounded-lg flex items-center"
                        onPress={() => navigation.navigate('TestingCrud')}
                    >
                        {/* <Icon name='home' /> */}
                        <Icon name={'run-fast'} size={24} color={'#23695E'} />
                        <Text className="font-visbyMedium text-accent1 text-sm mt-1">Lihat</Text>
                    </Pressable>
                </View>

                {/* LAINNYA */}
                <Text className="font-visbyBold text-3xl mb-4">Lainnya</Text>
                <View className="flex-row gap-4 justify-between mb-4">

                    <View className="items-center justify-between bg-primary1 p-4 flex-1 rounded-3xl">
                        <Image
                            className="self-center flex-1 w-32 h-32"
                            resizeMode='cover'
                            // style={{ aspectRatio: 1 }}
                            source={require('../../assets/image/weather.png')}
                        />
                        <Text className="font-visbyBold text-lg mb-2">Cuaca</Text>
                        <View className="w-full">
                            <Pressable
                                className="bg-white px-4 py-2 rounded-xl items-center"
                                onPress={() => navigation.navigate('MissionList')}
                            >
                                <Text className="font-visbyBold text-accent1 text-sm">Lihat</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View className="items-center justify-between bg-primary1 flex-1 p-4 rounded-3xl">
                        <Image
                            source={require('../../assets/image/article.png')}
                            className="self-center w-32 h-32"
                            resizeMode='cover'
                        // style={{ aspectRatio: 1 }}
                        />
                        <Text className="font-visbyBold text-lg mb-2">Artikel</Text>
                        <View className="w-full">
                            <Pressable
                                className="bg-white px-4 py-2 w-full rounded-xl items-center"
                                onPress={() => navigation.navigate('MissionList')}
                            >
                                <Text className="font-visbyBold text-accent1 text-sm">Detail</Text>
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
