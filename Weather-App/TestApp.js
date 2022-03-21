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


function TestApp() {
    /* Constants */
    const [name, setName] = useState('TestVar1'); // Can't be outside function
    const [age, setAge] = useState('30');

    const [person, setPerson] = useState({name: 'Peter', age: '40'});

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
    const buttonHandler = () => {
        setVar('VarChanged');
        setPerson({name: 'John', age: '55'});
    };

    const pressHandler = (id) => {
        setPeople((prevPeople) => {
            return prevPeople.filter(person => person.id != id) // True: keep item, False: filter item out of array
        }) // Going to depend on state of object. Taking old state and outputting new state
    }

    return (
        <View style={styles.container}>
            <Text>Some Text</Text>
            {/* <View style={globalStyles.buttonContainer}>
             <Button title = 'Click for some change' onPress={buttonHandler}/>
            </View>
            <Text>Current name is {name}, age is {age}</Text>
            <Text>Object: Name is {person.name}, and age is {person.age}</Text>

            <View>
                <Text>Enter name:</Text>
                <TextInput 
                    style = {globalStyles.input}
                    placeholder='e.g. Peter Parker'
                    onChangeText={(inputValue) => setName(inputValue)}/>

                <Text>Enter age:</Text>
                <TextInput 
                    keyboardType = 'numeric'
                    style = {globalStyles.input}
                    placeholder='e.g. 50'
                    onChangeText={(inputValue) => setAge(inputValue)}/>
            </View> */}

            {/* <ScrollView>
                { people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView> */}
            {/* <ScrollView>
                { people.map(item => (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
            
            {/* <FlatList
                numColumns={2}

                keyExtractor={(item) => item.id} // Uses ID for property
                data={people}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )} // Destructured item inside renderItem. As we get object from people in the form of object containing {values}. We want to go inside {value} to get "name" and "key"
            /> */}

        </View>
    );
}
export default TestApp; // The first thing exported for other files by default

const styles = StyleSheet.create({
    container: {
        //flex: 1, //Already flex wrapped in App.js
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,

        marginHorizontal: 10,
        marginTop: 24,
    },
})
