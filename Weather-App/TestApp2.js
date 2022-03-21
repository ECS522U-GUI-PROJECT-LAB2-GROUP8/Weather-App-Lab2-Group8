import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
// ScrollView: to scroll through content
// FlatList: better way to access and view list
// Touchable, makes components interactive like a button

import * as Font from 'expo-font'; // Import customised fonts
import { AppLoading } from 'expo'; // Used with importing fonts

/* IMPORTS */
import { MyDrawer } from './navigation/DrawerNavigator';
import { globalStyles } from './styles/global';

/*Navigation Settings*/
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Touchable } from 'react-native-web';
import { LongPressGestureHandler } from 'react-native-gesture-handler';


function TestApp2() {
    /* Constants */
    const [people, setPeople] = useState([
        // To use with map function, cycle through each array
        // key could be renamed "id"
        {name: 'mario', id: '1'},
        {name: 'luigi', id: '2'},
        {name: 'toad', id: '3'},
        {name: 'yoshi', id: '4'},
        {name: 'peach', id: '5'},
        {name: 'bowser', id: '6'},
        {name: 'wario', id: '7'},
    ]); 

    /* FUNCTIONS */
    // Could have been imported from another file
    function TodoItem({item}) {
        return (
            <TouchableOpacity>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    /* MAIN RETURN */
    return (
        <View style={styles.container}>
            <Text>Some Text</Text>

        </View>
    );
}
export default TestApp2; // The first thing exported for other files by default

const styles = StyleSheet.create({
    container: {
        //flex: 1, //Already flex wrapped in App.js
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
})
