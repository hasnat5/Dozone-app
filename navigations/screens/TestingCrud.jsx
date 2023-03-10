import React, { useState } from 'react'
import { Text, TextInput, View, Keyboard, TouchableOpacity, Pressable } from 'react-native'
import { firebase } from '../../config'


export const TestingCrud = ({ navigation }) => {
    // const todoRef = firebase.firestore().collection('todos');
    const [addData, setAddData] = useState('');

    //add a todo
    const ac = () => {
        //check if we have a todo
        if (addData && addData.length >= 0) {
            //get the timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                title: 'tanpa ac 3 hari',
                coin: 20,
                createdAt: timestamp
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddData('');
                    //release keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        }

        navigation.navigate('Mission')
    }

    const kendaraan = () => {
        //check if we have a todo
        if (addData && addData.length >= 0) {
            //get the timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                title: 'tanpa kendaraan pribadi',
                coin: 50,
                createdAt: timestamp
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddData('');
                    //release keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        }

        navigation.navigate('Mission')
    }


    return (


        <View className="flex">
            <View className="flex-row h-20 mx-3 mt-6">
                <TextInput
                    className="h-12 rounded overflow-hidden bg-white pl-4 flex-1 mr-1"
                    placeholder='add a new todo'
                    onChangeText={(title) => setAddData(title)}
                    value={addData}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />

                <TouchableOpacity className="h-12 rounded bg-blue-600 w-20 items-center justify-center" onPress={ac}>
                    <Text className="text-white text-xl">Add</Text>
                </TouchableOpacity>
            </View>


            <Pressable className="h-12 rounded bg-violet-500 items-center justify-center" onPress={ac}>
                <Text className="text-white text-xl">3 Hari tanpa Ac</Text>
            </Pressable>

            <Pressable className="h-12 rounded bg-pink-400 mt-6 items-center justify-center" onPress={kendaraan}>
                <Text className="text-white text-xl">Sehari tanpa kendaraan pribadi</Text>
            </Pressable>

        </View >

    )
}