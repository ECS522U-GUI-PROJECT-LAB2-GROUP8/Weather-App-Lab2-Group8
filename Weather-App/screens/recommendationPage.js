import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 

const colourGradientDay = ["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]    //Day/sunny gradient

const RecommendationPage = ( {navigation} ) => {
    return (
        <LinearGradient style={{flex:1}} colors={colourGradientDay} >
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