import React from 'react';
import { View, StatusBar } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import GenericButton from '../components/GenericButton';
import SignupButton from '../components/SignupButton';
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

     <LogoNome></LogoNome>

      <EmailTextInput placeholder="Email" ic="mail"/>
      <PasswordTextInput placeholder="Password"/>
      
      <GenericButton testo="Accedi" onPress={() => navigation.navigate('Home')} />
      <SignupButton onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};


 
export default LoginScreen;