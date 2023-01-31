import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { firebase } from '../../config'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const UserCoin = () => {
    const [coin, setCoin] = useState();
    const coinRef = firebase.firestore().collection('userCoin');

    //fetch or read the data from firestore
    useEffect(() => {
        coinRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const coin = 15
                    querySnapshot.forEach(doc => {
                        const { coin } = doc.data()
                        coin.push({
                            id: doc.id,
                            coin,
                        })
                    })
                    setCoin(coin)
                }
            )

    }, [])


    return (
        <View className="flex-row items-center px-2 rounded-md bg-white">
            <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'rgb(251, 191, 36)'} />
            <Text className="font-visbyBold text-sm">{coin}</Text>
        </View>
    )
}
