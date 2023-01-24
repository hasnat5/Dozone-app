import React from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import hasnatDev from '../../assets/hasnat_dev.jpg'
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const AboutDev = () => {
    return (
        <ScrollView>
            <View className='bg-white container mx-auto px-8'>

                <Text className="font-visbyBold text-3xl text-green-400 my-3">Hasnat Ferdiananda</Text>
                <Text className="text-base mb-4">Tech Enthusiast (Student / Developer / Weeb)</Text>
                <Image source={hasnatDev} className="w-24 h-24 self-center rounded-full" />

                {/* ABOUT ME */}
                <View>
                    <Text className="font-visbyBold text-xl underline my-4 text-green-400">About Me</Text>
                    <View className='indent-4 gap-4 text-quaternary'>
                        <Text className="font-visbyMedium text-base text-justify">
                            The 11th grade high school student from Indonesia.
                        </Text>
                        <Text className="font-visbyMedium text-base text-justify">
                            I am a technology developer and action figure enthusiast who always wants to learn more about the latest technology and how to use it to solve problems.
                        </Text>
                        <Text className="font-visbyMedium text-base text-justify">
                            Have experience as a frontend developer at <Text onPress={() => Linking.openURL('https://www.cobadulu.academy')} className='text-blue-700'>codadulu.academy</Text> startup and I am very eager to start building my professional career in the workplace. I have a particular interest in web application development.
                        </Text>
                    </View>
                </View>

                {/* FAVORITE */}
                <View>
                    <Text className='font-visbyBold text-xl underline text-green-400 my-4'>I ♥</Text>
                    <Text className='font-visbyMedium text-base indent-4 text-justify text-quaternary'>
                        <Text onPress={() => Linking.openURL('https://www.netflix.com/id/title/80182123')} className='font-visbyMedium text-blue-700' >Anime</Text>, Skateboarding, Action figure, Diecast, Playing Penspinning
                    </Text>
                </View>

                {/* LINKING */}
                <View className='mb-4'>
                    <Text className='font-visbyBold text-xl underline my-4 text-green-400'>Social</Text>
                    <Pressable onPress={() => Linking.openURL('https://github.com/hasnat5')}>
                        <View className='pl-4 flex-row items-center h-10'>
                            <Icon name='logo-github' size={24} color={'rgb(74, 222, 128)'} />
                            <Text className="text-base ml-2 text-green-400">@hasnat5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/hasnatf')} >
                        <View className='pl-4 flex-row items-center h-10'>
                            <Icon name='logo-linkedin' size={24} color={'rgb(74, 222, 128)'} />
                            <Text className="text-base ml-2 text-green-400">@hasnatf</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL('https://www.instagram.com/hasnat5_/')}>
                        <View className='pl-4 flex-row items-center h-10'>
                            <Icon name='logo-instagram' size={24} color={'rgb(74, 222, 128)'} />
                            <Text className="text-base ml-2 text-green-400">@hasnat5_</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@hasnat5_')}>
                        <View className='pl-4 flex-row items-center h-10'>
                            <Icon name='logo-youtube' size={24} color={'rgb(74, 222, 128)'} />
                            <Text className="text-base ml-2 text-green-400">@hasnat5_</Text>
                        </View>
                    </Pressable>
                </View>

            </View >
        </ScrollView>
    )
}

export default AboutDev