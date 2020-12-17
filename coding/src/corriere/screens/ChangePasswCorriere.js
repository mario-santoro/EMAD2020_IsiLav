import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';

import PasswordTextInput from '../../cliente/components/PasswordTextInput';
import GenericButton from '../../cliente/components/GenericButton';
import TopBar from '../components/TopBarCorriere';

const ChangePassword2 = ({ navigation }) => {
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
                <Text style={styles.titolo}>Reimposta password</Text>
            </View>


            <View style={{ alignItems: "center", }}>

                <PasswordTextInput placeholder="Vecchia password" />
                <PasswordTextInput placeholder="Nuova password" />
                <PasswordTextInput placeholder="Conferma nuova password" />


                <GenericButton testo="Cambia" onPress={() => navigation.navigate('SuccessScreenCorriere')} />
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 24,
        color: '#70D0AE',
        margin: 20,
        textAlign: "center",
        fontWeight: 'bold',
    },
    baseText: {
        fontSize: 20,
        color: 'black',
        textAlign: "center"

    },
    container: {
        flex: 9,
        alignItems: "center",



    },


});


export default ChangePassword2;