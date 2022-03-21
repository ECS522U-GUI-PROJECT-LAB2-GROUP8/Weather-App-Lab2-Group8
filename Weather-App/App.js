import React, {useState} from 'react';
import { View, Text } from 'react-native';

import * as Font from 'expo-font'; // Import customised fonts
import AppLoading from 'expo-app-loading'; // Used with importing fonts

/* IMPORTS */
import { globalStyles } from './styles/global';
import { AppNavigator } from './navigation/DrawerNavigator';

/*Navigation Settings*/

import { NavigationContainer } from '@react-navigation/native';


// Font function
const getFonts = () => Font.loadAsync({
    'RobotoMono-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
});


export default function App() {
  const [fontsLoaded, setsFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <AppNavigator/>
    );
  } else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=>setsFontsLoaded(true)}
        onError={() => console.log('error')}
      />
    )
  }