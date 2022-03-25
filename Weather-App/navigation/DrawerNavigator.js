import 'react-native-gesture-handler'; // MUST BE TOP
import  React, { useState, useEffect} from 'react';
import * as Location from 'expo-location';
import { StyleSheet, View } from 'react-native';

/*Pages*/
/* Pages and assets*/
import homePage from '../screens/homePage';
import RecommendationPage from '../screens/recommendationPage';
import WardrobePage from '../screens/wardrobePage';
import DaysAhead from '../screens/daysAhead';

/* For navigation bar */
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

/*API key*/
const API_KEY = `06f97740da75d54620d2a816bf6c9051`; 

const HomeStack = createStackNavigator();
const SuggestionStack = createStackNavigator();
const DaysAheadStack = createStackNavigator();
const WardrobeStack = createStackNavigator();

/*Navigation rendering function components*/ 

const HomePageScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <HomeStack.Screen name="Home" component={homePage} />
  </HomeStack.Navigator>
)

const SuggestionPageScreen = () => (
  <SuggestionStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <SuggestionStack.Screen name="Suggestion" component={recommendationPage} />
  </SuggestionStack.Navigator>
)

const DaysAheadPageScreen = () => (
  <DaysAheadStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <DaysAheadStack.Screen name="Days Ahead" component={daysAhead} />
  </DaysAheadStack.Navigator>
)

const WardrobePageScreen = () => (
  <WardrobeStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <WardrobeStack.Screen name="Wardrobe" component={wardrobePage} />
  </WardrobeStack.Navigator>
)

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
        component={HomePageScreen}
        options={{ drawerLabel: 'Home', drawerActiveTintColor: 'white', drawerInactiveTintColor: 'white'}}
      />
      <Drawer.Screen
        name="SuggestionsScreen"
        component={SuggestionPageScreen}
        options={{ drawerLabel: 'Recommendation', drawerActiveTintColor: 'white', drawerInactiveTintColor: 'white' }}
        
      />
      <Drawer.Screen
        name="DaysAheadScreen"
        component={DaysAheadPageScreen}
        options={{ drawerLabel: 'Days Ahead', drawerActiveTintColor: 'white', drawerInactiveTintColor: 'white'}}
      />
      <Drawer.Screen
        name="WardrobeScreen"
        component={WardrobePageScreen}
        options={{ drawerLabel: 'Wardrobe', drawerActiveTintColor: 'white', drawerInactiveTintColor: 'white'}}
      />
    </Drawer.Navigator>
  );
}

/*Structure*/
const CustomDrawer = (props) => {

      /*Gradient state */
      const [grad, setGrad] = useState(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"])

      const fetchDataFromApi = (latitude, longitude) => {
        if(latitude && longitude) {
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {
          
        
            const sunRiseHour = new Date(data['current']['sunrise'] * 1000).getUTCHours();       //Get sunrise hour
            const sunSetHour = new Date(data['current']['sunset'] * 1000).getUTCHours();           //Get sunset hour
        
            const currentTimeHour = new Date().getUTCHours();         //Current time hour
            function gradientChange() {
                if ((currentTimeHour >= sunSetHour) || (currentTimeHour <= sunRiseHour)) {
                    setGrad(["rgba(52, 50, 189, 1)",  "rgba(113, 111, 233, 1)"])
                } else { setGrad(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"]); }
            }
            gradientChange()
            })
        }
      }
      const loadForecast = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          //fetchDataFromApi("40.7128", "-74.0060")
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({highAccuracy: true});            //passing location details 
        fetchDataFromApi(location.coords.latitude, location.coords.longitude)
      }
    
      useEffect(() => {loadForecast()}, [])

  return(
    <LinearGradient colors={grad} style={{flex:1}}>
      <DrawerContentScrollView {...props} contentContainerStyle = {{
          }}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </LinearGradient>
  )
}

export default MyDrawer;
