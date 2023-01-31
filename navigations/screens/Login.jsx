import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

export const Login = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="container h-full flex bg-[#075B5D] justify-between">
            <Image
                className="self-center w-2/3 h-[170px] mt-24"
                source={require('../../assets/login.png')}
            />

            <View className="bg-white h-fit px-9 py-8 rounded-t-[32px]">
                <Text className="font-visbyBold text-2xl mb-6">Login</Text>
                <View className="mb-4">
                    <TextInput label="email" variant='outlined' />
                </View>
                <View className="mb-4">

                    <TextInput label="password" variant='outlined' />
                </View>

                <TouchableOpacity className="bg-[#F7B11B] py-4 rounded-xl mb-6" onPress={() => navigation.navigate('Home')}>
                    <Text className="text-center font-visbyBold text-lg">Login</Text>
                </TouchableOpacity>

                <Text className='text-center font-visbyBold text-base mb-4'>Or</Text>

                <View className="flex-row justify-center gap-6 mb-4">
                    <Icon className="text-gray-400" name={'logo-google'} size={24} color={'#949494'} />
                    <Icon className="text-gray-400" name={'logo-facebook'} size={24} color={'#949494'} />

                </View>

                <Text className="font-visbyBold text-center text-base">Already have an account?
                    <Text className="text-[#F7B11B]"> Sign In</Text>
                </Text>

            </View>

            <StatusBar style="auto" />

        </SafeAreaView>

    )
}
