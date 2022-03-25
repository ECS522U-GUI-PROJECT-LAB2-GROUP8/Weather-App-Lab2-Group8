import  React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 
import { Directions, ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

import * as Location from 'expo-location';
import { Picker } from '@react-native-picker/picker';

import {WardrobePage} from './wardrobePage';
import { useSelector, useDispatch } from 'react-redux';

const API_KEY = `06f97740da75d54620d2a816bf6c9051`;

const RecommendationPage = ( {navigation} ) => {

    /*Gradient state */
    const [grad, setGrad] = useState(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"])

    // Wardrobe to display recommendated clothing
    const wardrobe = useSelector(state=>state.clothReducer.wardrobe);
    const dispatch = useDispatch();

    // Recommendation statement and type
    const [todayRecommend, setTodayRecommend] = useState(' ')
    const [recommendType, setRecommendType] = useState(' ') // Clear, Thunderstorm, Rain, Snow, Hazard, Cloudy

    //Fetch data from API: display recommendation: rename to today
    const fetchDataFromApi = (latitude, longitude) => {
        if(latitude && longitude) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(data => {
            //console.log(data) //Comment out once done
            const weatherID = data['weather']['0']['id']
            
            if (weatherID === 800) {
                setTodayRecommend("Today's weather is clear today, wear casual clothing")//Clear: 800
                setRecommendType('Clear')
            } else if ( weatherID >= 200 && weatherID < 300 ) {     
                setTodayRecommend("There's a thunderstorm today, best wear heavy clothes")//Thunderstorm: 2xx
                setRecommendType('Thunderstorm')
            } else if ( weatherID >= 300 && weatherID < 600 ) {     
                setTodayRecommend("Today's weather has some rain, wear clothes to keep yourself dry")//Drizzle/Rain: 3xx, 5xx
                setRecommendType('Rain')
            } else if ( weatherID >= 600 && weatherID < 700 ) {     
                setTodayRecommend("Today's weather is snowing, wear clothes that are warm")//Snow: 6xx
                setRecommendType('Snow')
            } else if ( weatherID >= 700 && weatherID < 800 ) {     
                setTodayRecommend("Today's weather is hazardous, wear protective clothing")//Atmosphere: 7xx
                setRecommendType('Hazard')
            } else if ( weatherID > 800) {                          
                setTodayRecommend("Today's weather is cloudy, wear bright clothing that make yourself visible")//Cloudy: 8xx
                setRecommendType('Cloudy')
            }
            
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

    return (
        <LinearGradient style={{flex:1}} colors={grad} >
            <ScrollView>
                <Text style={{color: 'white', marginTop: 70, marginLeft: '15%', fontSize: 17.5}}>Our recommendation for today</Text>
                <View style={[individualBox.header, {marginTop: 20}]}>
                    <Text style={globalStyles.text}>{todayRecommend}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <View style={individualBox.container}>
                        <Text>Clothes here {clothesX}</Text>
                    </View>
                    <View style={individualBox.container}>

                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <View style={individualBox.container}>
                            
                    </View>
                    <View style={individualBox.container}>

                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const individualBox = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '37.5%',
        height: 300,
        marginLeft: '8%',
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        borderRadius: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginHorizontal: '8%',
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        borderRadius: 20,
    }
})
 
export default RecommendationPage;