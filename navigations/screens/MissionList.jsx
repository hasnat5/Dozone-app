import React, { useContext, useEffect, useState } from 'react'
import { Alert, FlatList, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { BASE_URL } from '../../config'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconLogo from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';


const Misi = ({ navigation, judul, poin, waktu, gambar, id }) => {

    const { userTema } = useContext(AuthContext)

    const terimaMisi = (id) => {
        axios.post(`${BASE_URL}misi/${id}/terima`, {})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                Alert.alert('Gagal menerima misi')
                console.error(error);
            });
    }

    return (
        <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">

            <View className="flex-row gap-3 items-start">
                {/* LOGO */}
                <View className="p-2 rounded-xl" style={{ backgroundColor: `${userTema.primary1}` }}>
                    <IconLogo name={gambar} size={32} color={userTema.accent1} />
                </View>

                {/* TEKS */}
                <View>
                    <Text className="font-visbyMedium text-lg w-44 mb-2">{judul}</Text>

                    <View className="flex-row">
                        {/* KOIN */}
                        <View className="flex-row gap-[3px] mr-3">
                            <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                            <Text className="font-visbyBold text-sm text-amber-400 mb-1">{poin}</Text>
                        </View>

                        {/* WAKTU */}
                        <View className="flex-row gap-[3px]">
                            <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                            <Text className="font-visbyBold text-sm text-blue-400 mb-1">{waktu} Hari</Text>
                        </View>
                    </View>

                </View>
            </View>

            {/* AKSI */}
            <TouchableOpacity
                className="rounded-xl px-3 py-2"
                style={{ backgroundColor: `${userTema.primary2}` }}
                onPress={() => {
                    terimaMisi(id)
                    navigation.navigate('Mission')
                }}
            >
                <Text className="font-visbyBold text-white">Terima</Text>
            </TouchableOpacity>
        </View>
    )
}


export const MissionList = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [misi, setMisi] = useState([]);


    async function getMission() {
        setIsLoading(true);

        try {
            const response = await axios.get(`${BASE_URL}misi/list/`)
            setMisi(response.data)
            console.log(response.data)
        } catch (error) {
            Alert.alert('Gagal load misi')
            console.error(error);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getMission()
    }, [])

    return (
        <View className="p-4">
            {isLoading
                ?
                <ActivityIndicator size="large" color="#EF5C27" />
                :
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={misi}
                    numColumns={1}
                    renderItem={({ item }) => <Misi navigation={navigation} judul={item.judul} poin={item.poin} waktu={item.waktu} gambar={item.gambar} id={item.id} />}
                    keyExtractor={item => item.id}
                />
            }

        </View >
    )
}