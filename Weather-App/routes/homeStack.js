import { createStackNavigator } from'@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import homePage from '../screens/homePage';
import loginPage from '../screens/loginPage';

const screens = {
    Home: {
        screen: homePage
    },
    Login: {
        screen: loginPage
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer (HomeStack);

