import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './MainContainer';
import { MissionList } from './screens/MissionList';
import { TestingCrud } from './screens/TestingCrud';
import AboutDev from './screens/AboutDev';

const AppStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Main" >
            <Stack.Screen name="Main" component={MainContainer} />
            <Stack.Screen
                name="MissionList"
                component={MissionList}
                options={{
                    title: 'Daftar Misi',
                }} />
            <Stack.Screen name="TestingCrud" component={TestingCrud} />
            <Stack.Screen name="About" component={AboutDev} />
        </Stack.Navigator>
    )
}

export default AppStack