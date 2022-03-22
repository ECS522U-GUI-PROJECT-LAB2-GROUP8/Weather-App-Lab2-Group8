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
                //console.log(data)                             //Comment out once done
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
    
    /**Day useStates */
    const [day0, setDay0] = useState('')
    const [day1, setDay1] = useState('')
    const [day2, setDay2] = useState('')
    const [day3, setDay3] = useState('')
    const [day4, setDay4] = useState('')
    const [day5, setDay5] = useState('')
    const [day6, setDay6] = useState('')

    //Icon change useStates
    const [dayIcon0, setDayIcon0] = useState('')
    const [dayIcon1, setDayIcon1] = useState('')
    const [dayIcon2, setDayIcon2] = useState('')
    const [dayIcon3, setDayIcon3] = useState('')
    const [dayIcon4, setDayIcon4] = useState('')
    const [dayIcon5, setDayIcon5] = useState('')
    const [dayIcon6, setDayIcon6] = useState('')

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
            var day11 = data['daily']['1']['dt']
            var day22 = data['daily']['2']['dt']
            var day33 = data['daily']['3']['dt']
            var day44 = data['daily']['4']['dt']
            var day55 = data['daily']['5']['dt']
            var day66 = data['daily']['6']['dt']

            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            setDay0(days[(new Date(day00 * 1000)).getUTCDay()])
            setDay1(days[(new Date(day11 * 1000)).getUTCDay()])
            setDay2(days[(new Date(day22 * 1000)).getUTCDay()])
            setDay3(days[(new Date(day33 * 1000)).getUTCDay()])
            setDay4(days[(new Date(day44 * 1000)).getUTCDay()])
            setDay5(days[(new Date(day55 * 1000)).getUTCDay()])
            setDay6(days[(new Date(day66 * 1000)).getUTCDay()])

            //Get weather id for next 7 days and change accordingly

            function iconStatus(weatherID) {
                if (weatherID === 800) {                                //Clear: 800
                    return ('https://i.imgur.com/vS6lWXt.png'); //console.log("Cloudy")
                } else if ( weatherID >= 200 && weatherID < 300 ) {     //Thunderstorm: 2xx
                    return('https://i.imgur.com/5TLF554.png'); //console.log("Thunderstorm")
                } else if ( weatherID >= 300 && weatherID < 600 ) {     //Drizzle/Rain: 3xx, 5xx
                    return('https://i.imgur.com/8XxXEbo.png'); //console.log("Drizzle/Rain")
                } else if ( weatherID >= 600 && weatherID < 700 ) {     //Snow: 6xx
                    return('https://i.imgur.com/gs1CjgM.png'); //console.log("Drizzle/Rain")
                } else if ( weatherID >= 700 && weatherID < 800 ) {     //Atmosphere: 7xx
                    return('https://i.imgur.com/NTr6AsO.png'); //console.log("Cloudy")
                } else if ( weatherID > 800) {                          //Cloudy: 8xx
                    return('https://i.imgur.com/JdvzIwe.png'); //console.log("Drizzle/Rain")
                }
            }      
        
            function iconStates () {
                setDayIcon0(iconStatus(data['daily']['0']['weather']['0']['id']))
                setDayIcon1(iconStatus(data['daily']['1']['weather']['0']['id']))
                setDayIcon2(iconStatus(data['daily']['2']['weather']['0']['id']))
                setDayIcon3(iconStatus(data['daily']['3']['weather']['0']['id']))
                setDayIcon4(iconStatus(data['daily']['4']['weather']['0']['id']))
                setDayIcon5(iconStatus(data['daily']['5']['weather']['0']['id']))
                setDayIcon6(iconStatus(data['daily']['6']['weather']['0']['id']))
            }
            iconStates()


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
                            <Image source={ {uri: dayIcon0} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day0}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp1}°C</Text>
                            <Image source={ {uri: dayIcon1} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day1}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp2}°C</Text>
                            <Image source={ {uri: dayIcon2} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day2}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp3}°C</Text>
                            <Image source={ {uri: dayIcon3} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day3}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp4}°C</Text>
                            <Image source={ {uri: dayIcon4} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day4}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp5}°C</Text>
                            <Image source={ {uri: dayIcon5} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day5}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp6}°C</Text>
                            <Image source={ {uri: dayIcon6}  }style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day6}</Text>
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