import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../screens/loginPage';

const { Navigator, Screen } = createStackNavigator();

export const LoginStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{headerShown: false}}
  >
    <Screen
      name='Login'
      component={LoginPage}
      //options={{ title: 'Login Page' }}
    />
  </Navigator>
);

export default LoginStack;