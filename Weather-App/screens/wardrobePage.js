import React, { useState, useEffect } from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';
import * as Location from 'expo-location';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import { Formik } from 'formik';
import * as yup from 'yup';

import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
 
const API_KEY = `06f97740da75d54620d2a816bf6c9051`;

import { v4 as uuid } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { addClothes } from '../redux/actions/actions';


// Schema to validate form for "Add to wardrobe" page
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
    
    const wardrobe = useSelector( state => state.clothReducer.wardrobe);
    const dispatch = useDispatch(); // Used to call actions from redux

    const addCloth = (cloth) => {
        cloth.key = uuid();
        dispatch(addClothes(cloth)); // Redux function to update state for clothes
        setModalOpen(false);
    }

    // Category pick
    const [pickerFocused, setPickerFocused] = useState(false) // Reset's placeholder for 'Select category'
    const categories = [
        // Top
        {name: "Tops", id: 1},
        {name: "T-shirt", id: 2},
        {name: "Hoodies", id: 3},
        {name: "Sweatshirt", id: 4},
        {name: "Jacket", id: 5},
        {name: "Gilet", id: 5},
        {name: "Shirt", id: 6},
        {name: "Jumper", id: 7},
        {name: "Coat", id: 8},
        {name: "Dresses", id: 9},
        {name: "Blouses", id: 10},
        
        // Bottom
        {name: "Trouser", id: 11},
        {name: "Tights", id: 12},
        {name: "Jean", id: 13},
        {name: "Shorts", id: 14},
        {name: "Pants", id: 15},
        {name: "Skirts", id: 16},

        // Shoes
        {name: "Trainers", id: 17},
        {name: "Sneakers", id: 18},
        {name: "Slides", id: 19},
        {name: "Dress Shoes", id: 20},
        {name: "Boots", id: 21},
    ]

    function RenderTop(item) {
        const tops = ["Tops", "T-shirt", "Hoodies", "Sweatshirt", "Jacket", "Gilet", "Shirt", "Jumper", "Coat", "Dresses", "Blouses"]
        if(tops.includes(item.category))
        {
            return true;
        }
        return false;
    }

    function RenderBottom(item) {
        const bottoms = ["Trouser", "Tights", "Shorts", "Jean", "Shorts", "Pants", "Skirts"]
        if(bottoms.includes(item.category))
        {
            return true;
        }
        return false;
    }

    function RenderShoe(item) {
        const shoes = ["Trainers", "Sneakers", "Slides", "Dress Shoes", "Boots"]
        if(shoes.includes(item.category))
        {
            return true;
        }
        return false;
    }

    // Image pick: function to allow user to pick image from their phone device
    let _pickImage = async(handleChange) => {
        // Request device to allow access and await response
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
        })

        if (!result.cancelled) {
            handleChange(result.uri)
        }
    }

    // Main render for page
    return (
        <LinearGradient style={{flex: 1}} colors={grad}>
            
            {/* Modal to hold "Add to wardrobe" page, a form to fill in item cloth they have in their possession */}
            <Modal visible={modalOpen} animationType='slide'>
                <ScrollView>
                <LinearGradient style={{flex: 1}} colors={grad}>
                    <View style={globalStyles.modalContainer}>
                        
                        {/* Title with close button*/}
                        <View style={globalStyles.modalHeader}>
                            <Text style={globalStyles.titleText}>Add to Wardrobe</Text>
                            <MaterialIcons
                                name='close'
                                size={26}
                                style={globalStyles.modalToggle}
                                onPress={() => setModalOpen(false)}
                            />
                        </View>

                        {/* Main form submission: Enter name, choose category, upload image */}
                        <Formik
                            initialValues={{name:'', category: '', image: null}}
                            validationSchema={ClothSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm(); // Empties out form for next submission
                                addCloth(values) // Adds cloth to wardrobe
                        }}>
                            {(formikProps) => (
                                <View style={{flex: 1}}>
                                    
                                    {/* Enter name field */}
                                    <View style={[globalStyles.boxWrap, {flex: 1}]}>
                                        <TextInput
                                            style = {[globalStyles.input, {flex: 1, color: 'white'}]}
                                            placeholder='Enter name...'
                                            placeholderTextColor={'grey'}
                                            onChangeText={formikProps.handleChange('name')}
                                            value={formikProps.values.name}
                                            onBlur={formikProps.handleBlur('name')}
                                        />
                                    </View>
                                    {/* Text prints out error. If both statements are true it returns value from RHS: 'formikProps.errors.name' */}
                                    <Text style={[globalStyles.errorText, {marginBottom: 10}]}>{ formikProps.touched.name && formikProps.errors.name }</Text>
                                                                        
                                    {/* Category, chosen in dropdown picker */}
                                    <View style={[globalStyles.boxWrap, globalStyles.pickerContainer, {flex: 1}]}>
                                        <Picker
                                            style={[globalStyles.text, globalStyles.picker]}
                                            dropdownIconColor={'white'}
                                            mode='dropdown'
                                            
                                            selectedValue={formikProps.values.category}
                                            onValueChange={formikProps.handleChange('category')}

                                            onFocus={() => setPickerFocused(true)}
                                            onBlur={() => setPickerFocused(false)}
                                        >
                                            {/* List out all types in array categories */}
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
                                    <Text style={[globalStyles.errorText, {marginBottom: 10}]}>{ formikProps.touched.category && formikProps.errors.category }</Text>
                                
                                    {/* Upload image */}
                                    <View style={[globalStyles.boxWrap, globalStyles.image_holder]}>
                                        <TouchableOpacity 
                                            style={{alignItems: 'center', justifyContent:'center', flex: 1}}
                                            onPress={() => {_pickImage(formikProps.handleChange('image'))}}
                                        >
                                            {/* Shows image if one's selected after choosing or shows Upload Image to prompt user to choose */}
                                            {formikProps.values.image && formikProps.values.image.length > 0 ?
                                                <Image source={{ uri: formikProps.values.image }} style={globalStyles.thumbnail} /> : <Text style={globalStyles.text}>Upload Image</Text>}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[globalStyles.errorText, {marginBottom: 5}]}>{ formikProps.touched.image && formikProps.errors.image }</Text>

                                    {/* Add button, to add to wardrobe*/}
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
                    <View style={[globalStyles.header, {marginTop: 60, marginBottom: 15}]}>
                        <Text style={[globalStyles.titleText, {textAlign: 'center'}]}>My Wardrobe</Text>
                    </View>
                    
                    {/* Button to add clothes to their wardrobe */}
                    <View style={globalStyles.boxWrap}>
                        <TouchableOpacity onPress={() => setModalOpen(true)}>
                            <Text style={[globalStyles.text, {textAlign: 'center', margin: 6}]}>Add to wardrobe</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* Top clothes box */}
                    <Text style={[globalStyles.text, globalStyles.subTitle, {marginTop: 20}]}>Top</Text>
                    <View style={[globalStyles.boxWrap, globalStyles.fitScreen, globalStyles.horizontalFlow]}>
                       <SafeAreaView style={{flex:1}}>
                            <FlatList horizontal data={wardrobe} keyExtractor={(item) => item.key} renderItem={({item}) => {
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
                    <View style={[globalStyles.boxWrap, globalStyles.fitScreen, globalStyles.horizontalFlow]}>
                        <SafeAreaView style={{flex:1}}>
                                <FlatList horizontal data={wardrobe} keyExtractor={(item) => item.key} renderItem={({item}) => {
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
                    
                    {/* Shoes box */}
                    <Text style={[globalStyles.text, globalStyles.subTitle, {marginTop: 20}]}>Shoes</Text>
                    <View style={[globalStyles.boxWrap, globalStyles.fitScreen, globalStyles.horizontalFlow, {marginBottom: 20}]}>
                        <SafeAreaView style={{flex:1}}>
                                <FlatList horizontal data={wardrobe} keyExtractor={(item) => item.key} renderItem={({item}) => {
                                    if(RenderShoe(item)){
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