import React, { useState,useEffect ,useContext} from 'react';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import InputElement from '../components/InputElement';
import Select from '../components/SelectMY';
import * as API from '../services/API';
import { UserContext } from '../services/Utente';
const LoginScreen = ({ navigation }) => {
    const sessione = useContext(UserContext);
    const [cliente, setCliente] = useState([]);
    const [sub, setSub] = useState("");
    const [numCarta, setNumCarta] = React.useState('');     
    const [month, setMonth] = React.useState( new Date().getMonth() + 1);
    const [year, setYear] = React.useState(new Date().getFullYear());
    useEffect(() => {
        API.getConsumer(sessione.getUser().email)
        .then(response => response.json())
        .then(json => {
            setCliente(json)
            console.log(json)
          //setNumCarta("*************"+json.numeroCarta.substring(13,16))
          var scadenza=json.scadenzaCarta.split("/");
         
          setMonth(parseInt(scadenza[0]))
          setYear(parseInt(scadenza[1]))
          setNumCarta(json.numeroCarta)
        })
        .catch((error) => {
          console.error(error)
          alert("Si è verificato un errore !")
        })
      }, []);
      const updatePayMethod = (numCarta) => {

 
        const regCreditCard= new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)
        
    
       
      
           if( regCreditCard.test(numCarta)){
               
        
              var data=month+"/"+year;
                    API.ChangePayMethod(sessione.getUser().email, numCarta, data)
                    .then(response => response.json())
                    .then(json => {
                      
                          json.staus;
                          navigation.navigate('SuccessScreen')
                       
                    })
                    .catch((error) => {
                        console.error(error)
                        alert("Si è verificato un errore durante la modifica!")
                    })
             
               
                }else{
    
                  alert("Numero carta in formato errato")
              }
          
      
     
      }
    
    return (
        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
        >
            <View >
                <StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />

                <TopBar />
                <Text style={styles.titolo}>Cambia metodo di pagamento</Text>
            </View>

            <ScrollView>
                <View style={{ alignItems: "center", }}>
                    <View style={styles.container}>
                        <InputElement placeholder="Numero Carta"
                            value={numCarta}
                            onSetState={setNumCarta}
                            label="Numero Carta" />
                        <View style={{ flex:1, width:"100%"   }}>
                            <Select onMonthChange={setMonth} onYearChange={setYear} month={month} year={year} />

                        </View>
                    </View>
                    <GenericButton testo="Cambia" onPress={() => updatePayMethod(numCarta)} />
                </View>
            </ScrollView>
        </View>


    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 24,
        color: '#70D0AE',
        margin: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    baseText: {
        fontSize: 14,
        color: 'black',
        textAlign: "center"

    },
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",


    },
    inpFoc: {

        borderBottomColor: "#6AA84F",

    }

});


export default LoginScreen;