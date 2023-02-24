import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Text, StatusBar, View, Pressable, FlatList, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BASE_URL } from '../../config';
import { UserCoin } from '../components/UserCoin';
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';


const Mission = ({ navigation }) => {
    const [misiBerjalan, setMisiBerjalan] = useState([]);
    const [poin, setPoin] = useState(null);
    const isFocused = useIsFocused();

    const { userTema } = useContext(AuthContext)

    //fetch data misi berjalan
    async function getMissionRun() {
        try {
            const response = await axios.get(`${BASE_URL}misi/`)
            console.log(response.data)
            setMisiBerjalan(response.data)

        } catch (error) {
            Alert.alert('tolong login ulang')
            console.error(error);
        }
    }

    // fetch poin
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

    // component misi berjalan
    const MisiBerjalan = ({ title, poin, id, remaining }) => {

        async function deleteMission(id) {
            try {
                const response = await axios.delete(`${BASE_URL}misi/${id}/cancel`)
                console.log(response.data)
                Alert.alert('Misi terhapus')
                getMissionRun()

            } catch (error) {
                Alert.alert('gagal menghapus')
                console.error(error);
            }
        }

        return (
            <View className="bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
                <View>
                    <View className='flex-row'>

                        <View className="flex-row gap-[3px] mr-4">
                            <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                            <Text className="font-bold text-sm text-amber-400 mb-1">{poin}</Text>
                        </View>

                        <View className="flex-row gap-[3px]">
                            <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                            <Text className="font-bold text-sm text-blue-400 mb-1">{remaining} detik</Text>
                        </View>

                    </View>
                    <Text className="font-visbyMedium text-lg w-52">
                        {title}
                    </Text>
                </View>
                <View className="flex-row items-center gap-3">

                    <Pressable onPress={() => {
                        Alert.alert('Perhatian', 'Anda tidak akan mendapat poin jika membatalkan misi', [
                            {
                                text: 'Cancel',
                            },
                            { text: 'OK', onPress: () => deleteMission(id) },
                        ]);


                    }}>
                        <Icon name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />
                    </Pressable>
                </View>
            </View >
        )
    }


    useEffect(() => {
        if (isFocused) {
            getMissionRun()
            getPoin()
        }

    }, [isFocused])

    return (
        <SafeAreaView className="h-screen px-4">
            <View View className="flex-row justify-between py-4" >
                <Text id='tes' className="font-visbyBold text-xl">Misi Saya</Text>

                <UserCoin poin={poin} />
            </View >

            {/* ADD MISSION */}
            <TouchableOpacity onPress={() => navigation.navigate('MissionList')} className="z-10 absolute bottom-16 right-6 rounded-xl p-3" style={{ backgroundColor: `${userTema.primary2}` }}>
                <Icon name={'add'} size={24} color={'white'} />
            </TouchableOpacity>


            {/* KONTEN */}
            <View className="container">
                <FlatList
                    data={misiBerjalan}
                    className="mb-16"
                    numColumns={1}
                    renderItem={({ item }) => <MisiBerjalan remaining={item.remaining} id={item.id} title={item.misi} poin={item.poin} waktu={item.waktu} />}
                />
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Mission

