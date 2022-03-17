import 'react-native-gesture-handler'; // MUST BE TOP
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Find use for this

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

// For navigation bar
import { createDrawerNavigator } from '@react-navigation/drawer';

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

/* NAV BAR */
function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen, implement js switch</Text>
    </View>
  );
}

function Suggestions() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Suggestion Screen, implement js switch</Text>
    </View>
  );
}

function DaysAhead() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Days ahead Screen, implement js switch</Text>
    </View>
  );
}

/*Navigation function*/
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Suggestions"
        component={Suggestions}
        options={{ drawerLabel: 'Suggestions' }}
      />
      <Drawer.Screen
        name="DaysAhead"
        component={DaysAhead}
        options={{ drawerLabel: 'Days Ahead' }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;