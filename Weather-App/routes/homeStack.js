import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../screens/homePage';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{headerShown: false}}
  >
    <Screen
      name='Home'
      component={HomePage}
      //options={{ title: 'Home Page' }}
    />
  </Navigator>
);

export default HomeStack;