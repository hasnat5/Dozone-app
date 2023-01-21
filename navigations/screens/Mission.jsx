import React, { useLayoutEffect } from 'react'
import { Text, StatusBar, View, Pressable, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Mission = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

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
            <Pressable onPress={() => navigation.navigate('MissionList')} className="absolute bottom-6 right-6 rounded-xl bg-white p-2 text-green-400">
                <Icon name={'add'} size={24} color={'rgb(74, 222, 128)'} />
            </Pressable>

            {/* KONTEN */}
            <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
                <View>
                    <View className="flex-row gap-[3px]">
                        <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                        <Text className="font-visbyBold text-sm text-amber-400 mb-1">500</Text>
                    </View>
                    <Text className="font-visbyMedium text-lg">Sehari tanpa AC</Text>
                </View>
                <View className="flex-row items-center gap-3">
                    <Text className="font-visbyMedium text-xl">21:09:17</Text>
                    <Pressable onPress={() => Alert.alert('cancel Button pressed')}>
                        <Icon name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />
                    </Pressable>
                </View>
            </View>

            <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
                <View>
                    <View className="flex-row gap-[3px]">
                        <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                        <Text className="font-visbyBold text-sm text-amber-400 mb-1">500</Text>
                    </View>
                    <Text className="font-visbyMedium text-lg">Sehari tanpa AC</Text>
                </View>
                <View className="flex-row items-center gap-3">
                    <Text className="font-visbyMedium text-xl">21:09:17</Text>
                    <Pressable onPress={() => Alert.alert('cancel Button pressed')}>
                        <Icon name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />
                    </Pressable>
                </View>
            </View>

            <View className="container bg-white rounded-3xl p-4 flex-row justify-between items-center mb-3">
                <View>
                    <View className="flex-row gap-[3px]">
                        <Icon name={'stars'} size={14} color={'rgb(251, 191, 36)'} />
                        <Text className="font-visbyBold text-sm text-amber-400 mb-1">500</Text>
                    </View>
                    <Text className="font-visbyMedium text-lg">Sehari tanpa AC</Text>
                </View>
                <View className="flex-row items-center gap-3">
                    <Text className="font-visbyMedium text-xl">21:09:17</Text>
                    <Pressable onPress={() => Alert.alert('cancel Button pressed')}>
                        <Icon name={'cancel'} size={24} color={'rgb(239, 68, 68)'} />
                    </Pressable>
                </View>
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