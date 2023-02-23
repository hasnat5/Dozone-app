import React, { useLayoutEffect, useState } from 'react'
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';
import { BASE_URL } from '../../config';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/Ionicons';

const Register = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    async function register() {
        try {
            const response = await axios.post(`${BASE_URL}register/`, {
                name,
                phone,
                email,
                password
            })
            console.log(response.data)
            Alert.alert('Daftar Berhasil')
            navigation.navigate('Login')

        }
        catch (error) {
            console.log(`daftar gagal ${error}`)
            Alert.alert('daftar gagal')
        }
    }


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
                <Text className="font-visbyBold text-2xl mb-6">Register</Text>

                <View className="mb-4">
                    <TextInput label="Username" variant='outlined' value={name} onChangeText={(text) => setName(text)} />
                </View>

                <View className="mb-4">
                    <TextInput label="Phone number" variant='outlined' value={phone} onChangeText={(text) => setPhone(text)} />
                </View>

                <View className="mb-4">
                    <TextInput label="Email" variant='outlined' value={email} onChangeText={(text) => setEmail(text)} />
                </View>

                <View className="mb-4">
                    <TextInput label="Password" variant='outlined' value={password} onChangeText={(text) => setPassword(text)} />
                </View>

                <TouchableOpacity className="bg-[#2E8B7A] py-2 rounded-xl mb-6" onPress={register}>
                    <Text className="text-center font-visbyBold text-base text-white">Register</Text>
                </TouchableOpacity>

                {/* <Text className='text-center font-visbyBold text-base mb-4'>Or</Text>

                <View className="flex-row justify-center gap-6 mb-4">
                    <Icon className="text-gray-400" name={'logo-google'} size={24} color={'#949494'} />
                    <Icon className="text-gray-400" name={'logo-facebook'} size={24} color={'#949494'} />

                </View> */}

                <Text className="font-visbyBold text-center text-xs">Already have an account?
                    <Text className="text-[#2E8B7A]" onPress={() => navigation.navigate('Login')}> Sign In</Text>
                </Text>

            </View>

            <StatusBar style="light" />

        </SafeAreaView>
    )
}

export default Register