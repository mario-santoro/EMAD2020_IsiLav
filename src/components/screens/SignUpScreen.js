import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import TextInputCustomer from '../components/TextInputCustomer';
import GenericButton from '../components/GenericButton';
import BackButton from '../components/BackButton';
import Hr from '../components/HorizLine';


const SignUpScreen = ({ navigation }) => {


  const [email, setEmail] = React.useState('');
  const [pasw, setPasw] = React.useState('');
  const [paswConfirm, setPaswConfirm] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [cognome, setCognome] = React.useState('');
  const [codFiscale, setCodFiscale] = React.useState('');
  const [numCarta, setNumCarta] = React.useState('');
  const registrazione = (email, pasw, paswConfirm, nome, cognome, codFiscale) => {
    const regE = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(regE.test(email)){

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
      style={{ flex: 1, backgroundColor: 'white' }}
    >
      <StatusBar
        backgroundColor="#6AA84F"
        barStyle="light-content"
      />
      <BackButton onPress={() => navigation.navigate('Login')}></BackButton>
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
    
      </View>
      <View
        style={{ alignItems: "center", justifyContent: 'center', backgroundColor: 'white' }}
      >
        <GenericButton
          testo="Registrati"
          onPress={() => registrazione(email, pasw, paswConfirm, nome, cognome, codFiscale)}
        >

        </GenericButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",


  },


});
export default SignUpScreen;
