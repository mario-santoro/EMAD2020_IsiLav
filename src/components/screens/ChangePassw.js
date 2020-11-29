import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { Link } from '@react-navigation/native';
import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import BackButton from '../components/BackButton';

const LoginScreen = ({ navigation }) => {
    const [isFocus, setFocus] = useState(false);
    return (
        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
        >
            <View style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor="#6AA84F"
                    barStyle="light-content"
                />

                <BackButton onPress={() => navigation.navigate('RetrivePassw')} />
            </View>
          
                <View style={{marginBottom:20, justifyContent: "flex-start", flex:1,  padding: 10}}>
                    <Text style={styles.titolo}>Reimposta password</Text>
                    <Text style={styles.baseText}>Segli una nuova password per terminare l'accesso.</Text>
                </View>
               <View style={{ alignItems: "center", flex:5}}>
              
               <PasswordTextInput placeholder="Nuova password"/>
               <PasswordTextInput placeholder="Conferma la nuova password"/>


                <GenericButton testo="Cambia" onPress={() => navigation.navigate('Login')} />
                </View>
            </View>

       
    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 18,
        color: '#6AA84F',
     

    },
    baseText: {
        fontSize: 14,
        color: 'black',
      

    },
    container: {
        flex: 9,
        alignItems: "center",
        


    },


});


export default LoginScreen;