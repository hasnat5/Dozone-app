import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Pressable, ImageBackground, Image, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCoin } from '../components/UserCoin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';


export const HomeScreen = ({ navigation }) => {
    const [poin, setPoin] = useState(null);
    const isFocused = useIsFocused();

    const { userTema } = useContext(AuthContext)

    async function getPoin() {
        try {
            const response = await axios.get(`${BASE_URL}user/`
            )
            console.log(response.data)
            setPoin(response.data.poin)


        } catch (error) {
            Alert.alert('poin gagal terambil')
            console.error(error);
        }
    }

    useEffect(() => {
        if (isFocused) {
            getPoin()
        }

    }, [isFocused])

    return (

        <SafeAreaView className="px-4 h-full bg-white">
            <View View className="flex-row justify-between py-4" >
                <Text className="font-visbyBold text-xl">Dozone</Text>

                <UserCoin poin={poin} />
            </View >


            {/* KONTEN */}
            <ScrollView showsVerticalScrollIndicator={false} className="container ">

                <ImageBackground
                    className="flex justify-between h-56 p-4 rounded-2xl mb-6"
                    style={{ backgroundColor: `${userTema.primary1}` }}
                    source={{ uri: `${BASE_URL}${userTema.mainPicture}` }}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 16 }}
                >
                    <Text className="font-visbyBold text-3xl" style={{ color: `${userTema.accent2}` }}>Daftar Misi</Text>
                    <View className="flex items-start">
                        <Pressable
                            className="bg-white px-4 py-2 rounded-full items-start"
                            onPress={() => navigation.navigate('MissionList')}
                        >
                            <Text className="font-visbyMedium text-sm" style={{ color: `${userTema.accent1}` }}>Daftar misi</Text>
                        </Pressable>
                    </View>
                </ImageBackground>

                <View
                    className='flex-row items-center justify-between px-4 py-5 mb-6 rounded-2xl'
                    style={{ backgroundColor: `${userTema.primary2}` }}
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
                        <Icon name={'run-fast'} size={24} color={userTema.accent1} />
                        <Text className="font-visbyMedium text-sm mt-1" style={{ color: `${userTema.accent1}` }}>Lihat</Text>
                    </Pressable>
                </View>

                {/* LAINNYA */}
                <Text className="font-visbyBold text-lg mb-4">Lainnya</Text>
                <View className="flex-row gap-4 justify-between mb-4">

                    <View className="items-center justify-between p-4 flex-1 rounded-3xl" style={{ backgroundColor: `${userTema.primary1}` }}>
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
                                onPress={() => Linking.openURL('https://www.accuweather.com/')}
                            >
                                <Text className="font-visbyBold text-sm" style={{ color: `${userTema.accent1}` }}>Detail</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View className="items-center justify-between flex-1 p-4 rounded-3xl" style={{ backgroundColor: `${userTema.primary1}` }}>
                        <Image
                            source={require('../../assets/image/article.png')}
                            className="self-center w-32 h-32"
                            resizeMode='cover'
                        />
                        <Text className="font-visbyBold text-lg mb-2">Artikel</Text>
                        <View className="w-full">
                            <Pressable
                                className="bg-white px-4 py-2 w-full rounded-xl items-center"
                                onPress={() => Linking.openURL('https://www.google.com/search?q=ozone+layer&oq=ozone+layer&aqs=chrome..69i57j0i512l4j69i60l3.9730j1j4&sourceid=chrome&ie=UTF-8')}
                            >
                                <Text className="font-visbyBold text-sm" style={{ color: `${userTema.accent1}` }}>Lihat</Text>
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
