import React, { useLayoutEffect } from 'react'
import { Alert, FlatList, Image, Pressable, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        link: require('../../assets/product/vivid-forest-creek.png'),

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        link: require('../../assets/product/pabrik.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        link: require('../../assets/product/pabrik.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        link: require('../../assets/product/vivid-forest-creek.png'),
    },
];


const Item = ({ title, link }) => (
    <View className="flex-1 bg-white p-4 mx-2 my-2 rounded-3xl h-auto justify-between">
        <Text className="font-visbyBold text-lg mb-2">{title}</Text>
        <Image
            className="self-center w-24 h-20 mb-4"
            source={link}
        />
        <Pressable
            className="bg-green-400 px-4 py-2 rounded-xl"
            onPress={() => Alert.alert('Simple Button pressed')}
        >
            <Text className="font-visbyBold text-white text-sm text-center">Beli</Text>
        </Pressable>
    </View >
);

// const Item = ({ title }) => {
//     return (
//         <View className="flex-1 max-w-[50%] bg-green-300">
//             <Text>{title}</Text>
//             {/* <Button>{title}</Button> */}
//         </View>
//     );
// };


export const Shop = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <SafeAreaView className="px-2">
            <View View className="flex-row justify-between pt-4 pb-2 px-2" >
                <Text className="font-visbyBold text-xl">Shop</Text>
                <View className="flex self-center">
                    <View className="py-1 px-2 rounded-md bg-green-400">
                        <Text className="font-visbyBold">Air Mission</Text>
                    </View>
                </View>
            </View >

            <View className="container" >
                <FlatList
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
