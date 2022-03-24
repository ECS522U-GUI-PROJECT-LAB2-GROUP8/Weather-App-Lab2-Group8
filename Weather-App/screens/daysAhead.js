import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

export default function DaysAhead({navigation}) {

    return(
        <LinearGradient style={{flex:1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]} >
            <ScrollView>
                <View>
                    <Text>This is the 7 days ahead page</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}