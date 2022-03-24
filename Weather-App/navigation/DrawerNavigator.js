import 'react-native-gesture-handler'; // MUST BE TOP
import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';

/*Pages*/
import homePage from '../screens/homePage';
import RecommendationPage from '../screens/recommendationPage';
import wardrobePage from '../screens/wardrobePage';
import daysAhead from '../screens/daysAhead';
import exampleImage from '../assets/tshirt.png';


/*Navigation Settings*/
import { createStackNavigator } from '@react-navigation/stack';

// For navigation bar
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// Context

/* Navigation Drawer BAR */
const Drawer = createDrawerNavigator();

export function MyDrawer() {

  return (
        <Drawer.Navigator 
        screenOptions={{headerTransparent: true, headerTitle: () => null }} 
        initialRouteName="Home" 
        drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen
          name="HomeScreen"
          component={homePage}
          options={{ drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="SuggestionsScreen"
          component={RecommendationPage}
          options={{ drawerLabel: 'Recommendation' }}
        />
        <Drawer.Screen
          name="DaysAheadScreen"
          component={daysAhead}
          options={{ drawerLabel: 'Days Ahead' }}
        />
        <Drawer.Screen
          name="WardrobeScreen"
          component={wardrobePage}
          options={{ drawerLabel: 'Wardrobe' }}
        />
      </Drawer.Navigator>
    
  );
}

/*CSS Styling*/

const styles = StyleSheet.create({    //NAV BAR STYLING
  container: {
    flex: 1,
    backgroundColor: 'rgba(4, 165, 255, 0.42)'
    
  }
})

/*Structure*/
 
const CustomDrawer = (props) => {
  return(
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle = {{
          }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

export default MyDrawer;
