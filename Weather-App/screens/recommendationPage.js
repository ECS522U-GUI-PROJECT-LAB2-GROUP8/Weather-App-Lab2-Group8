import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import  React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 
const API_KEY = `06f97740da75d54620d2a816bf6c9051`;

const RecommendationPage = ( {navigation} ) => {

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
                } else { setGrad(["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)"]) }
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

    return (
        <LinearGradient style={{flex:1}} colors={grad} >
            <ScrollView>
                <Text style={{color: 'white', marginTop: 70, marginLeft: '15%', fontSize: 17.5}}>Our recommendation for today</Text>
                <View style={{flexDirection: 'row', marginTop: 50}}>
                    <View style={individualBox.container}>
                            
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
    }
})
 
export default RecommendationPage;