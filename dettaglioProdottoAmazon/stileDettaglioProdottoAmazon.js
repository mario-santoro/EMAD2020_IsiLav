
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    scroll: {
        backgroundColor: 'pink',
        flex: 1,
    },

    imgProdotto: {
        width: "90%",
        height: "35%",
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: 50 / 2,
        borderWidth: 2,
        borderColor: "green",

    },

    bottom: {

        justifyContent: 'flex-end',
        margin: "5%",
        alignItems: "center",
        
    },

    dettaglioText: {
        fontSize: 18,
        color: '#262626',
        alignItems: "center",
        textAlign: "justify",
        marginRight: "5%",
        marginLeft: "5%",
    },

    quantitaText: {
        margin: "5%",
        fontSize: 20,
        color: '#6AA84F',
        alignItems: "center",

    },

    nomeProdotto: {
        margin: "5%",
        fontSize: 25,
        color: '#6AA84F',
        alignItems: "center",
       
    },

    prezzo: {
        margin: "5%",
        marginLeft:0,
        fontSize: 20,
        color: '#262626',
        alignItems: "center",
        marginTop: "0",
    },

    testoprezzo: {
        margin: "5%",
        fontSize: 20,
        color: '#6AA84F',
        alignItems: "center",
        marginTop: "0",
    },

    select: {
        margin: "5%",
        marginLeft: "0",
        fontSize: 20,
        color: '#262626',
        alignItems: "center",
    },

});

