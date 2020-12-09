import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './dettagliOrdineStile';


import HorizLine from '../components/HorizLine';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';

export default function dettaglioProdottoAmazon({ navigation }) {

    return (
        <View style={styles.container}>

            {/* da mettere top bar*/}

            <ScrollView>

                <View style={styles.top}>
                    <Text style={styles.numeroOrdine}> Ordine: #14564-ABC-987 </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.testoFisso}>Effettuato il:  </Text>
                    <Text style={styles.testoEvidenziato}> 27/10/2020 11:42 </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.testoFisso}>Totale:  </Text>
                    <Text style={styles.testoEvidenziato}> €99,99  </Text>
                </View>

                <HorizLine testo={"Pagamento"} /> {/* da sostituire con la linea separatrice di react native elements */}

                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.testoFisso}>Metodo:  </Text>
                    <Text style={styles.testoEvidenziato}> MasterCard  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.testoFisso}>Numero:  </Text>
                    <Text style={styles.testoEvidenziato}> ####-####-####-1234  </Text>
                </View>


                <HorizLine testo={"Consegna"} /> {/* da sostituire con la linea separatrice di react native elements */}

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

                <HorizLine testo={" "} /> {/* da sostituire con la linea separatrice di react native elements */}

                <View style={styles.groupButton}>

                    <GenericButton testo="Mostra sulla mappa" onPress={() => navigation.navigate('dettagliOrdine')} />

                    <GenericButton testo="Mostra codice QR" onPress={() => navigation.navigate('dettagliOrdine')} />

                    <HorizLine testo={" "} /> {/* da sostituire con la linea separatrice di react native elements */}

                    <GenericButton testo="Modifica Ordine" onPress={() => navigation.navigate('dettagliOrdine')} />

                </View>
            </ScrollView>
        </View>
    );
}