import React, { useContext, useLayoutEffect } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../../context/AuthContext';

const Login = ({ navigation }) => {

    const { login } = useContext(AuthContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="container h-full flex bg-[#075B5D]">
            <View className='flex-grow justify-center'>
                <Image
                    className="self-center w-2/3 h-[171px]"
                    source={require('../../assets/image/login.png')}
                />
            </View>

            <View className="bg-white px-9 py-8 rounded-t-[32px] justify-end">
                <Text className="font-visbyBold text-2xl mb-6">Login</Text>
                <View className="mb-4">
                    <TextInput label="email" variant='outlined' />
                </View>

                <View className="mb-4">
                    <TextInput label="password" variant='outlined' />
                </View>

                <TouchableOpacity
                    className="bg-[#F7B11B] py-2 rounded-xl mb-6"
                    onPress={() => { login() }}
                >
                    <Text className="text-center font-visbyBold text-base">Login</Text>
                </TouchableOpacity>

                {/* <Text className='text-center font-visbyBold text-base mb-4'>Or</Text>

                <View className="flex-row justify-center gap-6 mb-4">
                    <Icon className="text-gray-400" name={'logo-google'} size={24} color={'#949494'} />
                    <Icon className="text-gray-400" name={'logo-facebook'} size={24} color={'#949494'} />

                </View> */}

                <Text className="font-visbyBold text-center text-xs">Dont have an account?
                    <Text className="text-[#F7B11B]" onPress={() => navigation.navigate('Register')}> Sign Up</Text>
                </Text>

            </View>

            <StatusBar style="light" />

        </SafeAreaView>

    )
}

export default Login
