import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Find use for this

import * as Font from 'expo-font'; // Import customised fonts
import { AppLoading } from 'expo'; // Used with importing fonts

/*Pages*/
import homePage from './screens/homePage';
import loginPage from './screens/loginPage';

/*Navigation Settings*/
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenContainer } from 'react-native-screens';
import { Button } from 'react-native-web';
import { TabRouter } from 'react-navigation';

//import Navigator from './routes/homeStack'; //NOT USED anymore

// Need to get font files first before doing this
/**
const getFonts = () => Font.loadAsync ({
 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});
*/

const Stack = createNativeStackNavigator();

export const HomeStack = createStackNavigator();
export const LoginStack = createStackNavigator();

const HomePageScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Home" component={homePage} />
  </LoginStack.Navigator>
)

export const LoginPageScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={loginPage} />
  </LoginStack.Navigator>
)

/* NOT USED
const loginpage = ( {navigation} ) => {
  return (
      <View>
          <Text>LOOOOOOOOL</Text>
      </View>
  );
}
*/

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePageScreen}/>
        <Stack.Screen name="ToLoginPage" component={LoginPageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;