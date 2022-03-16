import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Find use for this

import * as Font from 'expo-font'; // Import customised fonts
import { AppLoading } from 'expo'; // With importing fonts

//import Home from './screens/home';
import Navigator from './routes/homeStack';

/*Pages*/
import HomeScreenPage from './screens/homePage';
import loginPage from './screens/loginPage';

/*Navigation Settings*/
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Need to get files first before doing this
/**
const getFonts = () => Font.loadAsync ({
 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});
*/

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen TESTING HERE</Text>
//     </View>
//   );
// }
const loginpage = ( {navigation} ) => {
  return (
      <View>
          <Text>LOOOOOOOOL</Text>
      </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!!!!!n!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={ HomeScreenPage } />
        <Stack.Screen name="Loginpage" component={ loginpage } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


