import * as React from 'react';
import { Stylesheet, View, Text, Button} from 'react-native';

/* NOTE TO READ 
NAVIGATION GUIDE:
    - Using const (which is like a variable for either holding a function or object) from App.js file by importing them with "import * from '../App.js' "
    - Navigation.Navigate('ToLoginPage') finds created screen "ToLoginPage" we created, see App.js file for this
        - Screen with that name uses component "LoginPageScreen" which is just a made function to navigate to Login page.
*/
 

const HomePage = () => {
    return (
        <View>
            <Text>This is home page. PLEASE SHOW</Text>
        </View>
    );

}

export default HomePage;