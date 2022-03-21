import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';

export default function RecommendationPage(){    
    
    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            <View>
                <Text>Suggestion page</Text>
            </View>
        </LinearGradient>
    );
}

