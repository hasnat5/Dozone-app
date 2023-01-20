import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useLayoutEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HomeScreen } from './screens/HomeScreen'
import Mission from './screens/Mission'
import Profile from './screens/Profile'
import { Shop } from './screens/Shop'

//screen name
const homeName = 'Home'
const missionName = 'Mission'
const shopName = 'Shop'
const profileName = 'Profile'


const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                // tabBarActiveTintColor: 'blue',
                tabBarLabelStyle: { fontSize: 12, paddingBottom: 6 },
                tabBarStyle: {
                    height: 56,
                },

                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = 'home'
                    } else if (rn === missionName) {
                        iconName = 'assignment'
                    } else if (rn === shopName) {
                        iconName = 'store'
                    } else if (rn === profileName) {
                        iconName = 'person'
                    }


                    return (
                        <Icon name={iconName} size={size} color={color} />
                    )

                },
            })}
        >


            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={missionName} component={Mission} />
            <Tab.Screen name={shopName} component={Shop} />
            <Tab.Screen name={profileName} component={Profile} />

        </Tab.Navigator>


    )
}

export default MainContainer