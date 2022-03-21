import 'react-native-gesture-handler'; // MUST BE TOP
import * as React from 'react';

/* Stacks, for drawer navigator to choose */
import HomeStack from '../routes/homeStack';
import SuggestionStack from '../routes/suggestionStack';
import DaysAheadStack from '../routes/daysAheadStack';
import WardrobeStack from '../routes/wardrobeStack';
import LoginStack from '../routes/loginStack';

/*Navigation Settings*/
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
  // import { ScreenContainer } from 'react-native-screens';
  // import { Button } from 'react-native-web';
  // import { TabRouter } from 'react-navigation';

/* NAV BAR */
const {Navigator, Screen} = createDrawerNavigator();

export const RootDrawerNavigator = () => (
    <Navigator 
      initialRouteName="HomeScreen"
      screenOptions={{headerTransparent: true, headerTitle: () => null}}
    >
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