import 'react-native-gesture-handler'; // MUST BE TOP
import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, View } from 'react-native';


/*Pages*/
import homePage from '../screens/homePage';
import loginPage from '../screens/loginPage';
import recommendationPage from '../screens/recommendationPage';
import settingsPage from '../screens/settingsPage';
import signUp from '../screens/signUp';
import wardrobePage from '../screens/wardrobePage';

/*Navigation Settings*/
import { createStackNavigator } from '@react-navigation/stack';

// For navigation bar
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
  // import { ScreenContainer } from 'react-native-screens';
  // import { Button } from 'react-native-web';
  // import { TabRouter } from 'react-navigation';

const HomeStack = createStackNavigator();
const SuggestionStack = createStackNavigator();
const DaysAheadStack = createStackNavigator();
const WardrobeStack = createStackNavigator();
const LoginStack = createStackNavigator();

/*Navigation rendering function components*/ 

const HomePageScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <HomeStack.Screen name="Home" component={homePage} />
  </HomeStack.Navigator>
)

const SuggestionPageScreen = () => (
  <SuggestionStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <SuggestionStack.Screen name="Suggestion" component={recommendationPage} />
  </SuggestionStack.Navigator>
)

const DaysAheadPageScreen = () => (
  <DaysAheadStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <DaysAheadStack.Screen name="Days Ahead" component={homePage} />
  </DaysAheadStack.Navigator>
)

const WardrobePageScreen = () => (
  <WardrobeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <WardrobeStack.Screen name="Wardrobe" component={wardrobePage} />
  </WardrobeStack.Navigator>
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
    <Drawer.Navigator 
      screenOptions={{headerTransparent: true, headerTitle: () => null }} 
      initialRouteName="Home" 
      drawerContent={props => <CustomDrawer {...props}/>}>
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
        name="WardrobeScreen"
        component={WardrobePageScreen}
        options={{ drawerLabel: 'Wardrobe' }}
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
