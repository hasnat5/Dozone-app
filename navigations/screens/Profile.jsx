import React from 'react'
import { Alert, Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Linking } from 'react-native'

const Profile = () => {
    return (
        <SafeAreaView className="px-4">
            <View View className="flex-row justify-between py-4" >
                <Text className="font-visbyBold text-xl">Saya</Text>
            </View >

            <View className="p-">
                <View className="bg-white flex-row px-4 py-5 rounded-3xl mb-3">
                    <Image
                        className="self-center w-14 h-14 mr-3 rounded-full"
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <View className="justify-center">
                        <Text className="text-lg font-visbyBold">Hasnat Ferdiananda</Text>
                        <Text className="text-sm">hasnatferdiananda5@gmail.com</Text>
                    </View>
                </View>


                <View className="bg-white px-5 rounded-3xl">
                    <Text className="text-green-500 font- pt-4">TENTANG APLIKASI</Text>
                    <Pressable onPress={() => Linking.openURL('https://www.google.co.in/')} className="flex-row items-center gap-6 py-5">
                        <Icon className="text-gray-400" name={'share'} size={24} color={'#949494'} />
                        <Text className="font-visbyMedium text-base">Berbagi dengan teman</Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL('mailto:hasnatferdiananda5@gmail.com?subject=Feedback Dozone-app')} className="flex-row items-center gap-6 py-5">
                        <Icon className="text-gray-400" name={'create'} size={24} color={'#949494'} />
                        <Text className="font-visbyMedium text-base">Masukan</Text>
                    </Pressable>

                    <Pressable onPress={() => Alert.alert('Lisensi Button pressed')} className="flex-row items-center gap-6 py-5">
                        <Icon className="text-gray-400" name={'copyright'} size={24} color={'#949494'} />
                        <Text className="font-visbyMedium text-base">Lisensi open source</Text>
                    </Pressable>

                    <Pressable onPress={() => Alert.alert('Tentang Button pressed')} className="flex-row items-center gap-6 py-5">
                        <Icon name={'info'} size={24} color={'#949494'} />
                        <Text className="font-visbyMedium text-base">Tentang developer</Text>
                    </Pressable>

                    <Pressable onPress={() => Alert.alert('Keluar Button pressed')} className="flex-row items-center gap-6 py-5">
                        <Icon name={'logout'} size={24} color={'rgb(239, 68, 68)'} />
                        <Text className="text-red-500 font-visbyMedium text-base">Keluar</Text>
                    </Pressable>


                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile