import React, { useState } from 'react';
import { Text, StyleSheet,  View, StatusBar } from 'react-native';
import { Link } from '@react-navigation/native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import SignupButton from '../components/ReverseButton';
import LogoNome from '../components/LogoNome';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [pasw, setPasw] = React.useState('');

  const accesso = (email,) => {
   // const regE = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (email=="mario") {
       navigation.navigate('HomeCorriere')
    } else {
     navigation.navigate('Home')
    }
   
  }
  return (
    <View
    style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white'}}
    >
      <StatusBar
      backgroundColor="#70D0AE"
      barStyle="light-content"
      />

     <LogoNome/>

      <EmailTextInput placeholder="Email" ic="mail"  onChangeText={email => setEmail(email)}/>
      <PasswordTextInput placeholder="Password"/>
      
      <GenericButton  onPress={() => accesso(email)} testo="Accedi"  />
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