import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: '8%',
        marginLeft: '8%',
    },
    boxWrap: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' rgba(0, 0, 0, 0.18)',
    },
    fitScreen: {
        backgroundColor: ' rgba(0, 0, 0, 0.18)', 
        minHeight: 400,
        padding: 5,
    },
    horizontalFlow: {
        flexDirection: 'row',
    },
    modalContainer: {
        flex: 1,
        marginHorizontal: '8%',
    },
    modalToggle: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 2,
        alignSelf: 'center',
    },
    modalHeader: {
        marginTop: 20,
        marginBottom: 30, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    titleText: {
        fontSize: 24,
        fontWeight: '400',
        color: '#FFFFFF', 
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '400',
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF', 
    },
    pickerContainer: {
        borderWidth: 1, // By default none
        borderRadius: 15,
        borderColor: '#777',
        padding: '3%',
        
    },
    picker: {
        width: '100%',
    },
    input: {
        borderWidth: 1, // By default none
        borderRadius: 15,
        borderColor: '#777',
        padding: '3%',
        margin: '5%',
        width: '95%',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'silver',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    image_holder: {
        flex: 1,
        width: '100%', 
        minHeight: 400,
    },
    image: {
        flex: 1,
        aspectRatio: 0.70,
        resizeMode: "contain", //contain, cover
    },
    thumbnail: {
        height: undefined,
        width: '95%',
        aspectRatio: 1,
        resizeMode: "contain", //contain, cover
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
