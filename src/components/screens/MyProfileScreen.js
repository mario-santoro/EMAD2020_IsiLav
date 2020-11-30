import React from 'react';
import {Dimensions, StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import BackButton from '../components/BackButtonReverse';
import ReverseButton from '../components/ReverseButton';
import Hr from '../components/HorizLine';
import TextInputCustomer from '../components/TextInputCustomer';
import GenericButton from '../components/GenericButton';
const MyProfileScreen = ({ navigation }) => {

    return (
        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
        >
            <View style={{ flex: 1, }}>
                <StatusBar
                    backgroundColor="#6AA84F"
                    barStyle="light-content"
                />
                <BackButton onPress={() => navigation.navigate('Login')}></BackButton>
            </View>
            
      <ScrollView style={{
        height: height * .8, 
        marginBottom: 15, position: 'absolute', top: 90, right: 0, left: 0, bottom: 0,
      }}> 
            <View style={styles.bottom}>

           

                <Text style={styles.titolo}>Il mio profilo</Text>
               
                <Hr testo="Modifica Credenziali utente" />
                 <ReverseButton
                    testo="Modifica Password"
                    onPress={() => navigation.navigate('RetrivePassw')}
                />
                <Hr testo="Modifica Dati anagrafici" />
                <TextInputCustomer
                    placeholder="Nome"
                   
                    onChangeText={nome => setNome(nome)} />

                <TextInputCustomer
                    placeholder="Cognome"
                   
                    onChangeText={cognome => setCognome(cognome)} />

                <TextInputCustomer
                    placeholder="Codice fiscale"
                    
                    onChangeText={codFiscale => setCodFiscale(codFiscale)} />

                <Hr testo="Metodo di pagamento" />
                <TextInputCustomer placeholder="Numero Carta"
               
                    onChangeText={numCarta => setNumCarta(numCarta)} />
               
              

                <GenericButton
                    testo="Conferma"
                    onPress={() => navigation.navigate('Login')}
                />
                
            </View>
            </ScrollView>

        </View>
    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    titolo: {
        fontSize: 20,
        color: '#6AA84F',
        fontWeight: "bold"
        
    },
    bottom: {
        
        flex: 9,
        alignItems: "center",
        justifyContent: "center",

        //position: 'absolute', height: 100, right: 0, left: 0, bottom: 50, top: 350
    },


});

export default MyProfileScreen;