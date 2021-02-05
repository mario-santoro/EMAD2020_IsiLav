import React, { useState,useEffect ,useContext} from 'react';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import InputElement from '../components/InputElement';
import * as API from '../services/API';
import { UserContext } from '../services/Utente';

const LoginScreen = ({ navigation }) => {
    const [sede, setSede] = React.useState('');
    const [citta, setCitta] = React.useState('');
    const [cap, setCap] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [nominativo, setNominativo] = React.useState('');
    const [ragioneSociale, setRagioneSociale] = React.useState('');
    const [codFiscale, setCodFiscale] = React.useState('');
    const [nomeAtt, setNomeAtt] = React.useState('');
    const [piva, setPiva] = React.useState('');
    const [sdi, setSdi] = React.useState('');
    
    const sessione = useContext(UserContext);
  
    useEffect(() => {
        API.getConsumer(sessione.getUser().email)
        .then(response => response.json())
        .then(json => {
            setNominativo(json.nominativo)
            setCodFiscale(json.codFiscale)
            setRagioneSociale(json.ragSociale)
            setTelefono(""+json.telefono)
            setNomeAtt(json.nomeAttivita)
            setSede(json.sede)
            setCitta(json.citta)
            setCap(""+json.CAP)
            setPiva(json.pIVA)
            setSdi(json.IFE)
        })
        .catch((error) => {
            console.error(error)
            alert("Si è verificato un errore !")
        })
    }, []);

      const update = (nominativo, ragioneSociale, codFiscale, nomeAtt, citta, telefono, cap, sede, piva, sdi) => {
        const regCodFiscale= new RegExp(/^[A-Z]{6}[A-Z0-9]{2}[A-Z][A-Z0-9]{2}[A-Z][A-Z0-9]{3}[A-Z]$/);
        const regNominativo= new RegExp(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/);
        const regTel= new RegExp(/^[(]?[0-9]{3}[)]?[-/\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/);
        const regPIVA= new RegExp(/^[0-9]{11}$/);
        const regCap= new RegExp(/^[0-9]{5}$/);
        const regCitta= new RegExp(/[a-zA-Z]*/);
        const regSdi= new RegExp(/[a-zA-Z0-9]{7}$/);
    
        if(regCodFiscale.test(codFiscale)&&regNominativo.test(nominativo)&& regTel.test(telefono)&&regPIVA.test(piva) && regCap.test(cap)&& regCitta.test(citta) && regSdi.test(sdi)){
            API.ChangeCustomer(sessione.getUser().email, nominativo, ragioneSociale, codFiscale, nomeAtt, citta, telefono, cap, sede, piva, sdi)
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
            alert("Formato errato in uno o più campi!")
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
                <Text style={styles.titolo}>Cambia anagrafica</Text>
            </View>

            <ScrollView>
                <View style={{ alignItems: "center", }}>
                    <View style={styles.container}>
                        <InputElement placeholder="inserisci nome e cognome"
                              value={nominativo}
                              onSetState={setNominativo}
                            label="Nome e Cognome:" />
                        <InputElement placeholder="inserisci Codice fiscale"
                            value={codFiscale}
                            onSetState={setCodFiscale}
                            label="Codice fiscale" />
                        <InputElement placeholder="inserisci ragione sociale"
                            value={ragioneSociale}
                            onSetState={setRagioneSociale}
                            label="Ragione sociale:" />
                        <InputElement placeholder="Inserisci Telefono"
                            value={telefono}
                            onSetState={setTelefono}
                            label="Telefono:" />
                             <InputElement placeholder="inserisci Nome attività"
                            value={nomeAtt}
                            onSetState={setNomeAtt}
                            label="Nome attività:" />
                        <InputElement placeholder="Sede:"
                            value={sede}
                            onSetState={setSede}
                            label="Inserisci sede" />
                        <InputElement placeholder="Inserisci Città:"
                            value={citta}
                            onSetState={setCitta}
                            label="Città:" />
                        <InputElement placeholder="Inserisci CAP"
                            value={cap}
                            onSetState={setCap}
                            label="CAP:" />                        
                        <InputElement placeholder="Inserisci Partita IVA"
                            value={piva}
                            onSetState={setPiva}
                            label="Partita IVA:" />
                        <InputElement placeholder="Inserisci IFE"
                            value={sdi}
                            onSetState={setSdi}
                            label="Indirizzo di fatturazione elettronica:" />
                    </View>
                    <GenericButton testo="Cambia"  onPress={() => update(nominativo, ragioneSociale, codFiscale, nomeAtt, citta, telefono, cap, sede, piva, sdi)} />
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
        fontWeight:"bold",
        textAlign: "center"

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