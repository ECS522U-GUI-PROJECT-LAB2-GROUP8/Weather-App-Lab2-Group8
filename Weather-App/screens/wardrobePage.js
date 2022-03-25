import React, { useState } from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import { Formik } from 'formik';
import * as yup from 'yup';

import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

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

    function RenderTop(item) {
        const tops = ["Tops & T-shirt", "Hoodies & Sweatshirts", "Jackets & Gilets", "Shirt", "Jumpers", "Coat", "Dresses", "Blouses"]
        if(tops.includes(item.category))
        {
            return true;
        }
        return false;
    }

    function RenderBottom(item) {
        const bottoms = ["Trousers & Tights", "Jeans", "Shorts", "Pants", "Skirts"]
        if(bottoms.includes(item.category))
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
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            
            {/* Modal to hold "Add to wardrobe" page, a form to fill in item cloth they have in their possession */}
            <Modal visible={modalOpen} animationType='slide'>
                <ScrollView>
                <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
                    <View style={globalStyles.modalContent}>
                        
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
                                    <View style={globalStyles.boxWrap}>
                                        <TextInput
                                            style = {globalStyles.input}
                                            placeholder='Enter name...'
                                            onChangeText={formikProps.handleChange('name')}
                                            value={formikProps.values.name}
                                            onBlur={formikProps.handleBlur('name')}
                                        />
                                    </View>
                                    {/* Text prints out error. If both statements are true it returns value from RHS: 'formikProps.errors.name' */}
                                    <Text style={[globalStyles.errorText, {marginBottom: 20}]}>{ formikProps.touched.name && formikProps.errors.name }</Text>
                                                                        
                                    {/* Category, chosen in dropdown picker */}
                                    <View style={[globalStyles.boxWrap, {padding: 10}]}>
                                        <Picker
                                            style={globalStyles.text}
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
                                    <Text style={[globalStyles.errorText, {marginBottom: 20}]}>{ formikProps.touched.category && formikProps.errors.category }</Text>
                                
                                    {/* Upload image */}
                                    <View style={[globalStyles.boxWrap, {width: 312, height: 360}]}>
                                        <TouchableOpacity 
                                            style={{alignItems: 'center', justifyContent:'center', flex: 1}}
                                            onPress={() => {_pickImage(formikProps.handleChange('image'))}}
                                        >
                                            {/* Shows image if one's selected after choosing or shows Upload Image to prompt user to choose */}
                                            {formikProps.values.image && formikProps.values.image.length > 0 ?
                                                <Image source={{ uri: formikProps.values.image }} style={globalStyles.thumbnail} /> : <Text style={globalStyles.text}>Upload Image</Text>}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[globalStyles.errorText, {marginBottom: 20}]}>{ formikProps.touched.image && formikProps.errors.image }</Text>

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
                    <View style={[globalStyles.header, {marginBottom: 15}]}>
                        <Text style={globalStyles.titleText}>My Wardrobe</Text>
                    </View>
                    
                    {/* Button to add clothes to their wardrobe */}
                    <View style={globalStyles.boxWrap}>
                        <TouchableOpacity onPress={() => setModalOpen(true)}>
                            <Text style={[globalStyles.text, {textAlign: 'center', margin: 6}]}>Add to wardrobe</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* Top clothes box */}
                    <Text style={[globalStyles.text, globalStyles.subTitle, {marginTop: 20}]}>Top</Text>
                    <View style={[globalStyles.boxWrap, {width: 312, height: 400, padding: 5,}]}>
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
                    <View style={[globalStyles.boxWrap, {width: 312, height: 400, padding: 5,}]}>
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
                    <View>
                    </View>

                </View>
            </ScrollView>
        </LinearGradient>        
    );
  }