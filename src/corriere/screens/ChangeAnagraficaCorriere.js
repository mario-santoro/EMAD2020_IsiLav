import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import GenericButton from '../../cliente/components/GenericButton';
import TopBar from '../components/TopBarCorriere';
import InputElement from '../../cliente/components/InputElement'
const LoginScreen = ({ navigation }) => {
    const [isFocus, setFocus] = useState(false);
    return (
        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
        >
            <View >
                <StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />

                <TopBar />
                <Text style={styles.titolo}>Cambia anagrafica</Text>
            </View>

            <ScrollView>
                <View style={{ alignItems: "center", }}>
                    <View style={styles.container}>
                        <InputElement placeholder="Nome e cognome"
                            value="Mario Rossi"
                            label="Nome e Cognome" />
                        <InputElement placeholder="Codice fiscale"
                            value="RSIMRA12FGR85"
                            label="Codice fiscale" />
                     
                    </View>
                    <GenericButton testo="Cambia" onPress={() => navigation.navigate('SuccessScreenCorriere')} />
                </View>
            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 24,
        color: '#70D0AE',
        margin: 20,
        fontWeight:"bold",
        textAlign: "center"

    },
    baseText: {
        fontSize: 14,
        color: 'black',
        textAlign: "center"

    },
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",


    },
    inpFoc: {

        borderBottomColor: "#6AA84F",

    }

});


export default LoginScreen;