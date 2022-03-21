import { StyleSheet } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1, // dissapears content if not setting height
        padding: 30,
        backgroundColor: 'red',
    },
    titleText: {
        //fontFamily:
        //fontSize: 18,
        //color: '#333', 
    },
    boldText: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        //padding: 20,
    },
    input: {
        borderWidth: 1, // By default none
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});
