import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { ButtonGroup, Icon, Button, ListItem } from 'react-native-elements';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import {datetoDDMMYYYY} from "../services/Utils";

const DettaglioOrdine = ({ route, navigation }) => {
    const ordine = route.params.ordine;
    console.log(ordine)
    const buttons = ['Ordinati', 'Restituiti']

    const [index, updateIndex] = useState(0);
    const [noleggiato, setNoleggiato] = useState([]); //Lista dei prodotti ordinati nell'operazione
    const [restituito, setRestituito] = useState([]); //Lista dei prodotti restituiti nell'operazione

    useEffect(() => {
        API.getOperationDetails(ordine.id_operazione)
        .then(response => response.json())
        .then(json => {
            setNoleggiato(json.noleggiato)
            setRestituito(json.restituito)
        })
        .catch((error) => {
          console.error(error)
          alert("Si è verificato un errore durante la ricerca dei dettagli dell'ordine!")
        })
      }, []);

    return (
        <View style={styles.container}>
            <TopBar />

            <ScrollView>
                <View style={styles.top}>
                    <Text style={styles.testoFisso}>Ordine #<Text style={styles.numeroOrdine}>{ordine.id_ordine}</Text></Text>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Totale: </Text>
                        <Text style={styles.testoEvidenziato}>{parseFloat(ordine.totale).toFixed(2)}€</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Effettuato il: </Text>
                        <Text style={styles.testoEvidenziato}>{datetoDDMMYYYY(new Date(ordine.data_operazione))}</Text>
                    </View>

                    <View style={{ alignItems: "center", marginVertical: 10 }}>
                        <Button
                        containerStyle={{ width: "95%" }}
                        buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 10}}
                        titleStyle={{ color: "#F8FFFC" }}
                        title="Mostra codice QR"
                        onPress={() => navigation.navigate("QrCode", {id: ordine.id_ordine})}
                        />
                    </View>

                    <View style={styles.line}>
                        <Text style={styles.baseText} >Articoli</Text>
                        <View
                            style={{
                                borderBottomColor: '#70D0AE',
                                borderBottomWidth: 2,
                                width: "65%",
                            }}
                        />
                    </View>

                    <ButtonGroup
                    containerStyle={{ height: 50, justifyContent: "flex-start", }}
                    innerBorderStyle={{ color: "#70D0AE", }}
                    buttonContainerStyle={{ backgroundColor: "white", }}
                    selectedTextStyle={{ color: "white" }}
                    textStyle={{ color: "#70D0AE", fontSize: 20 }}
                    onPress={(selectedIndex) => updateIndex(selectedIndex)}
                    selectedIndex={index}
                    buttons={buttons}
                    selectedButtonStyle={{ backgroundColor: "#70D0AE", }}
                    />

                    <View style={{ padding: 10, marginBottom: 20 }}>
                        {index == 0 ?
                               noleggiato.map(item =>
                                    <ListItem key={item.nome_prodotto} bottomDivider>
                                        <ListItem.Content>
                                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
                                            <ListItem.Title style={{ color: "#3E4349", }}>Prezzo: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>€{item.prezzo}</Text></ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Title style={{ color: "#3E4349", }}>Qt.à: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.quantità}</Text></ListItem.Title>
                                    </ListItem>
                                )
                            : null}

                        {index == 1 ?
                              restituito.map (item =>
                                    <ListItem key={item.nome_prodotto} bottomDivider>
                                        <ListItem.Content>
                                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Title style={{color: "#3E4349"}}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.quantità}</Text></ListItem.Title>
                                    </ListItem>
                               )
                            : null}
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.baseText} >Pagamento</Text>
                        <View
                            style={{
                                borderBottomColor: '#70D0AE',
                                borderBottomWidth: 2,
                                width: "63%",
                                alignSelf:"center"

                            }}
                        />
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Metodo: </Text>
                        <Text style={styles.testoEvidenziato}>{ordine.metodo_pagamento}</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Numero: </Text>
                        <Text style={styles.testoEvidenziato}>{ordine.n_carta}</Text>
                    </View>


                    <View style={styles.line}>
                        <Text style={styles.baseText} >Consegna</Text>
                        <View
                            style={{
                                borderBottomColor: '#70D0AE',
                                borderBottomWidth: 2,
                                width: "65%",
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Data: </Text>
                        <Text style={styles.testoEvidenziato}>{datetoDDMMYYYY(new Date(ordine.data_scelta))}</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Luogo: </Text>
                        <Text style={styles.testoEvidenziato}>{ordine.via}</Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Stato: </Text>
                        <Text style={styles.testoEvidenziato}>{ordine.stato}</Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10, }}>
                        <Button
                            icon={<Icon size={24} name="location-on" color="#F8FFFC" />}
                            iconRight={true}
                            containerStyle={{ width: "80%" }}
                            buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                            titleStyle={{ color: "#F8FFFC" }}
                            title="Mostra sulla mappa"
                            onPress={() => navigation.navigate("SelectMap", {ordine: ordine})}   
                        />
                    </View>
                </View>
            </ScrollView>

            {ordine.stato === "IN PREPARAZIONE" ?
                <View style={{ alignItems: "center", }}>
                    <GenericButton testo="Modifica Ordine" onPress={() => navigation.navigate('ModificaOrdine')} />
                </View>
            :
                null
            }
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    top: {
        justifyContent: 'flex-start',
        margin: "5%",
        alignItems: "center",
    },
    testoEvidenziato: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#9DE7CD"
    },
    line: {
        width: "100%", alignItems: "center",
        flexDirection: "row", paddingTop: 10, paddingBottom: 10
    },
    numeroOrdine: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#9DE7CD"
    },
    testoFisso: {
        fontSize: 20,
        color: "#3E4349",
    },
    baseText: {
        fontSize: 20,
        color: '#70D0AE',
        width: "32%",
    },
    groupButton: {
        alignItems: "center",
    },

});

export default DettaglioOrdine;