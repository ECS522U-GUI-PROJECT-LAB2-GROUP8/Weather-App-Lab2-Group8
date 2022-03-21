import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons} from '@expo/vector-icons';

// Pages for home stack
import HomePage from '../screens/homePage';


const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return(
    <Navigator
    headerMode='screen'
    screenOptions={{headerShown: false}}
  >
    <Screen
      name='Home'
      component={HomePage}
      options={{ 
        //title: 'Home Page'
        headerLeft: () => (
          <MaterialIcons name="menu" size={28} color='black' onPress={openMenu}/>
        ),
        headerLeftContainerStyle: {paddingHorizontal: 20,}
      }}
    />
  </Navigator>
  )
  
};

export default HomeStack;