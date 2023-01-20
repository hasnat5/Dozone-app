import React, { useLayoutEffect } from 'react'
import { Button, ScrollView, StatusBar, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Shop = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <SafeAreaView>
            <ScrollView className="container grid">
                <Text className="text-teal-400 text-4xl">Ini shop</Text>
                <Button
                    title="Go back to first screen in stack"
                    onPress={() => navigation.navigate('Home')}
                />

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    )
}
