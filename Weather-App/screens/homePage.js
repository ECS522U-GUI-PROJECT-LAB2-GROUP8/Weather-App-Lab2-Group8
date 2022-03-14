import React from 'react';
import {Stylesheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function HomePage(){
    return (
     <View style = {globalStyles.container}>
         <Text style = {globalStyles.titleText}>This is home page. PLEASE SHOW</Text>
     </View>
    );
}