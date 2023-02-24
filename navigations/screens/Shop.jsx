import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, FlatList, Image, Pressable, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BASE_URL } from '../../config';
import { AuthContext } from '../../context/AuthContext';
import { UserCoin } from '../components/UserCoin';



export const Shop = () => {

    const [poin, setPoin] = useState(null)
    const [product, setProduct] = useState([])
    const isFocused = useIsFocused()

    const { userTema } = useContext(AuthContext)

    // FETCH POIN
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

    // FETCH PRODUCT
    async function getProduct() {
        try {
            const response = await axios.get(`${BASE_URL}tema/`
            )
            console.log(response.data)
            setProduct(response.data)


        } catch (error) {
            Alert.alert('poin gagal terambil')
            console.error(error);
        }
    }

    // BELI TEMA
    async function beliTema(id) {
        try {
            const response = await axios.post(`${BASE_URL}tema/${id}/beli`, {})
            console.log(response.data)
            Alert.alert(response.data)

        } catch (error) {
            Alert.alert('gagal beli')
            console.error(error);
        }
    }

    // PAKAI TEMA
    async function pakaiTema(id) {
        try {
            const response = await axios.post(`${BASE_URL}tema/${id}/ubah`, {})
            console.log(response.data)
            Alert.alert('Perhatian', 'mohon restart aplikasi untuk merubah tema')

        } catch (error) {
            Alert.alert('gagal terubah')
            console.error(error);
        }
    }


    useEffect(() => {
        if (isFocused) {
            getPoin()
            getProduct()
        }

    }, [isFocused])

    return (
        <SafeAreaView className="px-2">
            <View View className="flex-row justify-between pt-4 pb-2 px-2" >
                <Text className="font-visbyBold text-xl">Shop</Text>
                <UserCoin poin={poin} />
            </View >

            <View className="container" >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={product}
                    numColumns={2}
                    keyExtractor={item => item.id_tema}
                    renderItem={
                        ({ item }) =>

                            <View className="flex-1 bg-white p-4 mx-2 my-2 rounded-3xl h-auto justify-between">
                                <Text className="font-visbyBold text-lg mb-2">{item.tema}</Text>
                                <Image
                                    className="self-center w-24 h-[85px] mb-4"
                                    source={{ uri: `${BASE_URL}${item.icon}` }}
                                />
                                {
                                    item.status == 'Purchased' ?
                                        <Pressable
                                            className="px-4 py-2 rounded-xl"
                                            style={{ backgroundColor: `${userTema.primary1}` }}
                                            onPress={() => {
                                                pakaiTema(item.id_tema)
                                                getProduct()
                                            }}
                                        >
                                            <View className="flex-row justify-center px-2 rounded-md">
                                                {/* <Text className="font-visbyBold text-sm text-accent1">{item.status}</Text> */}
                                                <Text className="font-visbyBold text-sm" style={{ color: `${userTema.accent1}` }}>Pakai</Text>
                                            </View>
                                        </Pressable>
                                        : (item.status == 'Active' ?
                                            <Pressable
                                                className="px-4 py-2 rounded-xl"
                                                style={{ backgroundColor: `${userTema.primary1}` }}
                                                onPress={() => {
                                                    console.log('dipakai')
                                                }}
                                            >
                                                <View className="flex-row justify-center px-2 rounded-md">
                                                    {/* <Text className="font-visbyBold text-sm text-accent1">{item.status}</Text> */}
                                                    <Text className="font-visbyBold text-sm" style={{ color: `${userTema.accent1}` }}>Dipakai</Text>
                                                </View>
                                            </Pressable>
                                            :
                                            <Pressable
                                                className="px-4 py-2 rounded-xl"
                                                style={{ backgroundColor: `${userTema.primary1}` }}
                                                onPress={() => {
                                                    beliTema(item.id_tema)
                                                    getProduct()
                                                    getPoin()
                                                }}
                                            >
                                                <View className="flex-row justify-center px-2 rounded-md">
                                                    <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={userTema.accent1} />
                                                    <Text className="font-visbyBold text-sm" style={{ color: `${userTema.accent1}` }}>{item.poin}</Text>
                                                </View>
                                            </Pressable>
                                        )
                                }
                            </View >
                    }
                />
            </View>

            <StatusBar style="auto" />

        </SafeAreaView>
    )
}
