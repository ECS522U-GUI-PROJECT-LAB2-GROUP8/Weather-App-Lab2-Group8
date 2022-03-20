import 'react-native-gesture-handler'; // MUST BE TOP
import * as React from 'react';
import { StyleSheet, View } from 'react-native';


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
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { ScreenContainer } from 'react-native-screens';
import { Button } from 'react-native-web';
import { TabRouter } from 'react-navigation';

const HomeStack = createStackNavigator();
const SuggestionStack = createStackNavigator();
const DaysAheadStack = createStackNavigator();
const LoginStack = createStackNavigator();

/*Navigation rendering function components*/ 

const HomePageScreen = () => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <LoginStack.Screen name="Home" component={homePage} />
  </LoginStack.Navigator>
)

const SuggestionPageScreen = () => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <LoginStack.Screen name="Suggestion" component={recommendationPage} />
  </LoginStack.Navigator>
)

const DaysAheadPageScreen = () => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <LoginStack.Screen name="Days Ahead" component={homePage} />
  </LoginStack.Navigator>
)

const LoginPageScreen = () => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <LoginStack.Screen name="Login" component={loginPage} />
  </LoginStack.Navigator>
)

/* Navigation Drawer BAR */

const Drawer = createDrawerNavigator();
export function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerTransparent: true, headerTitle: "" }} initialRouteName="Home" drawerContent={props => <CustomDrawer {...props}/>}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomePageScreen}
        options={{ drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="SuggestionsScreen"
        component={SuggestionPageScreen}
        options={{ drawerLabel: 'Recommendation' }}
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

/*CSS Styling*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(4, 165, 255, 0.42)'
  }
})

/*Structure*/
 
const CustomDrawer = (props) => {
  return(
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle = {{
          }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

export default MyDrawer;
