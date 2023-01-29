import React, { useEffect, useState } from 'react'
import { Text, StatusBar, View, Pressable, FlatList, TouchableOpacity } from 'react-native'
import CountDown from 'react-native-countdown-component';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { firebase } from '../../config'


const Mission = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const todoRef = firebase.firestore().collection('todos');

    //fetch or read the data from firestore
    useEffect(() => {
        todoRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const todos = []
                    querySnapshot.forEach(doc => {
                        const { title } = doc.data()
                        const { coin } = doc.data()
                        todos.push({
                            id: doc.id,
                            title,
                            coin,
                        })
                    })
                    setTodos(todos)
                }
            )

    }, [])


    //Delete mission
    const deleteTodo = (todos) => {
        todoRef
            .doc(todos.id)
            .delete()
            .then(() => {
                //show a successful alert
                alert("Deleted Successfully")
            })
            .catch(error => {
                alert(error)
            })
    }


    const MisiBerjalan = (item) =>
        <View className="bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
            <View>
                <View className="flex-row gap-[3px]">
                    <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                    <Text className="font-bold text-sm text-amber-400 mb-1">{item.coin}</Text>
                </View>

                <Text className="font-visbyMedium text-lg w-52">
                    {item.title}
                </Text>
            </View>
            <View className="flex-row items-center gap-3">
                {/* <CountDown
                    size={10}
                    until={10}
                    onFinish={() => deleteTodo(item)}
                    timeToShow={['H', 'M', 'S']}
                /> */}
                {/* <Text className="font-visbyMedium text-xl">21:00:17</Text> */}
                <Pressable onPress={() => deleteTodo(item)}>
                    <Icon name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />
                </Pressable>
            </View>
        </View >


    // const handlefinish = (item) => {
    //     alert('waktu habis')
    //     deleteTodo(item)

    // }


    return (
        <SafeAreaView className="h-screen px-4">
            <View View className="flex-row justify-between py-4" >
                <Text className="font-visbyBold text-xl">Misi Saya</Text>

                <View className="flex-row items-center px-2 rounded-md bg-white">
                    <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'rgb(251, 191, 36)'} />
                    <Text className="font-visbyBold text-sm">250</Text>
                </View>
            </View >

            {/* ADD MISSION */}
            <TouchableOpacity onPress={() => navigation.navigate('MissionList')} className="z-10 absolute bottom-6 right-6 rounded-xl bg-green-400 p-3">
                <Icon name={'add'} size={24} color={'white'} />
            </TouchableOpacity>


            {/* KONTEN */}
            <View className="container">
                <FlatList
                    data={todos}
                    className="mb-16"
                    numColumns={1}
                    renderItem={({ item }) => MisiBerjalan(item)}

                />
            </View>




            {/*
        <Text className="text-3xl font-visbyHeavy">Misi a</Text>
        <Text className="text-3xl font-visbyExtraBold">Misi</Text>
        <Text className="text-3xl font-visbyBold">Misi Shop</Text>
        <Text className="text-3xl font-visbyMedium" style={{ fontFamily: "visbyMedium" }}>Misi</Text>
        <Text className="text-3xl font-visbyRegular">Misi</Text>
        <Text className="text-3xl font-visbyThin">Misi</Text> */}

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Mission

