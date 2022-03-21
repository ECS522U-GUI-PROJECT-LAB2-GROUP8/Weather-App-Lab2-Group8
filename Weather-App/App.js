import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* IMPORTS */
import { MyDrawer } from './navigation/DrawerNavigator';

/*Navigation Settings*/
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

export default App;
