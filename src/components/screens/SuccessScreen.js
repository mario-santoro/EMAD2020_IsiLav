import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
const ConfirmSignUpScreen = ({ navigation }) => {

    return (

        <View
            style={{ flex: 1, backgroundColor: 'white' }}
        >
<StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />
               <TopBar navigation={navigation}/>


            <View style={{ flex:1, alignItems: "center", justifyContent: 'center' }}>
                
                <Image
                    style={styles.logo}
                    source={require('../../image/check.png')}
                />
                <Text style={styles.baseText}>L'operazione è stata completata con successo!</Text>

            </View>
            <View style={{  alignItems: "center", justifyContent: 'center' }}>

                <GenericButton onPress={() => navigation.navigate('Home')} testo="Torna alla home" />
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