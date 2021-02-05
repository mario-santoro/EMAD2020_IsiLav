import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import TopBar from '../components/TopBarCorriere';

import * as API from '../../cliente/services/API';

const DettaglioFermata = ({ navigation, route }) => {
    const fermata = route.params.fermata;

    const formattaOrario = (ore, minuti) => {
        if(ore<10){
            ore = "0"+ore.toString()
        }
        if(minuti<10){
            minuti = "0"+minuti.toString()
        }
        return ore+":"+minuti
    }

    const [clienti, setClienti] = useState([]);

    useEffect(() => {
        API.getClientiByFermata(fermata.via, fermata.id_percorso)
        .then(response => response.json())
        .then(json => {
            //console.log(json) //per vedere la struttura dei clienti (operazioni) in attesa alla fermata 
            setClienti(json)
        })
        .catch((error) => {
            console.error(error)
            alert("Si è verificato un errore durante la ricerca dei clienti!")
        })
    }, []);

    const formattaOperazione = (ordine, reso) => {
        let testo = ""
        if(ordine){
            testo += "ORDINE"
        }
        if(ordine && reso){
            testo += " + " 
        }
        if(reso){
            testo += "RESO"
        }
        return testo
    }

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.body}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.title}>{fermata.via}</Text>
                    <Text style={styles.subtitle}>Ore: {formattaOrario(fermata.ore, fermata. minuti)}</Text>
                </View>
            </View>

            <FlatList
                data={clienti}
                renderItem={({ item }) => (
                    <ListItem  onPress={()=>navigation.navigate("DettaglioCliente", {cliente: item})} bottomDivider>
                        <Icon size={48} name={item.stato === 'CONSEGNATO' ? "person" : "person-outline"} color="#70D0AE" />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.ragSociale}</ListItem.Title>
                            <ListItem.Title style={{ color: "#3E4349", }}>Operazione: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{formattaOperazione(item.id_ordine !== null, item.id_reso !== null)}</Text></ListItem.Title>
                            <ListItem.Title style={{ color: "#3E4349", }}>Ordine #<Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.id_ordine}</Text></ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron name="navigate-next" color="#E9EBED" size={50} />
                    </ListItem>
                )}
                keyExtractor={item => item.id_operazione.toString()}
                ListEmptyComponent={<Text style={{alignSelf: 'center', justifyContent: 'center'}}>Non ci sono clienti prenotati a questa fermata!</Text>}
            />
         

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    body: {
        padding: 10,
        alignSelf: "center",
        flexDirection: "row",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#70D0AE"
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#70D0AE",
        alignSelf:"center"
    },

});
export default DettaglioFermata;