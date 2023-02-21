import React from 'react'
import { Alert, FlatList, Image, Pressable, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserCoin } from '../components/UserCoin';

const DATA = [
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Default',
        link: require('../../assets/product/cemara.png'),
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Dark',
        link: require('../../assets/product/default.png'),

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Autumn',
        link: require('../../assets/product/autumn.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Winter',
        link: require('../../assets/product/snow.png'),
    },
];


const Item = ({ title, link }) => (
    <View className="flex-1 bg-white p-4 mx-2 my-2 rounded-3xl h-auto justify-between">
        <Text className="font-visbyBold text-lg mb-2">{title}</Text>
        <Image
            className="self-center w-24 h-[85px] mb-4"
            source={link}
        />
        <Pressable
            className="bg-primary1 px-4 py-2 rounded-xl"
            onPress={() => Alert.alert('Simple Button pressed')}
        >
            <View className="flex-row justify-center px-2 rounded-md">
                <Icon style={{ marginRight: 4 }} name={'stars'} size={16} color={'#23695E'} />
                <Text className="font-visbyBold text-sm text-accent1">250</Text>
            </View>
        </Pressable>
    </View >
);


export const Shop = () => {

    return (
        <SafeAreaView className="px-2">
            <View View className="flex-row justify-between pt-4 pb-2 px-2" >
                <Text className="font-visbyBold text-xl">Shop</Text>
                <UserCoin />
            </View >

            <View className="container" >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    className="mb-28"
                    data={DATA}
                    numColumns={2}
                    renderItem={({ item }) => <Item link={item.link} title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>

            <StatusBar style="auto" />

        </SafeAreaView>
    )
}
