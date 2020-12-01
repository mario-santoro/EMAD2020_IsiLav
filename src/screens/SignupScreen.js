import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

const SignupScreen = (props) => {
 
    
const [email, setEmail] = React.useState('');
const [pasw, setPasw] = React.useState('');
const [nome, setNome] = React.useState('');
const [cognome, setCognome] = React.useState('');
const [codFiscale, setCodFiscale] = React.useState('');
const [numCarta, setNumCarta] = React.useState('');
const registrazione = (email, pasw, nome, cognome, codFiscale) => {
  alert('email: ' + email + ' password: '+ pasw + ' nome: '+ nome + ' cognome: '+ cognome+ ' cod. Fiscale: '+ codFiscale  )
}
  return (
    <View  style={styles.container}>
      <View style={styles.top}>    
      </View>
    
      <View style={styles.bar}>
        <Image
          style={styles.logo}
          source={require('./image/logo.png')}
        />      
        <Text style={styles.logoText}>IsiLav</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.titleText}   >Registrati </Text>
        <View style={styles.regForm}>

            <Text style={styles.baseText} >Credenziali utente ────────────</Text> 
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"              
               value={email}
               onChangeText={email => setEmail(email)}/>    

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"               
               placeholder = "Password"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"              
               value={pasw}
               onChangeText={pasw => setPasw(pasw)}/>

            <Text style={styles.baseText} >Dati Anagrafici ──────────────</Text> 
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nome"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"              
               value={nome}
               onChangeText={nome => setNome(nome)}/>
                 
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"               
               placeholder = "Cognome"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"              
               value={cognome}
               onChangeText={cognome => setCognome(cognome)}/>

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"               
               placeholder = "Cod. Fiscale"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"              
               value={codFiscale}
               onChangeText={codFiscale => setCodFiscale(codFiscale)}/>

                <Text style={styles.baseText} >Metodo di pagamento ──────────</Text> 
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"               
               placeholder = "Num. Carta"
               placeholderTextColor = "lightgrey"
               autoCapitalize = "none"              
               value={numCarta}
               onChangeText={numCarta => setNumCarta(numCarta)}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => registrazione(email, pasw, nome, cognome, codFiscale)  }
               >
               <Text style = {styles.submitButtonText}> REGISTRATI </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {   
    flex:1,
  // flexDirection:"row",
    alignItems:"center"  
  },
  top:{
    width: "100%",
    height: 35,
    backgroundColor: '#6AA84F',
    alignItems:"center",
  },  
  bar:{
    //flex:1,
    flexDirection:"row",
   // alignItems:"center",
    //justifyContent:"center",
    paddingTop:20,
  },
  bottom:{
    flex:1,
    alignItems:"center",
  //  justifyContent:"center",    
  },
  logo: {
    width: 66,
    height: 58,
  },
  baseText: {
    fontSize: 15,
    color:'#6AA84F',
  },
  titleText: {
    fontSize: 20,
    color:'#6AA84F',
    fontWeight: "bold"
  },
  logoText: {
    fontSize: 40,
    color:'#006E2F',
    fontWeight: "bold"
  },
  regForm:{
    width: 350,
    height: 100,  
  },
  input: {
    margin: 15,
    height: 40,
    padding:10,
    borderWidth: 1,
    color: "black"
 },
 submitButton: {
    backgroundColor: '#6AA84F',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white',
    textAlign:"center",
 }
});
export default SignupScreen;
