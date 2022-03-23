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
    subTitle: {
        fontSize: 20,
        fontWeight: '400',
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
    thumbnail: {
        height: undefined,
        width: '95%',
        aspectRatio: 1,
        resizeMode: "contain", //contain, cover
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'silver',
    },
    image: {
        flex: 1,
        aspectRatio: 0.70,
        //height: undefined,
        //width: '100%',
        resizeMode: "contain", //contain, cover
        //borderRadius: 40,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
