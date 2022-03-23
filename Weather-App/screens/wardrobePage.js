import React, { useState, useLayoutEffect } from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';

import { MaterialIcons } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

import { Formik } from 'formik';
import * as yup from 'yup';

import * as ImagePicker from 'expo-image-picker';


const [SUPPORTED_FORMATS] = ["image/jpg", "image/jpeg", "image/png"];
const ClothSchema = yup.object().shape({
    name: yup.string().required(), //If title not string, then fail, required means something must be filled. min(val) for string length
    category: yup.string().required(),
    image: yup.mixed().required(),
    //image: yup.object().required('Photo is required'), // Can also check fileName, path, type, etc for shape of object
    
    // test() takes function, can make it return true or false to see if valid, 
        //first arg is 'name for test', second arg is string of 'error printout', third arg is function (which could take value)
}) // yup.object().shaoe({})?

export default function WardrobePage({navigation}) {    
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [clothes, setClothes] = useState([
        {name:'Blue tshirt', category: '', image: {}, key: '1'}
    ]);
    const addCloth = (cloth) => {
        cloth.key = Math.random().toString();// install uuid or something better
        setClothes((currentClothes) => {
            return [cloth, ...currentClothes];
        });
        setModalOpen(false);
    }

    // Image pick
    //const [selectedImage, setSelectedImage] = React.useState(null);
    let _pickImage = async(handleChange) => {

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

    // To resolve virtualised list issue, 2 scroll components clash: ScrollView and FlatList

    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            
            <Modal visible={modalOpen} animationType='slide'>
                <ScrollView>
                <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
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
                                    <Text style={globalStyles.errorText}>{ formikProps.touched.name && formikProps.errors.name }</Text>
                                    {/* Outputs on the RHS of the && if both are true */}
                                    
                                    {/* Dropdown box TO BE IMPLEMENTED*/}
                                    <View style={[globalStyles.boxWrap, {padding: 10, flexDirection:'row'}]}>
                                        <MaterialIcons
                                            name='arrow-drop-down'
                                            size={24}
                                            onPress={() => {}}
                                            onChange={formikProps.handleChange('category')}
                                            value={formikProps.values.category}
                                        />
                                        <Text style={{...globalStyles.text, left:10}}>Select Category</Text>
                                    </View>
                                    <Text style={globalStyles.errorText}>{ formikProps.touched.category && formikProps.errors.category }</Text>
                                
                                    {/* Upload image*/}
                                    <View style={[globalStyles.boxWrap, {width: 312, height: 400}]}>
                                        <TouchableOpacity 
                                            style={{alignItems: 'center', justifyContent:'center', flex: 1}}
                                            onPress={() => {_pickImage(formikProps.handleChange('image'))}}
                                            //onChange={formikProps.handleChange('image')}
                                            //value={formikProps.values.image}
                                        >
                                            {formikProps.values.image && formikProps.values.image.length > 0 ?
                                                <Image source={{ uri: formikProps.values.image }} style={globalStyles.thumbnail} /> : <Text style={globalStyles.text}>Upload Image</Text>}
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={globalStyles.errorText}>{ formikProps.touched.image && formikProps.errors.image }</Text>

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
                    
                    <Text style={globalStyles.text}>Top</Text>
                    {/* Box to hold top clothes */}
                    <View style={[globalStyles.boxWrap, {width: 312, height: 259}]}>
                        
                        {/* List */}
                        <FlatList data={clothes} renderItem={({item}) => (
                            <View style={globalStyles.content}>
                                <Text>Insert image here progress</Text>

                                <Text>{item.name}</Text>
                            </View>
                        )}/>

                    </View>

                    <Text style={globalStyles.text}>Bottom</Text>
                    <View style={[globalStyles.boxWrap, {width: 312, height: 259}]}>

                    </View>

                </View>
            </ScrollView>
        </LinearGradient>

        
    );
  }