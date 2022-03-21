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

    //Todays temp Hook
    const [temp, setTemp] = useState([]);
    const [weatherType, setWeatherType] = useState()
    const [icon, setIcon] = useState('')

    //Fetch data from API
    const fetchDataFromApi = (latitude, longitude) => {
        if(latitude && longitude) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {
                console.log(data)                             //Comment out once done
                //Temperature right now 
                var tempValue = data['main']['temp']
                setTemp(Math.round(tempValue))  

                //Weather Status
                setWeatherType(data['weather']['0']['main'])
                const weatherID = data['weather']['0']['id']
                if (weatherID === 800) {                                //Clear: 800
                    setIcon('https://i.imgur.com/vS6lWXt.png'); console.log("Cloudy")
                } else if ( weatherID >= 200 && weatherID < 300 ) {     //Thunderstorm: 2xx
                    setIcon('https://i.imgur.com/5TLF554.png'); console.log("Thunderstorm")
                } else if ( weatherID >= 300 && weatherID < 600 ) {     //Drizzle/Rain: 3xx, 5xx
                    setIcon('https://i.imgur.com/8XxXEbo.png'); console.log("Drizzle/Rain")
                } else if ( weatherID >= 600 && weatherID < 700 ) {     //Snow: 6xx
                    setIcon('https://i.imgur.com/gs1CjgM.png'); console.log("Drizzle/Rain")
                } else if ( weatherID >= 700 && weatherID < 800 ) {     //Atmosphere: 7xx
                    setIcon('https://i.imgur.com/NTr6AsO.png'); console.log("Drizzle/Rain")
                } else if ( weatherID > 800) {                          //Cloudy: 8xx
                    setIcon('https://i.imgur.com/JdvzIwe.png'); console.log("Drizzle/Rain")
                }
         })
        }
      }
    
    const [day0, setDay0] = useState('')

    //Fetching forecase data (7-Day)
    const fetchForecastData = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {
            console.log(data)
            var dayZero = new Date(data['daily']['0']['dt'] * 1000).toLocaleString('en-GB', {weekday: 'short'})     //Mon
            console.log(dayZero)
            setDay0(dayZero)
        })
    }
  
    //Granting location permission
    const loadForecast = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        //fetchDataFromApi("40.7128", "-74.0060")
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({highAccuracy: true});            //passing location details 
      fetchDataFromApi(location.coords.latitude, location.coords.longitude)
      fetchForecastData(location.coords.latitude, location.coords.longitude)
    }

    useEffect(() => {loadForecast()}, [])

    //Colour Gradients
    const colourGradientDay = ["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]    //Day/sunny gradient

    return (
        <LinearGradient style={{flex: 1}} colors={colourGradientDay}>
                <ScrollView>
                    <View style= {todaysWeather.container}>
                        <Text style={{fontSize: 50, textAlign: 'center', color: 'white' }}>{temp}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 16.5, color: 'white'}}> {weatherType} </Text>
                            <Image source={{uri: icon} } style={{width:40, height:40, resizeMode: 'contain'}}></Image> 
                        </View>
                    </View>
                    <View style={weekForeCastContainer.container}>
                        <View style={individualDay.container}>
                            <Image source={ require('../icons/sun_icon.png') } style={{width:30, height:30}}></Image>
                            <Text>{day0}</Text>
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
        backgroundColor: ' rgba(0, 0, 0, 0)',
        width: '30%',
        minHeight: 200,
        marginTop: 100,
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
        minHeight: 300,
        marginTop: 300 ,
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