import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';

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

                <TopBar navigation={navigation} />
                <Text style={styles.titolo}>Cambia angrafica</Text>
            </View>

            <ScrollView>
                <View style={{ alignItems: "center", }}>
                    <View style={styles.container}>
                        <Input
                            placeholder="Nome e cognome"
                            value="Mario Rossi"
                            label="Nome e Cognome"
                            labelStyle={{ color: "black" }}
                        />

                        <Input
                            placeholder="Codice fiscale"
                            value="RSIMRA12FGR85"
                            label="Codice fiscale"
                            labelStyle={{ color: "black" }}
                        />

                        <Input
                            placeholder="Nome attività"
                            value="Hotel Fantastico"
                            label="Nome attività"
                            labelStyle={{ color: "black" }}
                        />

                        <Input
                            placeholder="Partita IVA"
                            value="HDHF4385HF3J"
                            label="Partita IVA"
                            labelStyle={{ color: "black" }}
                        />

                    </View>
                    <GenericButton testo="Cambia" onPress={() => navigation.navigate('SuccessScreen')} />
                </View>
            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 18,
        color: '#6AA84F',
        margin: 20,
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

});


export default LoginScreen;