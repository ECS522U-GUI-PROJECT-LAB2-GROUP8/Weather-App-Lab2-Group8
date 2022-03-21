import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import recommendationPage from '../screens/recommendationPage';

const { Navigator, Screen } = createStackNavigator();

export const SuggestionStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{headerShown: false}}
  >
    <Screen
      name='Suggestion'
      component={recommendationPage}
      //options={{ title: 'Suggestion Page' }}
    />
  </Navigator>
);

export default SuggestionStack;