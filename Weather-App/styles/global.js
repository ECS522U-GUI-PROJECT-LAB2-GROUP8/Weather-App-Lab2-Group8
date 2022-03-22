import { StyleSheet } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1, // dissapears content if not setting height
        margin: 24,
        marginTop: 70,
    },
    modalContent: {
        flex: 1,
        marginHorizontal: 24,
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
        //fontFamily: 'RobotoMono-Regular',
        fontSize: 16,
        color: '#FFFFFF', 
    },
    input: {
        borderWidth: 1, // By default none
        borderRadius: 15,
        borderColor: '#777',
        padding: 8,
        margin: 6,
    },
    boxWrap: {
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: 'rgba(4, 165, 255, 0.45)',
    },
    modalToggle: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 2,
        alignSelf: 'center',
    },
});
