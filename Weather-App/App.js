import 'react-native-gesture-handler'; // MUST BE TOP
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*Pages*/
import homePage from './screens/homePage';
import loginPage from './screens/loginPage';
import recommendationPage from './screens/recommendationPage';
import settingsPage from './screens/settingsPage';
import signUp from './screens/signUp';

/*Navigation Settings*/
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenContainer } from 'react-native-screens';
import { Button } from 'react-native-web';
import { TabRouter } from 'react-navigation';

// For navigation bar
import { createDrawerNavigator } from '@react-navigation/drawer';

/*Stack Navigators (create)*/ 
export const HomeStack = createStackNavigator();
export const LoginStack = createStackNavigator();
export const Suggestion = createStackNavigator();

/*Navigation to pages*/
export const HomePageScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <HomeStack.Screen name="Home" component={homePage} />
  </HomeStack.Navigator>
)

export const LoginPageScreen = () => (
  <LoginStack.Navigator
    screenOptions = {{
      headerShown: false
    }}  
  >
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

/*Navigation Drawer function*/
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomePageScreen}
        options={{ drawerLabel: 'Home'}}

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
      <Drawer.Screen
        name="Login"
        component={LoginPageScreen}
        options={{ drawerLabel: 'Login'}} 
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