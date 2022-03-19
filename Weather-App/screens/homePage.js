import * as React from 'react';
import { Stylesheet, View, Text, Button} from 'react-native';

/*Pages*/
import loginPage from '../screens/loginPage';

/*Navigation Settings*/
import * as AppComponents from '../App.js';

/* NOTE TO READ 
NAVIGATION GUIDE:
    - Using const (which is like a variable for either holding a function or object) from App.js file by importing them with "import * from '../App.js' "
    - Navigation.Navigate('ToLoginPage') finds created screen "ToLoginPage" we created, see App.js file for this
        - Screen with that name uses component "LoginPageScreen" which is just a made function to navigate to Login page.
*/
 
// <Button title='Login page' onPress={() => navigation.navigate('ToLoginPage')}></Button>

const HomePage = () => {
    return (
        <View>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>This is home page. PLEASE SHOW</Text>
        </View>
    );
}

export default HomePage;