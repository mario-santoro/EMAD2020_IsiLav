import React, {useState} from 'react';

import {  StyleSheet, StatusBar, View, ScrollView } from 'react-native';

import GenericButton from '../components/TermsAndCondition';
import BackButton from '../components/BackButton';
import TermsAndConditions from '../components/TermsAndCondition';

const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);

  const [email, setEmail] = React.useState('');
  const [pasw, setPasw] = React.useState('');
  const [paswConfirm, setPaswConfirm] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [cognome, setCognome] = React.useState('');
  const [codFiscale, setCodFiscale] = React.useState('');
  const [numCarta, setNumCarta] = React.useState('');
  const registrazione = (email, pasw, paswConfirm, nome, cognome, codFiscale) => {
    const regE = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (regE.test(email)) {

      alert("email ok")
    } else {
      alert("email formato errato")
    }

    const regP = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/);
    const isOk = regP.test(pasw);
    if (isOk) {
      alert('pass');
      if (pasw === paswConfirm) {
        navigation.navigate('ConfirmSignUp')
      } else {
        alert("password diverse")
      }

    } else {
      alert('fail');
    }

  }
  return (
    <ScrollView
      style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
    >
      <View style={{ flex: 1, }}>
        <StatusBar
          backgroundColor="#5f9747"
          barStyle="light-content"
        />
        <BackButton onPress={() => navigation.navigate('Login')}></BackButton>
      </View>
      <View style={styles.bottom}>

        <TermsAndConditions/>

      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  bottom: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",

    //position: 'absolute', height: 100, right: 0, left: 0, bottom: 50, top: 350
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width:"80%",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  linkP: {
    
    color:"#6AA84F",
    marginTop:10,

  },
 
});
export default SignUpScreen;
