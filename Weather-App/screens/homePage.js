import  React, { useState, useEffect} from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';

/* NOTE TO READ 
NAVIGATION GUIDE:
    - Using const (which is like a variable for either holding a function or object) from App.js file by importing them with "import * from '../App.js' "
    - Navigation.Navigate('ToLoginPage') finds created screen "ToLoginPage" we created, see App.js file for this
        - Screen with that name uses component "LoginPageScreen" which is just a made function to navigate to Login page.
*/


/*API CONFIGURATION*/

const API_KEY = `06f97740da75d54620d2a816bf6c9051`;


const HomePage = () => {

    const [temp, setTemp] = useState([]);
    const [weatherType, setWeatherType] = useState()

    const fetchDataFromApi = (latitude, longitude) => {
        if(latitude && longitude) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(response => response.json()).then(data => {
              console.log(data)                             //Comment out once done
              var tempValue = data['main']['temp']
              setTemp(Math.round(tempValue))
              setWeatherType( data['weather']['0']['main'])
         })
        }
      }
  
    const loadForecast = async () => {
  
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        //fetchDataFromApi("40.7128", "-74.0060")
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});            //passing location details to
      fetchDataFromApi(location.coords.latitude, location.coords.longitude)

    }

    useEffect(() => {loadForecast()}, [])

  

    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
                <ScrollView>
                    <View style= {todaysWeather.container}>
                        <Text style={{fontSize:'50px', textAlign: 'center', color: 'white' }}>{temp- 273}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text> {weatherType} </Text>
                            <Text>XD</Text>
                        </View>
                    </View>
                    <View style={weekForeCastContainer.container}>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/sun_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>Mon</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/partial_sun_and_cloud_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>Tue</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/cloud_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>Wed</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/cloud_with_rain_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>Thu</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/thunder_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>Fri</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/sunny_with_fog_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>Sat</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/snow_icon.png') }style={{width:30, height:30}}></Image>
                            <Text>Sun</Text>
                        </View>
                    </View>
            </ScrollView>
        </LinearGradient>
       
    );
}


/*styling components*/ 

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 214, 0, 0.43)'
    }
})

const todaysWeather = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '30%',
        minHeight: '200',
        marginTop: '100px',
        marginRight: '35%',
        marginLeft: '35%',
    }
})

const weekForeCastContainer = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '84%', 
        minHeight: '300',
        marginTop: '300px' ,
        marginRight: '8%',
        marginLeft: '8%',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
    }
})

const individualDay = StyleSheet.create({
    container: {
        marginLeft: '3%',
        marginRight: '3%',
    }
})



export default HomePage;