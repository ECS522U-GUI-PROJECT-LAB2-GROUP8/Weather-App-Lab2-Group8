import React from 'react';
import { View, Text } from 'react-native';

import * as Font from 'expo-font'; // Import customised fonts
import { AppLoading } from 'expo'; // Used with importing fonts

/* IMPORTS */
import { globalStyles } from './styles/global';
import { MyDrawer } from './navigation/DrawerNavigator';
import TestApp from './TestApp';

/*Navigation Settings*/
import { NavigationContainer, StackActions } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

/* Under navigation container, possibly later use
//const Stack = createNativeStackNavigator();

<Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePageScreen}/>
        <Stack.Screen name="ToLoginPage" component={LoginPageScreen}/>
      </Stack.Navigator>
*/

