import React, {useState} from 'react';
import { View, Text, StatusBar } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

//import {Picker} from '@react-native-picker/picker';



const LoginScreen = ({navigation}) => {
  const [scelta, setScelta] = useState(1);
  return (
    <View
    style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white'}}
    >
      <StatusBar
      backgroundColor="#5f9747"
      barStyle="light-content"
      />

      <Text style={{fontWeight: "bold", fontSize: 45, color: "#6AA84F", marginBottom: 20}}>IsiLav</Text>

      <EmailTextInput placeholder="Email"/>
      <PasswordTextInput />
      
      <LoginButton onPress={() => navigation.navigate('Location')} />
      <SignupButton />

    </View>
  );
};

export default LoginScreen;