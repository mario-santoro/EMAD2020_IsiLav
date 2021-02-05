import React, { useState,useEffect ,useContext} from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';

import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import { UserContext } from '../services/Utente';
const ChangePassword2 = ({ navigation }) => {
  
    const [nuovaPassw, setNuovaPasw] = React.useState('');
    const [vecchiaPassw, setVecchiaPasw] = React.useState('');
    const [ripetiPassw, setRipetiPasw] = React.useState('');
    const sessione = useContext(UserContext);
  
    const updatePassw = (nuovaPassw, vecchiaPassw, ripetiPassw) => {
        const regP = new  RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);
    
        const isOk = regP.test(nuovaPassw);
    
        if (isOk) {
          
          if (nuovaPassw === ripetiPassw) {
          
       
                    API.ChangePassw(sessione.getUser().email, vecchiaPassw, nuovaPassw)
                    .then(response => response.json())
                    .then(json => {
                        if(json.status=="ok"){
                          json.staus;
                          navigation.navigate('SuccessScreen')
                        }else{
    
                            alert(json.status);
    
                        }
                    })
                    .catch((error) => {
                        console.error(error)
                        alert("Si è verificato un errore durante la registrazione!")
                    })
             
              
          
          } else {
            alert("password diverse")
          }
        } else {
          alert('password in formato errato');
        }
     
     
      }
    
    
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
                <Text style={styles.titolo}>Reimposta password</Text>
            </View>


            <View style={{ alignItems: "center", }}>

                <PasswordTextInput placeholder="Vecchia password"  value={vecchiaPassw} onChangeText={vecchiaPassw => setVecchiaPasw(vecchiaPassw)}/>
                <PasswordTextInput placeholder="Nuova password"  value={nuovaPassw} onChangeText={nuovaPassw => setNuovaPasw(nuovaPassw)}/>
                <PasswordTextInput placeholder="Conferma nuova password"  value={ripetiPassw} onChangeText={ripetiPassw => setRipetiPasw(ripetiPassw)}/>


                <GenericButton testo="Cambia" onPress={() => updatePassw(nuovaPassw, vecchiaPassw, ripetiPassw)} />
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