import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font'; // Import customised fonts
import { AppLoading } from 'expo'; // Used with importing fonts

/* IMPORTS */
import { MyDrawer } from './navigation/DrawerNavigator';

/*Navigation Settings*/
import { NavigationContainer, StackActions } from '@react-navigation/native';



// Need to get font files first before doing this
/**
const getFonts = () => Font.loadAsync ({
 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});
*/

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;

/* Under navigation container, possibly later use
//const Stack = createNativeStackNavigator();

<Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePageScreen}/>
        <Stack.Screen name="ToLoginPage" component={LoginPageScreen}/>
      </Stack.Navigator>
*/