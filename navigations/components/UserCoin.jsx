import React, { useContext, useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { BASE_URL, firebase } from '../../config'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';


export const UserCoin = (props) => {
    // const [poin, setPoin] = useState(null);

    // const { userInfo } = useContext(AuthContext)


    //fetch or read the data from firestore
    // useEffect(() => {
    //     getInfo()
    // }, [])


    // async function getInfo() {
    //     try {
    //         const response = await axios.get(`${BASE_URL}user/`
    //         )
    //         console.log(response.data)
    //         setPoin(response.data.poin)

    //     } catch (error) {
    //         Alert.alert('poin gagal terambil')
    //         console.error(error);
    //     }
    // }


    return (
        <View className="flex-row items-center px-2 rounded-md bg-white">
            <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'rgb(251, 191, 36)'} />
            {/* <Text className="font-visbyBold text-sm">{coin}</Text> */}
            <Text className="font-visbyBold text-sm">{props.poin}</Text>
        </View>
    )
}
