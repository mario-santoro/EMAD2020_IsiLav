import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { Link } from '@react-navigation/native';
import EmailTextInput from '../components/EmailTextInput';
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

                <BackButton onPress={() => navigation.navigate('Login')} />
            </View>
          
                <View style={{marginBottom:20, justifyContent: "flex-start", flex:1,  padding: 10}}>
                    <Text style={styles.titolo}>Recupera password</Text>
                    <Text style={styles.baseText}>Se hai dimenticato la password del tuo account, quest'area ti permette di recuperarla. Ti verrà inviata un'email con le istruzioni da seguire.</Text>
                </View>
               <View style={{ alignItems: "center", flex:5}}>
              
                <EmailTextInput placeholder="Inserisci email" ic="mail" />


                <GenericButton testo="Prosegui" onPress={() => navigation.navigate('ChangePassw')} />
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