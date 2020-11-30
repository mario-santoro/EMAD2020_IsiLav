import React, { useState } from 'react';
import { Text, StyleSheet,  View, StatusBar } from 'react-native';
import { Link } from '@react-navigation/native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import SignupButton from '../components/ReverseButton';
import LogoNome from '../components/LogoNome';
const LoginScreen = ({navigation}) => {
  
  return (
    <View
    style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white'}}
    >
      <StatusBar
      backgroundColor="#6AA84F"
      barStyle="light-content"
      />

     <LogoNome/>

      <EmailTextInput placeholder="Email" ic="mail"/>
      <PasswordTextInput placeholder="Password"/>
      
      <GenericButton testo="Accedi" onPress={() => navigation.navigate('MyProfile')} />
      <SignupButton onPress={() => navigation.navigate('SignUp')} testo="Registrazione"/>
      
      <Link style={styles.linkP} to="/RetrivePassw">Hai dimenticato la password?</Link>
    </View>
  );
};
const styles = StyleSheet.create({


  linkP: {
    
    color:"#6AA84F",
    marginTop:10,

  },
 

});

 
export default LoginScreen;