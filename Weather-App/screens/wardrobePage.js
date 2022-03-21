import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';

/* Under navigation container, possibly later use
//const Stack = createNativeStackNavigator();

<Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePageScreen}/>
        <Stack.Screen name="ToLoginPage" component={LoginPageScreen}/>
      </Stack.Navigator>
*/

export default function WardrobePage() {    
    
    const pressHandler = () => {
        
    }

    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.titleText}>My Wardrobe</Text>
                </View>
                
                <View style={globalStyles.boxWrap}>
                    <TouchableOpacity onPress={() => pressHandler()}>
                        <Text style={[globalStyles.text, {textAlign: 'center'}]}>Add to wardrobe</Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={globalStyles.text}>Top</Text>
                <View style={[globalStyles.boxWrap, {width: 312, height: 259}]}>

                </View>

                <Text style={globalStyles.text}>Bottom</Text>
                <View style={[globalStyles.boxWrap, {width: 312, height: 259}]}>

                </View>

            </View>
            



        </LinearGradient>
    );
  }