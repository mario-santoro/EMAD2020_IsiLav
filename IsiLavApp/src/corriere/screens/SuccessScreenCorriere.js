import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import GenericButton from '../../cliente/components/GenericButton';
import TopBar from '../components/TopBarCorriere';

const SuccessScreenCorriere = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
            backgroundColor="#5f9747"
            barStyle="light-content"
            />
            
            <TopBar />

            <View style={{ flex:1, alignItems: "center", justifyContent: 'center' }}>  
                <Image
                style={styles.logo}
                source={require('../../../image/check.png')}
                />
                <Text style={styles.baseText}>L'operazione è stata completata con successo!</Text>
            </View>

            <View style={{  alignItems: "center", justifyContent: 'center' }}>
                <GenericButton onPress={() => navigation.navigate('HomeCorriere')} testo="Torna alla home" />
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

export default SuccessScreenCorriere;