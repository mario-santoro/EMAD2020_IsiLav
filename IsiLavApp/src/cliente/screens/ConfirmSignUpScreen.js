import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import GenericButton from '../components/GenericButton';

const ConfirmSignUpScreen = ({ navigation, route }) => {
    var msg=route.params.msg;
    return (

        <View
            style={{ flex: 1, backgroundColor: 'white' }}
        >



            <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <StatusBar
                    backgroundColor="#70D0AE"
                    barStyle="light-content"
                />
                <Text style={styles.baseText}>{msg}</Text>
                <Image
                    style={styles.logo}
                    source={require('../../../image/check.png')}
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
        fontSize: 20,
        color: '#70D0AE',
        paddingRight: "10%",
        paddingLeft: "10%",
        textAlign: 'center'
    }

});


export default ConfirmSignUpScreen;