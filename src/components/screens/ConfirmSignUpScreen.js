import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import GenericButton from '../components/GenericButton';;

const ConfirmSignUpScreen = ({ navigation }) => {

    return (

        <View
            style={{ flex: 1, backgroundColor: 'white' }}
        >



            <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <StatusBar
                    backgroundColor="#6AA84F"
                    barStyle="light-content"
                />
                <Text style={styles.baseText}>I suoi dati saranno presi in esame, riceverà un e-mail alla conferma.</Text>
                <Image
                    style={styles.logo}
                    source={require('C:/Users/mario/Desktop/DInfUniSa/MagistraleMatricola_866/2anno/Enterprise Mobile Application Development/IsiLav/image/check.png')}
                />
                <Text style={styles.baseText}>Grazie!</Text>

            </View>
            <View style={{  alignItems: "center", justifyContent: 'center' }}>

                <GenericButton onPress={() => navigation.navigate('Login')} testo="Torna al Login" />
            </View>


        </View>
    );
};


const styles = StyleSheet.create({

    logo: {

        alignItems: 'center',

        paddingRight: 10,
        width: 300,
        height: 300,
    },

    baseText: {
        fontSize: 16,
        color: '#6AA84F',
        paddingRight: "10%",
        paddingLeft: "10%",
        textAlign: 'center'
    }

});


export default ConfirmSignUpScreen;