import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import InputElement from '../components/InputElement';
import Select from '../components/SelectMY';
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
                <Text style={styles.titolo}>Cambia metodo di pagamento</Text>
            </View>

            <ScrollView>
                <View style={{ alignItems: "center", }}>
                    <View style={styles.container}>
                        <InputElement placeholder="Numero Carta"
                            value="********654"
                            label="Numero Carta" />
                        <View style={{ flex:1, width:"100%",   }}>
                            <Select />

                        </View>
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
    inpFoc: {

        borderBottomColor: "#6AA84F",

    }

});


export default LoginScreen;