import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { Link } from '@react-navigation/native';
import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import BackButton from '../components/BackButton';

const ChangePassw = ({ navigation }) => {
    const [isFocus, setFocus] = useState(false);
    return (
        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
        >
            <View style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor="#70D0AE"
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


                <GenericButton testo="Cambia" onPress={() => navigation.navigate('ConfirmSignUp',{msg:"L'operazione è stata completata con successo, è possibile effettuare il login con la nuova password."})} />
                </View>
            </View>

       
    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 24,
        fontWeight:"bold",
        color: '#70D0AE',
     paddingHorizontal:5,

    },
    baseText: {
        fontSize: 18,
        color: '#3E4349',
        paddingHorizontal:5,

    },
    container: {
        flex: 9,
        alignItems: "center",
        


    },


});


export default ChangePassw;