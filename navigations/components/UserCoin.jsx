import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const UserCoin = (props) => {

    return (
        <View className="flex-row items-center px-2 rounded-md bg-white">
            <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'rgb(251, 191, 36)'} />
            <Text className="font-bold text-sm">{props.poin}</Text>
        </View>
    )
}
