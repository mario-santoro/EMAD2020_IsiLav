import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
import { CheckBox, Dimensions, StyleSheet, StatusBar, Text, View, ScrollView } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import TextInputCustomer from '../components/TextInputCustomer';
import GenericButton from '../components/GenericButton';
import BackButton from '../components/BackButton';
import Hr from '../components/HorizLine';
import SelectYM from '../components/SelectMY';


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
    <View
      style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
    >
      <View style={{ flex: 1, alignItems: "center", }}>
        <StatusBar
          backgroundColor="#6AA84F"
          barStyle="light-content"
        />
        <BackButton onPress={() => navigation.navigate('Login')}></BackButton>
        <Text style={styles.titolo}>Registrazione</Text>
      </View>

      <ScrollView style={{
        height: height * .8, marginTop: 30,
        marginBottom: 15, position: 'absolute', top: 90, right: 0, left: 0, bottom: 0,
      }}>
        <View style={styles.bottom}>

          <Hr testo="Credenziali utente" />

          <EmailTextInput placeholder="Email" ic="mail" value={email} onChangeText={email => setEmail(email)} />
          <PasswordTextInput placeholder="Password" value={pasw} onChangeText={pasw => setPasw(pasw)} />
          <PasswordTextInput value={paswConfirm} onChangeText={paswConfirm => setPaswConfirm(paswConfirm)} placeholder="Ripeti Password" />

          <Hr testo="Dati anagrafici" />
          <TextInputCustomer
            placeholder="Nome"
            value={nome}
            onChangeText={nome => setNome(nome)} />

          <TextInputCustomer
            placeholder="Cognome"
            value={cognome}
            onChangeText={cognome => setCognome(cognome)} />

          <TextInputCustomer
            placeholder="Codice fiscale"
            value={codFiscale}
            onChangeText={codFiscale => setCodFiscale(codFiscale)} />

          <Hr testo="Metodo di pagamento" />
          <TextInputCustomer placeholder="Numero Carta"
            value={numCarta}
            onChangeText={numCarta => setNumCarta(numCarta)} />
          <SelectYM placeholder="inserisci" />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Accetto i termini e condizioni(<Link style={styles.linkP} to="/TermAndCondition">leggi tutte le condizioni</Link>)</Text>
          </View>
          <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>

          <GenericButton
            testo="Registrati"
            onPress={() => registrazione(email, pasw, paswConfirm, nome, cognome, codFiscale)}
          />

        </View>
      </ScrollView>

    </View>
  );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  bottom: {

    flex: 9,
    alignItems: "center",
    justifyContent: "center",

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "80%",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
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
});
export default SignUpScreen;
