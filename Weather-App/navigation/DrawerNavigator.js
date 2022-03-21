import 'react-native-gesture-handler'; // MUST BE TOP
import * as React from 'react';
import { MaterialIcons} from '@expo/vector-icons';

/*Pages*/
import homePage from '../screens/homePage';
import loginPage from '../screens/loginPage';
import recommendationPage from '../screens/recommendationPage';
import settingsPage from '../screens/settingsPage';
import signUp from '../screens/signUp';
import wardrobePage from '../screens/wardrobePage';

/* Stacks, for drawer navigator to choose */
import HomeStack from '../routes/homeStack';
import SuggestionStack from '../routes/suggestionStack';
import DaysAheadStack from '../routes/daysAheadStack';
import WardrobeStack from '../routes/wardrobeStack';
import LoginStack from '../routes/loginStack';

/*Navigation Settings*/
import { createStackNavigator } from '@react-navigation/stack';
  //import { createNativeStackNavigator } from '@react-navigation/native-stack';

// For navigation bar
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { ScreenContainer } from 'react-native-screens';
import { Button } from 'react-native-web';
import { TabRouter } from 'react-navigation';

/* NAV BAR */
const {Navigator, Screen} = createDrawerNavigator();

export const RootDrawerNavigator = () => (
    <Navigator initialRouteName="HomeScreen">
      <Screen
        name="HomeScreen"
        component={HomeStack}
        options={{ drawerLabel: 'Home'}}
      />
      <Screen
        name="SuggestionsScreen"
        component={SuggestionStack}
        options={{ drawerLabel: 'Suggestions' }}
      />
      <Screen
        name="DaysAheadScreen"
        component={DaysAheadStack}
        options={{ drawerLabel: 'Days Ahead' }}
      />
      <Screen
        name="WardrobeScreen"
        component={WardrobeStack}
        options={{ drawerLabel: 'Wardrobe'}} 
      />
      <Screen
        name="LoginScreen"
        component={LoginStack}
        options={{ drawerLabel: 'Login'}} 
      />
    </Navigator>
  )

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator/>
  </NavigationContainer>
)

export default AppNavigator;
