import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import HorizLine from '../components/HorizLine';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';

const DettaglioOrdine = ({ route, navigation }) => {
    const id = route.params.id;
    return (
        <View style={styles.container}>

            {/* da mettere top bar*/}
            <TopBar navigation={navigation} />
            <ScrollView>
                <View style={styles.top}>
                    <Text style={styles.numeroOrdine}> Ordine: #{id} </Text>
                </View>
                <View style={{ paddingLeft:20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Effettuato il:  </Text>
                        <Text style={styles.testoEvidenziato}> 27/10/2020 11:42 </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Totale:  </Text>
                        <Text style={styles.testoEvidenziato}> €99,99  </Text>
                    </View>

                    <View style={styles.line}>

                        <Text style={styles.baseText} >Pagamento</Text>

                        <View
                            style={{
                                borderBottomColor: '#70D0AE',
                                borderBottomWidth: 2,
                                width: "65%",

                            }}
                        />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Metodo:  </Text>
                        <Text style={styles.testoEvidenziato}> MasterCard  </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Numero:  </Text>
                        <Text style={styles.testoEvidenziato}> ####-####-####-1234  </Text>
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

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Data:  </Text>
                        <Text style={styles.testoEvidenziato}> 10/11/2020 09:00  </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Luogo:  </Text>
                        <Text style={styles.testoEvidenziato}>  Via Marconi, 36 </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.testoFisso}>Stato:  </Text>
                        <Text style={styles.testoEvidenziato}>  IN PREPARAZIONE </Text>
                    </View>

                   
                </View>
                <View style={styles.groupButton}>
                <View
                        style={{
                            borderBottomColor: '#70D0AE',
                            borderBottomWidth: 2,
                            width: "90%",
                            padding:10,
                        }}
                    />
                    <GenericButton testo="Mostra sulla mappa" onPress={() => navigation.navigate('dettagliOrdine')} />

                    <GenericButton testo="Mostra codice QR" onPress={() => navigation.navigate("QrCode", {id: id})} />

                    <View
                        style={{
                            borderBottomColor: '#70D0AE',
                            borderBottomWidth: 2,
                            width: "90%",
                            padding:10,
                        }}
                    />

                    <GenericButton testo="Modifica Ordine" onPress={() => navigation.navigate('dettagliOrdine')} />

                </View>

            </ScrollView>
        </View>
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
        color:"#3E4349"
    },
    line: {
        width: "100%", alignItems: "center", 
        flexDirection: "row", paddingTop: 10, paddingBottom: 10
    },
    numeroOrdine: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center",
        color:"#3E4349"
    },

    testoFisso: {
        fontSize: 20,
        color:"#3E4349"
    },
    baseText: {
        fontSize: 20,
        color: '#70D0AE',
        width: "30%",
        

    },
    groupButton: {
        alignItems: "center",
    },

});

export default DettaglioOrdine;