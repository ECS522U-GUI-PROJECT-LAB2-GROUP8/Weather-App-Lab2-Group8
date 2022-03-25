import  React, { useState, useEffect} from 'react';
import { View, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { TouchableOpacity } from 'react-native-gesture-handler';

/*API CONFIGURATION*/

const API_KEY = `06f97740da75d54620d2a816bf6c9051`;

const HomePage = ({navigation}) => {

    //Todays temp Hook
    const [temp, setTemp] = useState([]);
    const [weatherType, setWeatherType] = useState();
    const [icon, setIcon] = useState(' ');

    //Location and time
    const [location, setLocation] = useState(' ')
    const [feelsLike, setFeelsLike] = useState(' ')

    //Fetch data from API
    const fetchDataFromApi = (latitude, longitude) => {
        if(latitude && longitude) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {
                //console.log(data)                             //Comment out once done
                console.log("===================================================================================================================================")

                //Temperature right now 
                var tempValue = data['main']['temp'];
                setTemp(Math.round(tempValue));

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

                //Top section
                setLocation(data['name'])
                setFeelsLike(Math.round(data['main']['feels_like']))
         })
        }
      }
    /* 7 DAY FORECAST ================================================================================================================ */
    
    /**Day useStates */
    const [day0, setDay0] = useState(' ')
    const [day1, setDay1] = useState(' ')
    const [day2, setDay2] = useState(' ')
    const [day3, setDay3] = useState(' ')
    const [day4, setDay4] = useState(' ')
    const [day5, setDay5] = useState(' ')
    const [day6, setDay6] = useState(' ')

    //Icon change useStates
    const [dayIcon0, setDayIcon0] = useState(' ')
    const [dayIcon1, setDayIcon1] = useState(' ')
    const [dayIcon2, setDayIcon2] = useState(' ')
    const [dayIcon3, setDayIcon3] = useState(' ')
    const [dayIcon4, setDayIcon4] = useState(' ')
    const [dayIcon5, setDayIcon5] = useState(' ')
    const [dayIcon6, setDayIcon6] = useState(' ')

    /*Temp Usestates */ /*[MAX TEMP]*/
    const [temp0, setTemp0] = useState(' ')
    const [temp1, setTemp1] = useState(' ')
    const [temp2, setTemp2] = useState(' ')
    const [temp3, setTemp3] = useState(' ')
    const [temp4, setTemp4] = useState(' ')
    const [temp5, setTemp5] = useState(' ')
    const [temp6, setTemp6] = useState(' ')

    /*Humid, UV, and wind usestates */

    const [humidity, setHumidity] = useState(' ')
    const [UV, setUV] = useState(' ')
    const [wind, setWind] = useState(' ')

    /*Gradient state */
    const [grad, setGrad] = useState(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"])

    //Fetching forecase data (7-Day)
    const fetchForecastData = (latitude, longitude) => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {

            //Get next 7 days datetime in UNIX form
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

            //Get weather id for next 7 days and change accordingly and return the appropriate image via the function below

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


            //Get next 7 days [MAX-TEMP]
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

            
            //Humidity, UV, wind stats
            var humidityData = data['current']['humidity'];
            var UVData = data['current']['uvi'];
            var WindData = data['current']['wind_speed'];

            setHumidity(humidityData);
            setUV(UVData);
            setWind(WindData);

            const sunRiseHour = new Date(data['current']['sunrise'] * 1000).getUTCHours(); //console.log('Sunrise hour:', sunRiseHour)          //Get sunrise hour
            const sunSetHour = new Date(data['current']['sunset'] * 1000).getUTCHours(); //console.log('Sunset hour:', sunSetHour)           //Get sunset hour
            
            
            //Change background colour depending on day/night

            function gradientChange() {
                if ((currentTimeHour >= sunSetHour) || (currentTimeHour <= sunRiseHour)) {
                    setGrad(["rgba(52, 50, 189, 1)",  "rgba(113, 111, 233, 1)"])
                } else { setGrad(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"]) }
            }
            gradientChange()
                
            //console.log(data)
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
    const colourGradientDay = ["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"]    //Day/sunny gradient
    const colourGradientNight= ["rgba(52, 50, 189, 1)",  "rgba(113, 111, 233, 1)"]

    
    var timeHour = new Date().getHours()
    function timeHourBefore9 () {
        if (timeHour < 10) {
            return "0" + timeHour 
        }
        else { return timeHour }
    }
    var timeMin = new Date().getMinutes()
    function minuteHourBefore9 () {
        if (timeMin < 10) {
            return "0" + timeMin 
        }
        else { return timeMin }
    }

    //Navigation onPress handler
    const pressHandler = () => {
        navigation.navigate('SuggestionsScreen');
    }

    const currentTimeHour = new Date().getUTCHours();         //Current time hour
    


    /*OUTPUT============================================================================================================================ */
    return (
        <LinearGradient style={{flex: 1}} colors={grad}>
                <ScrollView>
                    <View style= {todaysWeather.container}>
                        <Text style={{fontSize: 50, textAlign: 'center', color: 'white' }}>{temp}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 16.5, color: 'white'}}> {weatherType} </Text>
                            <Image source={{uri: icon.toString()} } style={{width:40, height:40, resizeMode: 'contain'}}></Image> 
                        </View>
                    </View>
                    <View style={locationAndTime.container}>
                        <Text style={{color: 'white', fontSize: 20}}>{location}</Text>
                        <Text style={{color: 'white', marginTop: 10}}>Feels like {feelsLike}°C</Text>
                        <Text style={{color: 'white', marginTop: 5}}>{day0} {timeHourBefore9()}:{minuteHourBefore9()}</Text>
                    </View>
                    <View style={recommendationSection.container}>
                        <TouchableOpacity onPress={ pressHandler }>
                            <Text style={{color: 'white', textAlign: 'center'}}>What should I wear today</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={weekForeCastContainer.container}>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp0}°C</Text>
                            <Image source={ {uri: dayIcon0.toString()} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day0}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp1}°C</Text>
                            <Image source={ {uri: dayIcon1.toString()} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day1}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp2}°C</Text>
                            <Image source={ {uri: dayIcon2.toString()} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day2}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp3}°C</Text>
                            <Image source={ {uri: dayIcon3.toString()} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day3}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp4}°C</Text>
                            <Image source={ {uri: dayIcon4.toString()} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day4}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp5}°C</Text>
                            <Image source={ {uri: dayIcon5.toString()} } style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day5}</Text>
                        </View>
                        <View style={individualDay.container}>
                            <Text style={tempDaily.container} >{temp6}°C</Text>
                            <Image source={ {uri: dayIcon6.toString()}  }style={{width:30, height:30, resizeMode: 'contain'}}></Image>
                            <Text style={textDay.container} >{day6}</Text>
                        </View>
                    </View>
                    <View style={extraSection.container} >
                        <View style= { extraSectionIndividualStat.container}>
                            <Image source={ require('../icons/humid_drop.png') } style={{width:60, height:60, resizeMode: 'contain'}}></Image>
                            <Text style ={extraSectionIndividualText.container} >Humidity</Text>
                            <Text style ={extraSectionIndividualText.container} >{humidity}%</Text>
                        </View>
                        <View style= { extraSectionIndividualStat.container}>
                            <Image source={ require('../icons/UV_icon.png') } style={{width:60, height:60, resizeMode: 'contain'}}></Image>
                            <Text style ={extraSectionIndividualText.container} >UV Index</Text>
                            <Text style ={extraSectionIndividualText.container} >{UV}</Text>
                        </View>
                        <View style= { extraSectionIndividualStat.container}>
                            <Image source={ require('../icons/wind_icon.png') } style={{width:60, height:60, resizeMode: 'contain'}}></Image>
                            <Text style ={extraSectionIndividualText.container} >Wind</Text>
                            <Text style ={extraSectionIndividualText.container} >{wind}km/h</Text>
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

const locationAndTime = StyleSheet.create({
    container: {
        marginLeft: '8%',
    }
})

const recommendationSection = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '84%', 
        height: 40,
        marginTop: 30 ,
        marginRight: '8%',
        marginLeft: '8%',
        borderRadius: 20,
        padding: 1,
    }
})

const weekForeCastContainer = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '84%', 
        height: 130,
        marginTop: 20 ,
        marginRight: '8%',
        marginLeft: '8%',
        borderRadius: 20,
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

const extraSection = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '84%', 
        minHeight: 150,
        marginTop: 30 ,
        marginRight: '8%',
        marginLeft: '8%',
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row',
    }
})

const extraSectionIndividualStat = StyleSheet.create({
    container: {
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const extraSectionIndividualText = StyleSheet.create({
    container: {
        marginTop: '15%',
        color: 'white',
    }
})

export default HomePage;