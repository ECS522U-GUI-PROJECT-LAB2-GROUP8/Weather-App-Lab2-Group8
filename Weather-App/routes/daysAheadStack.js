import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DaysAheadPage from '../screens/daysAheadPage';

const { Navigator, Screen } = createStackNavigator();

export const DaysAheadStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{headerShown: false}}
  >
    <Screen
      name="DaysAhead" 
      component={DaysAheadPage}
      //options={{ title: 'Home Page' }}
    />
  </Navigator>
);

export default DaysAheadStack;