import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { CheckBox, Dimensions, StyleSheet, StatusBar, Text, View, ScrollView } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import TextInputCustomer from '../components/TextInputCustomer';
import GenericButton from '../components/GenericButton';
import BackButton from '../components/BackButton';
import Hr from '../components/HorizLine';
import RNPickerSelect from 'react-native-picker-select';
const SignUpScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = React.useState('');
  const [pasw, setPasw] = React.useState('');
  const [paswConfirm, setPaswConfirm] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [codFiscale, setCodFiscale] = React.useState('');
  const [numCarta, setNumCarta] = React.useState('');
  const [nomeAtt, setNomeAtt] = React.useState('');
  const [piva, setPiva] = React.useState('');
  const registrazione = (email, pasw, paswConfirm, nome, codFiscale) => {
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
    <View
      style={{ height: "100%", flexDirection: "column", flex: 1, backgroundColor: 'white' }}
    >
      <View style={{  alignItems: "center", }}>
        <StatusBar
          backgroundColor="#5f9747"
          barStyle="light-content"
        />
        <BackButton onPress={() => navigation.navigate('Login')}></BackButton>
        <Text style={styles.titolo}>Registrazione</Text>
      </View>
      <ScrollView style={{
        height: height * .80,  width: "100%",
      }}>
        <View style={styles.bottom}>
          <Hr testo="Credenziali utente" />
          <EmailTextInput placeholder="Email" ic="mail" value={email} onChangeText={email => setEmail(email)} />
          <PasswordTextInput placeholder="Password" value={pasw} onChangeText={pasw => setPasw(pasw)} />
          <PasswordTextInput value={paswConfirm} onChangeText={paswConfirm => setPaswConfirm(paswConfirm)} placeholder="Ripeti Password" />
          <Hr testo="Dati anagrafici" />
          <TextInputCustomer
            placeholder="Nome e cognome"
            value={nome}
            onChangeText={nome => setNome(nome)} />          
          <TextInputCustomer
            placeholder="Codice fiscale"
            value={codFiscale}
            onChangeText={codFiscale => setCodFiscale(codFiscale)} />
          <TextInputCustomer
            placeholder="Nome attività"
            value={nomeAtt}
            onChangeText={nomeAtt => setNomeAtt(nomeAtt)} />
          <TextInputCustomer
            placeholder="Partita IVA"
            value={piva}
            onChangeText={piva => setPiva(piva)} />
          <Hr testo="Metodo di pagamento" />
          <TextInputCustomer placeholder="Numero Carta"
            value={numCarta}
            onChangeText={numCarta => setNumCarta(numCarta)} />
           {/*
            <Text style={{marginLeft:50, marginTop: 5, alignSelf:"flex-start", width:"80%"}}>Data scadenza</Text> 
          
           <View style={{flexDirection:"row"}} >
            
           <RNPickerSelect
                      
                        style={{
                            inputIOS: {
                              marginLeft:50,
                                width: 50,
                                fontSize: 18,
                                paddingVertical: 12,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 4,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                            },
                            inputAndroid: {
                             
                                width: "100%",
                                fontSize: 18,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderWidth: 0.5,
                                borderColor: 'purple',
                                borderRadius: 8,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                            },
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5', value: '5' },
                            { label: '6', value: '6' },
                            { label: '7', value: '7' },
                            { label: '8', value: '8' },
                            { label: '9', value: '9' },
                            { label: '10', value: '10' },
                            { label: '11', value: '11' },
                            { label: '12', value: '12' },

                        ]}
                        placeholder={{
                            label: 'Mese',
                            value: null,

                        }}
                  

                    />
                   <Text>/</Text>
                     <RNPickerSelect
                      
                      style={{
                          inputIOS: {
                            marginLeft:50,
                              width: 50,
                              fontSize: 18,
                              paddingVertical: 12,
                              paddingHorizontal: 10,
                              borderWidth: 1,
                              borderColor: 'gray',
                              borderRadius: 4,
                              color: 'black',
                              paddingRight: 30, // to ensure the text is never behind the icon
                          },
                          inputAndroid: {
                            marginLeft:50,
                              width: "100%",
                              fontSize: 18,
                              paddingHorizontal: 10,
                              paddingVertical: 8,
                              borderWidth: 0.5,
                              borderColor: 'purple',
                              borderRadius: 8,
                              color: 'black',
                              paddingRight: 30, // to ensure the text is never behind the icon
                          },
                      }}
                      onValueChange={(value) => console.log(value)}
                      items={[
                          { label: '2020', value: '2020' },
                          { label: '2021', value: '2021' },
                          { label: '2022', value: '2022' },
                          { label: '2023', value: '2023' },
                          { label: '2024', value: '2024' },
                          { label: '2025', value: '2025' },
                          { label: '2026', value: '2026' },


                      ]}
                      placeholder={{
                          label: 'Anno',
                          value: null,

                      }}
                

                  />
                    </View>
                     */}
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Accetto i termini e condizioni (<Link style={styles.linkP} to="/TermAndCondition">leggi tutte le condizioni</Link>)</Text>
          </View>
          <GenericButton
            testo="Registrati"
            onPress={() => registrazione(email, pasw, paswConfirm, nome, codFiscale)}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  bottom: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 30,
    width: "80%",
  },
  checkbox: {
    alignSelf: "center",
  },
  linkP: {
    color: "#6AA84F",
    marginTop: 10,
  },
  titolo: {
    fontSize: 20,
    color: '#6AA84F',
    fontWeight: "bold"
  },
  label: {
    margin: 8,
  },
});
export default SignUpScreen;