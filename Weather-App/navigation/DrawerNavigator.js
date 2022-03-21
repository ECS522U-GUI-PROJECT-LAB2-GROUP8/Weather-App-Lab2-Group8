import 'react-native-gesture-handler'; // MUST BE TOP
import * as React from 'react';
import { Text, View } from 'react-native';


/*Pages*/
import homePage from '../screens/homePage';
import loginPage from '../screens/loginPage';
import recommendationPage from '../screens/recommendationPage';
import settingsPage from '../screens/settingsPage';
import signUp from '../screens/signUp';

/*Navigation Settings*/
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

// For navigation bar
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ScreenContainer } from 'react-native-screens';
import { Button } from 'react-native-web';
import { TabRouter } from 'react-navigation';

const HomeStack = createStackNavigator();
const SuggestionStack = createStackNavigator();
const DaysAheadStack = createStackNavigator();
const LoginStack = createStackNavigator();

const HomePageScreen = () => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <LoginStack.Screen name="Home" component={homePage} />
  </LoginStack.Navigator>
)

const SuggestionPageScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Suggestion" component={recommendationPage} />
  </LoginStack.Navigator>
)

const DaysAheadPageScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Days Ahead" component={homePage} />
  </LoginStack.Navigator>
)

const LoginPageScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={loginPage} />
  </LoginStack.Navigator>
)

/* NAV BAR */

const Drawer = createDrawerNavigator();
export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="HomeScreen"
        component={HomePageScreen}
        options={{ drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="SuggestionsScreen"
        component={SuggestionPageScreen}
        options={{ drawerLabel: 'Suggestions' }}
      />
      <Drawer.Screen
        name="DaysAheadScreen"
        component={DaysAheadPageScreen}
        options={{ drawerLabel: 'Days Ahead' }}
      />
      <Drawer.Screen
        name="LoginScreen"
        component={LoginPageScreen}
        options={{ drawerLabel: 'Login'}} 
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
