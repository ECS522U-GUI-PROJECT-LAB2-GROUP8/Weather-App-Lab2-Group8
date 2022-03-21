import { StyleSheet } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1, // dissapears content if not setting height
        margin: 24,
        marginTop: 70,
    },
    header: {
        
    },
    titleText: {
        //fontFamily: 'RobotoMono-Regular',
        fontSize: 24,
        fontWeight: '400',
        color: '#FFFFFF', 
    },
    text: {
        fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
        color: '#FFFFFF', 
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
    },
    boxWrap: {
        borderRadius: 15,
        backgroundColor: 'rgba(4, 165, 255, 0.45)',
    }
});
