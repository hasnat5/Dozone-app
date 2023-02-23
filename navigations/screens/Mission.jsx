import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Text, StatusBar, View, Pressable, FlatList, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BASE_URL } from '../../config';
import { UserCoin } from '../components/UserCoin';
import CountDown from 'react-native-countdown-component';
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
    const MisiBerjalan = ({ title, poin, id, waktu }) => {

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

        async function completeMission(id) {
            try {
                const response = await axios.post(`${BASE_URL}misi/${id}/complete`, {})
                console.log(response.data)
                Alert.alert('Misi selesai')
                getMissionRun()
                getPoin()

            } catch (error) {
                Alert.alert('gagal terselesaikan')
                console.error(error);
            }
        }

        return (
            <View className="bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
                <View>
                    <View className="flex-row gap-[3px]">
                        <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                        <Text className="font-bold text-sm text-amber-400 mb-1">{poin}</Text>
                    </View>

                    <Text className="font-visbyMedium text-lg w-52">
                        {title}
                    </Text>
                </View>
                <View className="flex-row items-center gap-3">

                    {/* <CountDown
                        size={10}
                        until={15}
                        onFinish={
                            handleFinish
                            // Alert.alert('misi selesai')
                        }
                        timeToShow={['H', 'M', 'S']}
                    /> */}

                    <Pressable onPress={() => completeMission(id)}>
                        <Icon name={'check-circle'} size={24} color={userTema.primary2} />
                    </Pressable>

                    <Pressable onPress={() => deleteMission(id)}>
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
                <Text className="font-visbyBold text-xl">Misi Saya</Text>

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
                    renderItem={({ item }) => <MisiBerjalan id={item.id} title={item.misi} poin={item.poin} waktu={item.waktu} />}
                />
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Mission

