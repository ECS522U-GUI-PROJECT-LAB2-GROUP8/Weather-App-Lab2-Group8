import { LinearGradient } from 'expo-linear-gradient';
import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Location from 'expo-location';

const API_KEY = `06f97740da75d54620d2a816bf6c9051`;

export default function DaysAheadPage({navigation}) {

    /*Gradient state */
    const [grad, setGrad] = useState(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"])

    //Day
    const [day0, setDay0] = useState(' '); const [day1, setDay1] = useState(' '); const [day2, setDay2] = useState(' ')
    const [day3, setDay3] = useState(' '); const [day4, setDay4] = useState(' '); const [day5, setDay5] = useState(' ')
    const [day6, setDay6] = useState(' ')

    //DayNo

    const [dayNo0, setDayNo0] = useState(' '); const [dayNo1, setDayNo1] = useState(' '); const [dayNo2, setDayNo2] = useState(' ')
    const [dayNo3, setDayNo3] = useState(' '); const [dayNo4, setDayNo4] = useState(' '); const [dayNo5, setDayNo5] = useState(' ')
    const [dayNo6, setDaynO6] = useState(' ')

    //7 day forecase Icon
    const [dayIcon0, setDayIcon0] = useState(' '); const [dayIcon1, setDayIcon1] = useState(' '); const [dayIcon2, setDayIcon2] = useState(' ')
    const [dayIcon3, setDayIcon3] = useState(' '); const [dayIcon4, setDayIcon4] = useState(' '); const [dayIcon5, setDayIcon5] = useState(' ')
    const [dayIcon6, setDayIcon6] = useState(' ')

    //Min Temp
    const [minTemp0, setMinTemp0] = useState(' '); const [minTemp1, setMinTemp1] = useState(' '); const [minTemp2, setMinTemp2] = useState(' ')
    const [minTemp3, setMinTemp3] = useState(' '); const [minTemp4, setMinTemp4] = useState(' '); const [minTemp5, setMinTemp5] = useState(' ')
    const [minTemp6, setMinTemp6] = useState(' ')

    //Max temp
    const [maxTemp0, setMaxTemp0] = useState(' '); const [maxTemp1, setMaxTemp1] = useState(' '); const [maxTemp2, setMaxTemp2] = useState(' ')
    const [maxTemp3, setMaxTemp3] = useState(' '); const [maxTemp4, setMaxTemp4] = useState(' '); const [maxTemp5, setMaxTemp5] = useState(' ')
    const [maxTemp6, setMaxTemp6] = useState(' ')

    //Weather Description

    const [weatherDesc0, setWeatherDesc0] = useState(' '); const [weatherDesc1, setWeatherDesc1] = useState(' ')
    const [weatherDesc2, setWeatherDesc2] = useState(' '); const [weatherDesc3, setWeatherDesc3] = useState(' ')
    const [weatherDesc4, setWeatherDesc4] = useState(' '); const [weatherDesc5, setWeatherDesc5] = useState(' ')
    const [weatherDesc6, setWeatherDesc6] = useState(' ')

    //Humdiity

    const [humidity0, setHumidity0] = useState(' '); const [humidity1, setHumidity1] = useState(' ');
    const [humidity2, setHumidity2] = useState(' '); const [humidity3, setHumidity3] = useState(' ');
    const [humidity4, setHumidity4] = useState(' '); const [humidity5, setHumidity5] = useState(' ');
    const [humidity6, setHumidity6] = useState(' ');

    //UV

    const [UV0, setUV0] = useState(' '); const [UV1, setUV1] = useState(' '); const [UV2, setUV2] = useState(' ');
    const [UV3, setUV3] = useState(' '); const [UV4, setUV4] = useState(' '); const [UV5, setUV5] = useState(' ');
    const [UV6, setUV6] = useState(' ');


    //Wind speed

    const [windspeed0, setWindSpeed0]  = useState(' '); const [windspeed1, setWindSpeed1]  = useState(' '); 
    const [windspeed2, setWindSpeed2]  = useState(' '); const [windspeed3, setWindSpeed3]  = useState(' '); 
    const [windspeed4, setWindSpeed4]  = useState(' '); const [windspeed5, setWindSpeed5]  = useState(' '); 
    const [windspeed6, setWindSpeed6]  = useState(' '); 

    function fetchDataFromAPI (latitude, longitude) {
         //Fetching forecast data (7-Day)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {

                //Get day name and date number
                var day00 = data['daily']['0']['dt']
                var day11 = data['daily']['1']['dt']
                var day22 = data['daily']['2']['dt']
                var day33 = data['daily']['3']['dt']
                var day44 = data['daily']['4']['dt']
                var day55 = data['daily']['5']['dt']
                var day66 = data['daily']['6']['dt']

                const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                setDay0(days[(new Date(day00 * 1000)).getUTCDay()]); setDayNo0((new Date(day00 * 1000)).getUTCDate())
                setDay1(days[(new Date(day11 * 1000)).getUTCDay()]); setDayNo1((new Date(day11 * 1000)).getUTCDate())
                setDay2(days[(new Date(day22 * 1000)).getUTCDay()]); setDayNo2((new Date(day22 * 1000)).getUTCDate())
                setDay3(days[(new Date(day33 * 1000)).getUTCDay()]); setDayNo3((new Date(day33 * 1000)).getUTCDate())
                setDay4(days[(new Date(day44 * 1000)).getUTCDay()]); setDayNo4((new Date(day44 * 1000)).getUTCDate())
                setDay5(days[(new Date(day55 * 1000)).getUTCDay()]); setDayNo5((new Date(day55 * 1000)).getUTCDate())
                setDay6(days[(new Date(day66 * 1000)).getUTCDay()]); setDaynO6((new Date(day66 * 1000)).getUTCDate())

                // //Day 0 
                var tempMin0 = data['daily']['0']['temp']['min']; setMinTemp0(Math.round(tempMin0))
                var tempMax0 = data['daily']['0']['temp']['max']; setMaxTemp0(Math.round(tempMax0)) 
                var weatherDescription0 = data['daily']['0']['weather']['0']['description']; setWeatherDesc0(weatherDescription0)
                var humidity0 = data['daily']['0']['humidity']; setHumidity0(humidity0)
                var windSpeed0 = data['daily']['0']['wind_speed']; setWindSpeed0(windSpeed0)
                var UV0 = data['daily']['0']['uvi']; setUV0(Math.round(UV0))

                // //Day 1 

                var tempMin1 = data['daily']['1']['temp']['min']; setMinTemp1(Math.round(tempMin1))
                var tempMax1 = data['daily']['1']['temp']['max']; setMaxTemp1(Math.round(tempMax1)) 
                var weatherDescription1 = data['daily']['1']['weather']['0']['description']; setWeatherDesc1(weatherDescription1)
                var humidity1 = data['daily']['1']['humidity']; setHumidity1(humidity1)
                var windSpeed1 = data['daily']['1']['wind_speed']; setWindSpeed1(windSpeed1)
                var UV1 = data['daily']['1']['uvi']; setUV1(Math.round(UV1))

                // //Day 2 

                var tempMin2 = data['daily']['2']['temp']['min']; setMinTemp2(Math.round(tempMin2))
                var tempMax2 = data['daily']['2']['temp']['max']; setMaxTemp2(Math.round(tempMax2)) 
                var weatherDescription2 = data['daily']['2']['weather']['0']['description']; setWeatherDesc2(weatherDescription2)
                var humidity2 = data['daily']['2']['humidity']; setHumidity2(humidity2)
                var windSpeed2 = data['daily']['2']['wind_speed']; setWindSpeed2(windSpeed2)
                var UV2 = data['daily']['2']['uvi']; setUV2(Math.round(UV2))

                // //Day 3

                var tempMin3 = data['daily']['3']['temp']['min']; setMinTemp3(Math.round(tempMin3))
                var tempMax3 = data['daily']['3']['temp']['max']; setMaxTemp3(Math.round(tempMax3)) 
                var weatherDescription3 = data['daily']['3']['weather']['0']['description']; setWeatherDesc3(weatherDescription3)
                var humidity3 = data['daily']['3']['humidity']; setHumidity3(humidity3)
                var windSpeed3 = data['daily']['3']['wind_speed']; setWindSpeed3(windSpeed3)
                var UV3 = data['daily']['3']['uvi']; setUV3(Math.round(UV3))

                // //Day 4

                var tempMin4 = data['daily']['4']['temp']['min']; setMinTemp4(Math.round(tempMin4))
                var tempMax4 = data['daily']['4']['temp']['max']; setMaxTemp4(Math.round(tempMax4)) 
                var weatherDescription4 = data['daily']['4']['weather']['0']['description']; setWeatherDesc4(weatherDescription4)
                var humidity4 = data['daily']['4']['humidity']; setHumidity4(humidity4)
                var windSpeed4 = data['daily']['4']['wind_speed']; setWindSpeed4(windSpeed4)
                var UV4 = data['daily']['4']['uvi']; setUV4(Math.round(UV4))

                // //Day 5

                var tempMin5 = data['daily']['5']['temp']['min']; setMinTemp5(Math.round(tempMin5))
                var tempMax5 = data['daily']['5']['temp']['max']; setMaxTemp5(Math.round(tempMax5)) 
                var weatherDescription5 = data['daily']['5']['weather']['0']['description']; setWeatherDesc5(weatherDescription5)
                var humidity5 = data['daily']['5']['humidity']; setHumidity5(humidity5)
                var windspeed5 = data['daily']['5']['wind_speed']; setWindSpeed5(windspeed5)
                var UV5 = data['daily']['5']['uvi']; setUV5(Math.round(UV5))

                // //Day 6

                var tempMin6 = data['daily']['6']['temp']['min']; setMinTemp6(Math.round(tempMin6))
                var tempMax6 = data['daily']['6']['temp']['max']; setMaxTemp6(Math.round(tempMax6)) 
                var weatherDescription6 = data['daily']['6']['weather']['0']['description']; setWeatherDesc6(weatherDescription6)
                var humidity6 = data['daily']['6']['humidity']; setHumidity6(humidity6)
                var windspeed6 = data['daily']['6']['wind_speed']; setWindSpeed6(windspeed6)
                var UV6 = data['daily']['6']['uvi']; setUV6(Math.round(UV6))
                


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

                const sunRiseHour = new Date(data['current']['sunrise'] * 1000).getUTCHours();           //Get sunrise hour
                const sunSetHour = new Date(data['current']['sunset'] * 1000).getUTCHours();            //Get sunset hour
                
                
                //Change background colour depending on day/night
                const currentTimeHour = new Date().getUTCHours();         //Current time hour

                function gradientChange() {
                    if ((currentTimeHour >= sunSetHour) || (currentTimeHour <= sunRiseHour)) {
                        setGrad(["rgba(52, 50, 189, 1)",  "rgba(113, 111, 233, 1)"])
                    } else { setGrad(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"]) }
                }
                gradientChange()
            })
    }

    //Granting location permission
    const loadForecast = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        //fetchDataFromApi("40.7128", "-74.0060")
        return;
        }
    
        let location = await Location.getCurrentPositionAsync();            //passing location details 
        fetchDataFromAPI(location.coords.latitude, location.coords.longitude)
    }

    useEffect(() => {loadForecast()}, [])

    return(
        <LinearGradient style={{flex:1}} colors={grad} >
            <ScrollView>
                <View style={{flexDirection: 'column', marginTop: 50}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon0 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day0} {dayNo0}, {weatherDesc0}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp0} - {maxTemp0}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity0}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV0} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed0}km/h </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon1 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day1} {dayNo1}, {weatherDesc1}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp1} - {maxTemp1}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity1}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV1} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed1}km/h </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon2 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day2} {dayNo2}, {weatherDesc2}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp2} - {maxTemp2}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity2}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV2} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed2}km/h </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon3 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day3} {dayNo3}, {weatherDesc3}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp3} - {maxTemp3}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity3}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV3} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed3}km/h </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon4 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day4} {dayNo4}, {weatherDesc4}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp4} - {maxTemp4}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity4}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV4} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed4}km/h </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon5 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day5} {dayNo5}, {weatherDesc5}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp5} - {maxTemp5}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity5}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV5} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed5}km/h </Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column', marginBottom: 50}}>
                    <View style= {individualSection.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{ uri: dayIcon6 }} style={imageIcon.container} ></Image>
                            <Text style={weatherDescription.container}>{day6} {dayNo6}, {weatherDesc6}</Text>
                        </View>
                        <Text style={minmaxTemp.container}>Range: {minTemp6} - {maxTemp6}°C</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={ require('../icons/humid_drop.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Humdiity: {humidity6}% </Text>
                            <Image source={ require('../icons/UV_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>UV: {UV6} </Text>
                            <Image source={ require('../icons/wind_icon.png') } style={extrasIcon.container}></Image>
                            <Text style={extrasText.container}>Wind: {windspeed6}km/h </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const individualSection = StyleSheet.create({
    container: {
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '84%', 
        minHeight: 120,
        marginTop: 30 ,
        marginRight: '8%',
        marginLeft: '8%',
        borderRadius: 20,
        padding: 5,
    }
})

const imageIcon = StyleSheet.create({
    container: {
        width:40, 
        height:40, 
        resizeMode: 'contain', 
        marginTop: '2%'
    }
})

const extrasIcon = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginTop: '2%', 
    }
})
const extrasText = StyleSheet.create({
    container: {
        color: 'white',
        fontSize: 12,
        marginTop: '3%',
        marginLeft: '3%',
    }
})

const weatherDescription = StyleSheet.create({
    container: {
        color: 'white',
        fontSize: 20,
        marginTop: '2%',
        marginLeft: '5%',
    }
})

const minmaxTemp = StyleSheet.create({
    container: {
        color: 'white',
        fontSize: 15 ,
        marginTop: '2%',
        marginLeft: '2%' ,
    }
})
