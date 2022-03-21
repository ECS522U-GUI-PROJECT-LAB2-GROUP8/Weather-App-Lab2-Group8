import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WardrobePage from '../screens/wardrobePage';

const { Navigator, Screen } = createStackNavigator();

export const WardrobeStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{headerShown: false}}
  >
    <Screen
      name='Home'
      component={WardrobePage}
      //options={{ title: 'Home Page' }}
    />
  </Navigator>
);

export default WardrobeStack;