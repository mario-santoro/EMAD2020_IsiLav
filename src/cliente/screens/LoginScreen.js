import React, { useState, useContext } from 'react';
import { StyleSheet,  View, StatusBar } from 'react-native';
import { Link } from '@react-navigation/native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import SignupButton from '../components/ReverseButton';
import LogoNome from '../components/LogoNome';
import * as API from '../services/API';
import {UserContext} from '../services/Utente';
 
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');

  const accesso = (sessione) => {
   // const regE = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //API.login(email, passw)
    API.login("mario.santoro@outlook.it", "mario")
    .then(response => response.json())
    .then(json => {
      if (json.status === "ok") {
        //salvo l'oggetto json dell'utente nel context
        sessione.setUser(json)
        if(json.tipo === "cliente") {
          navigation.navigate("Home")
        }
        else if(json.tipo === "corriere"){
          navigation.navigate("HomeCorriere")
        }
      }
      else{
        alert(json.status)
      }

    })
    .catch((error) => {
      console.error(error)
      alert("Si è verificato un errore durante il login!")
    })
   
  }
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white'}}>
      <StatusBar
      backgroundColor="#70D0AE"
      barStyle="light-content"
      />

     <LogoNome/>

      <EmailTextInput placeholder="Email" ic="mail" onChangeText={email => setEmail(email)}/>
      <PasswordTextInput placeholder="Password" onChangeText={passw => setPassw(passw)}/>
      
      <UserContext.Consumer>
        {sessione => 
          <GenericButton 
          //onPress={() => accesso()}
          onPress={() => accesso(sessione)}
          testo="Accedi"/>
        }
      </UserContext.Consumer>
      
      <SignupButton onPress={() => navigation.navigate('SignUp')} testo="Registrazione"/>
      
      <Link style={styles.linkP} to="/RetrivePassw">Hai dimenticato la password?</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  linkP: {
    color:"#70D0AE",
    marginTop:10,
  },
});

 
export default LoginScreen;