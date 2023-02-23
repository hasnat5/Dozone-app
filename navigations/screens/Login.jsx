import React, { useContext, useLayoutEffect, useState } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';
import { AuthContext } from '../../context/AuthContext';
// import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const { login } = useContext(AuthContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="container h-full flex bg-primary1 bg-[#D8F5E099]">
            <View className='flex-grow justify-center'>
                <Image
                    className="self-center w-36 h-36"
                    source={require('../../assets/image/dozone-logo.png')}
                />
            </View>

            <View className="bg-white px-9 py-8 rounded-t-[32px] justify-end">
                <Text className="font-visbyBold text-2xl mb-6">Login</Text>
                <View className="mb-4">
                    <TextInput label="user@gmail.com" variant='outlined' value={email} onChangeText={(text) => setEmail(text)} />
                </View>

                <View className="mb-4">
                    <TextInput label="***" variant='outlined' value={password} onChangeText={(text) => setPassword(text)} />
                </View>

                <TouchableOpacity
                    className="bg-primary2 bg-[#2E8B7A] py-2 rounded-xl mb-6"
                    onPress={() => { login(email, password) }}
                >
                    <Text className="text-center font-visbyBold text-base text-white">Login</Text>
                </TouchableOpacity>

                {/* <Text className='text-center font-visbyBold text-base mb-4'>Or</Text>

                <View className="flex-row justify-center gap-6 mb-4">
                    <Icon className="text-gray-400" name={'logo-google'} size={24} color={'#949494'} />
                    <Icon className="text-gray-400" name={'logo-facebook'} size={24} color={'#949494'} />

                </View> */}

                <Text className="font-visbyBold text-center text-xs">Dont have an account?
                    <Text className="text-primary2 text-[#2E8B7A]" onPress={() => navigation.navigate('Register')}> Sign Up</Text>
                </Text>

            </View>

            <StatusBar style="light" />

        </SafeAreaView>

    )
}

export default Login
