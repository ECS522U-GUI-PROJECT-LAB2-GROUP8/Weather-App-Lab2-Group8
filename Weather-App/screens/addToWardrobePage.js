import * as React from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';

export default function addWardrobe() {
    
    const [cloth, setCloth] = useState({name: 'Yellow T-shirt', category: 'top'});

    const buttonHandler = () => {
        // Check if name non-empty, category is chosen. Image is not mandatory
    }

    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.titleText}>Add to Wardrobe</Text>
                </View>
                
                <View style={globalStyles.boxWrap}>
                    <TextInput 
                        style = {globalStyles.input}
                        placeholder='Enter name...'
                    />
                </View>

                {/* Dropdown box TO BE IMPLEMENTED*/}
                <View>
                    <Text>Select Category</Text>
                </View>
                
                {/* Upload image*/}
                <View style={[globalStyles.boxWrap, {width: 312, height: 259}]}>
                    <TouchableOpacity>
                        <Text>Upload image</Text>
                    </TouchableOpacity>
                </View>

                {/* Add button*/}
                <View style={globalStyles.buttonContainer}>
                    <Button title = 'Add' onPress={buttonHandler}/>
                </View>

            </View>
            

        </LinearGradient>
    );
  }