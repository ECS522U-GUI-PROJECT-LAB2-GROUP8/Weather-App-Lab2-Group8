import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/global';

/*Pages*/
//import loginPage from '../screens/loginPage';

const HomePage = () => {
    return (
        <LinearGradient style={{flex: 1}} colors={["rgba(62, 185, 255, 1)", "rgba(255, 214, 0, 0.43)", "rgba(170, 188, 252, 0)"]}>
            <View style={globalStyles.container}>
                <Text>This is home page. PLEASE SHOW</Text>
            </View>
        </LinearGradient>
        
    );
}
export default HomePage;