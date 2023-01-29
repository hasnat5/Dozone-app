import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { firebase } from '../../config'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconLogo from 'react-native-vector-icons/MaterialCommunityIcons';


export const MissionList = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const todoRef = firebase.firestore().collection('todos');

    //add a todo
    const ac = () => {
        //get the timestamp
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            title: 'tanpa ac 3 hari',
            coin: 50,
            createdAt: timestamp
        };
        todoRef
            .add(data)
            .catch((error) => {
                alert(error);
            })

        navigation.navigate('Mission')
    }

    const kendaraan = () => {
        //get the timestamp
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            title: 'tanpa kendaraan pribadi',
            coin: 20,
            createdAt: timestamp
        };
        todoRef
            .add(data)
            .catch((error) => {
                alert(error);
            })


        navigation.navigate('Mission')
    }

    return (
        <View className="p-4">

            {/* MISI 1 */}
            <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">

                <View className="flex-row gap-3 items-start">
                    {/* LOGO */}
                    <View className="bg-green-100 p-2 rounded-xl">
                        <IconLogo name={'air-filter'} size={32} color={'rgb(74, 222, 128)'} />
                    </View>

                    {/* TEKS */}
                    <View>
                        <Text className="font-visbyMedium text-lg w-44 mb-2">3 Hari tanpa AC</Text>

                        <View className="flex-row">
                            {/* KOIN */}
                            <View className="flex-row gap-[3px] mr-3">
                                <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                                <Text className="font-visbyBold text-sm text-amber-400 mb-1">50</Text>
                            </View>

                            {/* WAKTU */}
                            <View className="flex-row gap-[3px]">
                                <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                                <Text className="font-visbyBold text-sm text-blue-400 mb-1">3 Hari</Text>
                            </View>
                        </View>

                    </View>
                </View>

                {/* AKSI */}
                <Pressable
                    className="bg-green-400 rounded-xl px-3 py-2"
                    onPress={ac}
                >
                    <Text className="font-visbyBold text-white">Terima</Text>
                </Pressable>
            </View>


            {/* MISI 2 */}
            <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">

                <View className="flex-row gap-3 items-start">
                    {/* LOGO */}
                    <View className="bg-green-100 p-2 rounded-xl">
                        <IconLogo name={'car'} size={32} color={'rgb(74, 222, 128)'} />
                    </View>

                    {/* TEKS */}
                    <View>
                        <Text className="font-visbyMedium text-lg w-44 mb-2">Tanpa kendaraan pribadi</Text>

                        <View className="flex-row">
                            {/* KOIN */}
                            <View className="flex-row gap-[3px] mr-3">
                                <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                                <Text className="font-visbyBold text-sm text-amber-400 mb-1">20</Text>
                            </View>

                            {/* WAKTU */}
                            <View className="flex-row gap-[3px]">
                                <Icon name={'schedule'} size={14} color={'rgb(96, 165, 250)'} />
                                <Text className="font-visbyBold text-sm text-blue-400 mb-1">1 Hari</Text>
                            </View>
                        </View>

                    </View>
                </View>

                {/* AKSI */}
                <Pressable
                    className="bg-green-400 rounded-xl px-3 py-2"
                    onPress={kendaraan}
                >
                    <Text className="font-visbyBold text-white">Terima</Text>
                </Pressable>
            </View>


        </View >
    )
}