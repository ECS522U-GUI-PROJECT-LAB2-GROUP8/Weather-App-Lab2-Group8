import React, { useState, useLayoutEffect, Component, useEffect } from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';
import * as Location from 'expo-location';

import { MaterialIcons } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

import { Formik } from 'formik';
import * as yup from 'yup';

import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
 
const API_KEY = `06f97740da75d54620d2a816bf6c9051`;

const ClothSchema = yup.object().shape({
    name: yup.string().required(), 
    category: yup.string().required(),
    image: yup.mixed().required(),    
}) 

export default function WardrobePage({navigation}) {    
    
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

    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [clothes, setClothes] = useState([
        //{name:'Blue tshirt', category: '', image: {}, key: '1'}
    ]);
    const addCloth = (cloth) => {
        cloth.key = Math.random().toString();// install uuid or something better
        setClothes((currentClothes) => {
            return [cloth, ...currentClothes];
        });
        setModalOpen(false);
    }

    // Category pick
    const [pickerFocused, setPickerFocused] = useState(false) // To give placeholder
    const categories = [
        // Headwear

        // Footwear

        // Top
        {name: "Tops & T-shirt", id: 1},
        {name: "Hoodies & Sweatshirts", id: 2},
        {name: "Jackets & Gilets", id: 3},
        {name: "Shirt", id: 4},
        {name: "Jumpers", id: 5},
        {name: "Coat", id: 6},

        {name: "Dresses", id: 7},
        {name: "Blouses", id: 8},
        
        // Bottom
        {name: "Trousers & Tights", id: 9},
        {name: "Jeans", id: 10},
        {name: "Shorts", id: 11},
        {name: "Pants", id: 12},
        {name: "Skirts", id: 12}
    ]
    const tops = ["Tops & T-shirt", "Hoodies & Sweatshirts", "Jackets & Gilets", "Shirt", "Jumpers", "Coat", "Dresses", "Blouses"]
    const bottoms = ["Trousers & Tights", "Jeans", "Shorts", "Pants", "Skirts"]

    function RenderTop(item) {
        if(tops.includes(item.category))
        {
            return true;
        }
        return false;
    }

    function RenderBottom(item) {
        if(bottoms.includes(item.category))
        {
            return true;
        }
        return false;
    }

    // Image pick
    let _pickImage = async(handleChange) => {
        // Request device to allow access and await response
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            //allowsEditing: true,
            //aspect: [4, 3]
        })
        console.log(result) // [REMOVE]
        //setSelectedImage({ localUri: pickerResult.uri });
        if (!result.cancelled) {
            handleChange(result.uri)
        }
    }

    // [To resolve]: virtualised list issue, 2 scroll components clash: ScrollView and FlatList

    return (
        <LinearGradient style={{flex: 1}} colors={grad}>
            
            <Modal visible={modalOpen} animationType='slide'>
                <ScrollView>
                <LinearGradient style={{flex: 1}} colors={grad}>
                    <View style={globalStyles.modalContent}>
                        
                        <View style={[globalStyles.header, {marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}]}>
                            <Text style={globalStyles.titleText}>Add to Wardrobe</Text>
                            <MaterialIcons
                                name='close'
                                size={26}
                                style={globalStyles.modalToggle}
                                onPress={() => setModalOpen(false)}
                            />
                        </View>
                        <Formik
                            initialValues={{name:'', category: '', image: null}}
                            validationSchema={ClothSchema} // finish after doing drop down category
                            onSubmit={(values, actions) => {

                                actions.resetForm();
                                addCloth(values)
                        }}>
                            {(formikProps) => (
                                <View style={{flex: 1}}>
                                    <View style={globalStyles.boxWrap}>
                                        <TextInput
                                            style = {globalStyles.input}
                                            placeholder='Enter name...'
                                            onChangeText={formikProps.handleChange('name')}
                                            value={formikProps.values.name}
                                            onBlur={formikProps.handleBlur('name')}
                                        />
                                    </View>
                                    <Text style={[globalStyles.errorText, {marginBottom: 20}]}>{ formikProps.touched.name && formikProps.errors.name }</Text>
                                    {/* Outputs on the RHS of the && if both are true */}
                                    
                                    {/* Dropdown box TO BE IMPLEMENTED*/}
                                    <View style={[globalStyles.boxWrap, {padding: 10}]}>
                                        <Picker
                                            mode='dropdown'
                                            style={globalStyles.text}
                                            dropdownIconColor={'white'}

                                            selectedValue={formikProps.values.category}
                                            onValueChange={formikProps.handleChange('category')}

                                            onFocus={() => setPickerFocused(true)}
                                            onBlur={() => setPickerFocused(false)}
                                        >
                                            <Picker.Item value="" label="Select Category" enabled={!pickerFocused}/>
                                            {categories.map((item) => {
                                                return (
                                                    <Picker.Item
                                                        label={item.name.toString()}
                                                        value={item.name.toString()}
                                                        key={item.id.toString()}
                                                    />
                                                )
                                            })}
                                        </Picker>
                                    </View>
                                    <Text style={[globalStyles.errorText, {marginBottom: 20}]}>{ formikProps.touched.category && formikProps.errors.category }</Text>
                                
                                    {/* Upload image*/}
                                    <View style={[globalStyles.boxWrap, {width: 312, height: 360}]}>
                                        <TouchableOpacity 
                                            style={{alignItems: 'center', justifyContent:'center', flex: 1}}
                                            onPress={() => {_pickImage(formikProps.handleChange('image'))}}
                                        >
                                            {formikProps.values.image && formikProps.values.image.length > 0 ?
                                                <Image source={{ uri: formikProps.values.image }} style={globalStyles.thumbnail} /> : <Text style={globalStyles.text}>Upload Image</Text>}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[globalStyles.errorText, {marginBottom: 20}]}>{ formikProps.touched.image && formikProps.errors.image }</Text>

                                    {/* Add button*/}
                                    <View style={{marginBottom: 15}}>
                                        <Button title = 'Add' onPress={formikProps.handleSubmit}/>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </LinearGradient>
                </ScrollView>
            </Modal>

            {/* Main Wardrobe page */}
            <ScrollView>
                <View style={globalStyles.container}>
                    <View style={[globalStyles.header, {marginBottom: 15}]}>
                        <Text style={globalStyles.titleText}>My Wardrobe</Text>
                    </View>
                    
                    <View style={globalStyles.boxWrap}>
                        <TouchableOpacity onPress={() => setModalOpen(true)}>
                            <Text style={[globalStyles.text, {textAlign: 'center', margin: 6}]}>Add to wardrobe</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* Top clothes box */}
                    <Text style={[globalStyles.text, globalStyles.subTitle, {marginTop: 20}]}>Top</Text>
                    <View style={[globalStyles.boxWrap, {width: 312, height: 400, padding: 5}]}>
                       <SafeAreaView style={{flex:1}}>
                            <FlatList horizontal data={clothes} keyExtractor={(item) => item.key} renderItem={({item}) => {
                                if(RenderTop(item)){
                                    return(
                                        <View style={globalStyles.column}>
                                            <Image source={{ uri: item.image }} style={[globalStyles.image, {marginTop: 5}]} />
                                            <Text style={[globalStyles.text, {paddingBottom: 10}]}><Text style={{fontWeight:'bold'}}>{item.category}</Text>: {item.name}</Text>
                                        </View>
                                    )
                                } 
                            }}/>
                        </SafeAreaView>
                    </View>

                    {/* Bottom clothes box */}
                    <Text style={[globalStyles.text, globalStyles.subTitle, {marginTop: 20}]}>Bottom</Text>
                    <View style={[globalStyles.boxWrap, {width: 312, height: 400, padding: 5,}]}>
                        <SafeAreaView style={{flex:1}}>
                                <FlatList horizontal data={clothes} keyExtractor={(item) => item.key} renderItem={({item}) => {
                                    if(RenderBottom(item)){
                                        return(
                                            <View style={globalStyles.column}>
                                                <Image source={{ uri: item.image }} style={[globalStyles.image, {marginTop: 5}]} />
                                                <Text style={[globalStyles.text, {paddingBottom: 10}]}><Text style={{fontWeight:'bold'}}>{item.category}</Text>: {item.name}</Text>
                                            </View>
                                        )
                                    } 
                                }}/>
                        </SafeAreaView>
                    </View>

                </View>
            </ScrollView>
        </LinearGradient>        
    );
  }