import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, View, Keyboard, TouchableOpacity } from 'react-native'
import { firebase } from '../../config'
import { Icon } from 'react-native-vector-icons/MaterialIcons'


export const TestingCrud = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const todoRef = firebase.firestore().collection('todos');
    const [addData, setAddData] = useState('');

    //fetch or read the data from firestore

    useEffect(() => {
        todoRef
            .orderBy('createdAt', 'decs')
            .onSnapshot(
                querySnapshot => {
                    const todos = []
                    querySnapshot.forEach(doc => {
                        const { heading } = doc.data()
                        todos.push({
                            id: doc.id,
                            heading,
                        })
                    })
                    setTodos(todos)
                }
            )

    }, [])



    //add a todo
    const addTodo = () => {
        //check if we have a todo
        if (addData && addData.length >= 0) {
            //get the timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                heading: 'tanpa ac 3 hari',
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


    const wadah = (item) => {
        <View >
            <Icon onPress={() => deleteTodo(item)} name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />

            <View className="items-center flex-col ml-11">
                <Text className="text-black font-bold text-lg mr-6">
                    {/* {item.heading[0].toUpperCase() + item.heading.slice(1)} */}
                    {item.heading}
                </Text>
            </View>
        </View>
    }

    return (


        <View className="flex">
            <View className="flex-row h-20 mx-3 mt-6">
                <TextInput
                    className="h-12 rounded overflow-hidden bg-white pl-4 flex-1 mr-1"
                    placeholder='add a new todo'
                    onChangeText={(heading) => setAddData(heading)}
                    value={addData}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />

                <TouchableOpacity className="h-12 rounded bg-blue-600 w-20 items-center justify-center" onPress={addTodo}>
                    <Text className="text-white text-xl">Add</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={todos}
                numColumns={1}
                renderItem={({ item }) => wadah(item)}
            />

            <TouchableOpacity className="h-12 rounded bg-violet-500 items-center justify-center" onPress={addTodo}>
                <Text className="text-white text-xl">3 Hari tanpa Ac</Text>
            </TouchableOpacity>

            <TouchableOpacity className="h-12 rounded bg-pink-400 mt-6 items-center justify-center" onPress={addTodo}>
                <Text className="text-white text-xl">Sehari tanpa kendaraan pribadi</Text>
            </TouchableOpacity>

        </View >

    )
}


// export const TestingCrud = () => {
//     const [todos, setTodos] = useState([]);
//     const todoRef = firebase.firestore().collection('todos');
//     const [addData, setAddData] = useState('');


//     //fetch or read the data from firestore
//     useEffect(() => {
//         todoRef
//             .orderBy('creatAt', 'desc')
//             .onSnapshot(
//                 querySnapshot => {
//                     const todos = []
//                     querySnapshot.forEach((doc) => {
//                         const { heading } = doc.data()
//                         todos.push({
//                             id: doc.id,
//                             heading,
//                         })
//                     })
//                     setTodos(todos)
//                 }
//             )

//     }, [])

//     //delete a todo from firestore db
//     const deleteTodo = (todos) => {
//         todoRef
//             .doc(todos.id)
//             .delete()
//             .then(() => {
//                 //show a successful alert
//                 alert("Deleted Successfully")
//             })
//             .catch(error => {
//                 alert(error)
//             })
//     }

//     //add a todo
//     const addTodo = () => {
//         //check if we have a todo
//         if (addData && addData.length > 0) {
//             //get the timestamp
//             const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//             const data = {
//                 heading: addData,
//                 createdAt: timestamp
//             };
//             todoRef
//                 .add(data)
//                 .then(() => {
//                     setAddData('');
//                     //release keyboard
//                     Keyboard.dismiss();
//                 })
//                 .catch((error) => {
//                     alert(error);
//                 })
//         }
//     }

//     return (
//         <View className="flex">
//             <View className="flex-row h-20 mx-3 mt-24">
//                 <TextInput
//                     className="h-12 rounded overflow-hidden bg-white pl-4 flex-1 mr-1"
//                     placeholder='add a new todo'
//                     onChangeText={(heading) => setAddData(heading)}
//                     value={addData}
//                     underlineColorAndroid='transparent'
//                     autoCapitalize='none'
//                 />

//                 <Touchable className="h-12 rounded bg-blue-600 w-20 items-center justify-center" onPress={addTodo}>
//                     <Text className="text-white text-xl">Add</Text>
//                 </Touchable>
//             </View>

//             <FlatList
//                 data={todos}
//                 numColumns={1}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Icon onPress={() => deleteTodo(item)} name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />

//                         <View className="items-center flex-col ml-11">
//                             <Text className="font-bold text-lg mr-6">
//                                 {item.heading[0].toUpperCase() + item.heading.slice(1)}
//                             </Text>
//                         </View>
//                     </View>
//                 )} />
//         </View>
//         // <Text>testing crud</Text>
//     )
// }