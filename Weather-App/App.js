import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Find use for this

import * as Font from 'expo-font'; // Import customised fonts
import { AppLoading } from 'expo'; // With importing fonts

//import Home from './screens/home';
import Navigator from './routes/homeStack';

// Need to get files first before doing this
/**
const getFonts = () => Font.loadAsync ({
 'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});
*/

export default function App() {
  return (
    //<Navigator/>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!!!n!</Text>
      <StatusBar style="auto" />
    </View>
  );
    //<View style={styles.container}>
    //  <Text>Open up App.js to start working on your app!</Text>
    //  <StatusBar style="auto" />
    //</View>
    /*
    const [fontsLoaded, setFontsLoaded] = useState(false);
      if(fontsLoaded){
        return (
          <Navigator /
        );
       } else {
        return (
          <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded (true)}
    */
  
}


