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
                console.log("===================================================================================================================================")
                //Temperature right now 
                var tempValue = data['main']['temp']
                setTemp(Math.round(tempValue))  

                //Weather Status
                setWeatherType(data['weather']['0']['main'])
                const weatherID = data['weather']['0']['id']
                if (weatherID === 800) {                                //Clear: 800
                    setIcon('https://i.imgur.com/vS6lWXt.png'); //console.log("Cloudy")
                } else if ( weatherID >= 200 && weatherID < 300 ) {     //Thunderstorm: 2xx
                    setIcon('https://i.imgur.com/5TLF554.png'); //console.log("Thunderstorm")
                } else if ( weatherID >= 300 && weatherID < 600 ) {     //Drizzle/Rain: 3xx, 5xx
                    setIcon('https://i.imgur.com/8XxXEbo.png'); //console.log("Drizzle/Rain")
                } else if ( weatherID >= 600 && weatherID < 700 ) {     //Snow: 6xx
                    setIcon('https://i.imgur.com/gs1CjgM.png'); //console.log("Drizzle/Rain")
                } else if ( weatherID >= 700 && weatherID < 800 ) {     //Atmosphere: 7xx
                    setIcon('https://i.imgur.com/NTr6AsO.png'); //console.log("Cloudy")
                } else if ( weatherID > 800) {                          //Cloudy: 8xx
                    setIcon('https://i.imgur.com/JdvzIwe.png'); //console.log("Drizzle/Rain")
                }
         })
        }
      }
    
    /**Icon useStates */
    const [day0, setDay0] = useState('')

    /*Temp Usestates */ /*[MAX TEMP]*/
    const [temp0, setTemp0] = useState('')
    const [temp1, setTemp1] = useState('')
    const [temp2, setTemp2] = useState('')
    const [temp3, setTemp3] = useState('')
    const [temp4, setTemp4] = useState('')
    const [temp5, setTemp5] = useState('')
    const [temp6, setTemp6] = useState('')

    //Fetching forecase data (7-Day)
    const fetchForecastData = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {
            //Get next 7 days UNIX 
            var day00 = data['daily']['0']['dt']


            //Get next 7 days MaxTemp
            var temp00 = data['daily']['0']['temp']['max']
            var temp11 = data['daily']['1']['temp']['max']
            var temp22 = data['daily']['2']['temp']['max']
            var temp33 = data['daily']['3']['temp']['max']
            var temp44 = data['daily']['4']['temp']['max']
            var temp55 = data['daily']['5']['temp']['max']
            var temp66 = data['daily']['6']['temp']['max']
 
            
            setTemp0(Math.round(temp00))
            setTemp1(Math.round(temp11))
            setTemp2(Math.round(temp22))
            setTemp3(Math.round(temp33))
            setTemp4(Math.round(temp44))
            setTemp5(Math.round(temp55))
            setTemp6(Math.round(temp66))


            console.log(data)

            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            console.log(days[(new Date(day00 * 1000)).getUTCDay()])
            console.log((new Date(day00 * 1000)))
            // var dayZero = new Date()    //Mon
            // console.log(dayZero)
            // setDay0(dayZero)

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
                            <Text style={tempDaily.container} >{temp0}°C</Text>
                            <Image source={ require('../icons/sun_icon.png') } style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Mon</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp1}°C</Text>
                            <Image source={ require('../icons/partial_sun_and_cloud_icon.png') } style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Tue</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp2}°C</Text>
                            <Image source={ require('../icons/cloud_icon.png') } style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Wed</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp3}°C</Text>
                            <Image source={ require('../icons/cloud_with_rain_icon.png') } style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Thu</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp4}°C</Text>
                            <Image source={ require('../icons/thunder_icon.png') } style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Fri</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp5}°C</Text>
                            <Image source={ require('../icons/sunny_with_fog_icon.png') } style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Sat</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp6}°C</Text>
                            <Image source={ require('../icons/snow_icon.png') }style={{width:30, height:30}}></Image>
                            <Text style={textDay.container} >Sun</Text>
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
        minHeight: 120,
        marginTop: 100 ,
        marginRight: '8%',
        marginLeft: '8%',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
    }
})

const individualDay = StyleSheet.create({
    container: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: 20 ,
    }
})

const textDay = StyleSheet.create({
    container: {
        color: 'white',
        marginTop: 10
    }
})
const tempDaily = StyleSheet.create({
    container: {
        color: 'white',
        marginBottom: 10
    }
})



export default HomePage;