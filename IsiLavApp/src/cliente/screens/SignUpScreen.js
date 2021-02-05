import React, { useState,useEffect } from 'react';
import { Link } from '@react-navigation/native';
import { CheckBox, Dimensions, StyleSheet, StatusBar, Text, View, ScrollView } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import TextInputCustomer from '../components/TextInputCustomer';
import GenericButton from '../components/GenericButton';
import BackButton from '../components/BackButton';
import Hr from '../components/HorizLine';
import Select from '../components/SelectMY';
import * as API from '../services/API';
const SignUpScreen = ({ navigation }) => {
 
 
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = React.useState('');
  const [pasw, setPasw] = React.useState('');
  const [sede, setSede] = React.useState('');
  const [citta, setCitta] = React.useState('');
  const [cap, setCap] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [paswConfirm, setPaswConfirm] = React.useState('');
  const [nominativo, setNominativo] = React.useState('');
  const [ragioneSociale, setRagioneSociale] = React.useState('');
  const [codFiscale, setCodFiscale] = React.useState('');
  const [numCarta, setNumCarta] = React.useState('');
  const [nomeAtt, setNomeAtt] = React.useState('');
  const [piva, setPiva] = React.useState('');
  const [sdi, setSdi] = React.useState('');
  const [month, setMonth] = React.useState( new Date().getMonth() + 1);
  const [year, setYear] = React.useState(new Date().getFullYear());
  const registrazione = (email, pasw, paswConfirm, nominativo, ragioneSociale, codFiscale, nomeAtt, citta, telefono, cap, sede, piva, sdi, numCarta) => {

    const regE = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const regCodFiscale= new RegExp(/^[A-Z]{6}[A-Z0-9]{2}[A-Z][A-Z0-9]{2}[A-Z][A-Z0-9]{3}[A-Z]$/);
    const regNominativo= new RegExp(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/);
    const regTel= new RegExp(/^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
    const regPIVA= new RegExp(/^[0-9]{11}$/);
    const regCap= new RegExp(/^[0-9]{5}$/);
    const regCitta= new RegExp(/[a-zA-Z]*/);
    const regSdi= new RegExp(/[a-zA-Z0-9]{7}$/); 
    const regString= new RegExp(/[a-zA-Z0-9]*$/); 
    const regCreditCard= new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
    

   if (regE.test(email)) {
     
   

    const regP = new  RegExp(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/);

    const isOk = regP.test(pasw);

    if (isOk) {
      
      if (pasw === paswConfirm) {
      
  
          if(regCodFiscale.test(codFiscale)&&regNominativo.test(nominativo)&& regTel.test(telefono)&&regPIVA.test(piva) && regCap.test(cap)&& regCitta.test(citta) && regSdi.test(sdi)&& regCreditCard.test(numCarta)&& regString.test(sede)&& regString.test(ragioneSociale)&& regString.test(nomeAtt)){
            if(isSelected){
    
          var data=month+"/"+year;
                API.SignUp(email, pasw, nominativo, ragioneSociale, codFiscale, nomeAtt, citta, telefono, cap, sede, piva, sdi, numCarta, data)
                .then(response => response.json())
                .then(json => {
                    if(json.status=="ok"){
                      json.staus;
                      navigation.navigate('ConfirmSignUp', { msg: "I suoi dati saranno presi in esame, riceverà un e-mail alla conferma." })
                    }else{

                        alert(json.status);

                    }
                })
                .catch((error) => {
                    console.error(error)
                    alert("Si è verificato un errore durante la registrazione!")
                })
         
             
            }else{

                     alert("Accettare termini e condizioni!")
                } 
            }else{

              alert("formato errato in uno o più campi della form")
          }
      
      } else {
        alert("password diverse")
      }
    } else {
      alert('password in formato errato');
    }
  } else {
    alert("email formato errato")
  }
 
  }

  return (
    <View
      style={{ height: "100%", flexDirection: "column", flex: 1, backgroundColor: 'white' }}
    >
      <View style={{ alignItems: "center", }}>
        <StatusBar
          backgroundColor="#70D0AE"
          barStyle="light-content"
        />
        <BackButton onPress={() => navigation.navigate('Login')}></BackButton>
        <Text style={styles.titolo}>Registrazione</Text>
      </View>
      <ScrollView style={{
        height: height * .80, width: "100%",
      }}>
        <View style={styles.bottom}>
          <Hr testo="Credenziali utente" />
          <EmailTextInput placeholder="Email" ic="mail" value={email} onChangeText={email => setEmail(email)} />
          <PasswordTextInput placeholder="Password" value={pasw} onChangeText={pasw => setPasw(pasw)} />
          <PasswordTextInput value={paswConfirm} onChangeText={paswConfirm => setPaswConfirm(paswConfirm)} placeholder="Ripeti Password" />
          <Hr testo="Dati anagrafici" />
          
          <TextInputCustomer
            placeholder="Nome e cognome"
            value={nominativo}
            onChangeText={nominativo => setNominativo(nominativo)} />

          <TextInputCustomer
            placeholder="Ragione sociale"
            value={ragioneSociale}
            onChangeText={ragioneSociale => setRagioneSociale(ragioneSociale)} />

          <TextInputCustomer
            placeholder="Codice fiscale"
            value={codFiscale}
            onChangeText={codFiscale => setCodFiscale(codFiscale)} />

          <TextInputCustomer
            placeholder="Nome attività"
            value={nomeAtt}
            onChangeText={nomeAtt => setNomeAtt(nomeAtt)} />

          <TextInputCustomer
            placeholder="Numero di telefono"
            value={telefono}
            onChangeText={telefono => setTelefono(telefono)} />

          <TextInputCustomer
            placeholder="Città"
            value={citta}
            onChangeText={citta => setCitta(citta)} />

          <TextInputCustomer
            placeholder="CAP"
            value={cap}
            onChangeText={cap => setCap(cap)} />

          <TextInputCustomer
            placeholder="Sede/indirizzo"
            value={sede}
            onChangeText={sede => setSede(sede)} />

          <TextInputCustomer
            placeholder="Partita IVA"
            value={piva}
            onChangeText={piva => setPiva(piva)} />

          <TextInputCustomer
            placeholder="Indirizzo fatturazione elettronica"
            value={sdi}
            onChangeText={sdi => setSdi(sdi)} />

          <Hr testo="Metodo di pagamento" />
          <TextInputCustomer placeholder="Numero Carta"
            value={numCarta}
            onChangeText={numCarta => setNumCarta(numCarta)} />
          <View style={{ marginLeft: -80 }}>
           
          <Select onMonthChange={setMonth} onYearChange={setYear} month={month} year={year}/>

          </View>

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
            onPress={() => registrazione(email, pasw, paswConfirm, nominativo, ragioneSociale, codFiscale, nomeAtt, citta, telefono, cap, sede, piva, sdi, numCarta)}
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
    width: "70%",
  },
  checkbox: {
    alignSelf: "center",
  },
  linkP: {
    color: "#9DE7CD",
    marginTop: 10,
  },
  titolo: {
    fontSize: 24,
    color: '#70D0AE',
    fontWeight: "bold"
  },
  label: {
    margin: 8,
    fontSize: 18,
  },
});
export default SignUpScreen;