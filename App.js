import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import MissionList from './navigations/screens/MissionList';
import MainContainer from './navigations/MainContainer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    visbyHeavy: require('./assets/font/visbycf-heavy.otf'),
    visbyExtraBold: require('./assets/font/visbycf-extrabold.otf'),
    visbyBold: require('./assets/font/visbycf-bold.otf'),
    visbyMedium: require('./assets/font/visbycf-medium.otf'),
    visbyRegular: require('./assets/font/visbycf-regular.otf'),
    visbyThin: require('./assets/font/visbycf-thin.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare()
  }, [])

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Main" component={MainContainer} />
        <Stack.Screen name="MissionList" component={MissionList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
