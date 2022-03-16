import * as React from 'react';
import { Stylesheet, View, Text, Button} from 'react-native';

const HomePage  = ( { navigation } ) => {
    return (
        <View>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>This is home page. PLEASE SHOW</Text>
            <Button title='Login page' onPress={() => navigation.navigate('Loginpage')}></Button>
        </View>
    );

}

export default HomePage;