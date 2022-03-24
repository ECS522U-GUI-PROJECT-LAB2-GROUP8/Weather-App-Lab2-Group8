import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Redux for storing states
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Store } from './redux/store/store';

/* IMPORTS */
import { MyDrawer } from './navigation/DrawerNavigator';

/*Navigation Settings*/
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    </Provider>
    
  );
}

export default App;
