import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24,
        marginTop: 70,
    },
    modalContent: {
        flex: 1,
        marginHorizontal: 24,
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
    input: {
        borderWidth: 1, // By default none
        borderRadius: 15,
        borderColor: '#777',
        padding: 8,
        margin: 6,
    },
    boxWrap: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' rgba(0, 0, 0, 0.18)', //!!!!!!!!1
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
        resizeMode: "contain", //contain, cover
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
