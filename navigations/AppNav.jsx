import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react'
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const AppNav = () => {
    const { isLoading, userInfo } = useContext(AuthContext);

    if (isLoading) {
        return (
            <View className='flex-1 justify-center items-center'>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {userInfo !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNav