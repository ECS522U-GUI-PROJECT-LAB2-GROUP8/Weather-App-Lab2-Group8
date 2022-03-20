import * as React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

/* NOTE TO READ 
NAVIGATION GUIDE:
    - Using const (which is like a variable for either holding a function or object) from App.js file by importing them with "import * from '../App.js' "
    - Navigation.Navigate('ToLoginPage') finds created screen "ToLoginPage" we created, see App.js file for this
        - Screen with that name uses component "LoginPageScreen" which is just a made function to navigate to Login page.
*/
 
// <Button title='Login page' onPress={() => navigation.navigate('ToLoginPage')}></Button>

/*styling components*/ 

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 214, 0, 0.43)'
    }
})

const weekForeCastContainer = StyleSheet.create({
    container: {
        textAlign: 'center', 
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
        width: '80%', 
        minHeight: '300',
        marginTop: '130%' ,
        marginRight: '10%',
        marginLeft: '10%',
        borderRadius: 10,
        padding: 10,
    }
})

const HomePage = () => {
    return (
        <ScrollView style={main.container}>
            <View style={weekForeCastContainer.container}>
                <View>
                    <Image source={ require('../icons/sun_icon.png') } style={{width:40, height:40}} > 

                    </Image>
                 </View>
            </View>
        </ScrollView>
    );
}

export default HomePage;