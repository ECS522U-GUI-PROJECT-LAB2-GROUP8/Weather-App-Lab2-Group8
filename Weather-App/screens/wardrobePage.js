import React, { useState, useLayoutEffect } from 'react';
import {StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Modal } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';

import { MaterialIcons } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

import { Formik } from 'formik';

export default function WardrobePage({navigation}) {    
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const [clothes, setClothes] = useState([
        {name:'Blue tshirt', category: '', image: 'Insert image', key: '1'}
    ]);

    const addCloth = (cloth) => {
        cloth.key = Math.random().toString();// install uuid or something better
        setClothes((currentClothes) => {
            return [cloth, ...currentClothes];
        });
        setModalOpen(false);
    }

    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            
            <Modal visible={modalOpen} animationType='slide'>
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
                            initialValues={{name:'', category: '', image: ''}}
                            onSubmit={(values) => {
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
                                    />
                                </View>

                                {/* Dropdown box TO BE IMPLEMENTED*/}
                                <View style={[globalStyles.boxWrap, {padding: 10, flexDirection:'row'}]}>
                                    <MaterialIcons
                                        name='arrow-drop-down'
                                        size={24}
                                        onPress={() => {}}
                                    />
                                    <Text style={{...globalStyles.text, left:10}}>Select Category</Text>
                                </View>
                            
                                {/* Upload image*/}
                                <View style={[globalStyles.boxWrap, {width: 312, height: 259, flex: 1}]}>
                                    <TouchableOpacity 
                                        style={{alignItems: 'center', justifyContent:'center', flex: 1}}
                                        onPress={{}}>
                                        <Text style={{...globalStyles.text}}>Upload image</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Add button*/}
                                <View style={{marginBottom: 15}}>
                                    <Button title = 'Add' onPress={formikProps.handleSubmit}/>
                                </View>
                            </View>
                        )}
            </Formik>
                    </View>
                </LinearGradient>
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