import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Picker } from 'react-native';
import styles from './stileDettaglioProdottoAmazon';
//import Slideshow from 'react-native-slideshow';

import HorizLine from '../components/HorizLine';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';

export default function dettaglioProdottoAmazon({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("1");
    return (

        <ScrollView>
            <TopBar></TopBar>
            <Text style={styles.nomeProdotto} >Lenzuolo</Text>

            <Image
                style={styles.imgProdotto}
                source={require('../immagini_slide/1.jpg')}
            />

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.quantitaText} >Q.Ta': </Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                </Picker>

            </View>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.testoprezzo} >Prezzo: </Text>
                <Text style={styles.prezzo} >10,50€</Text>

            </View>


            <View>

                <HorizLine testo={"Descrizione prodotto"} />

                <Text style={styles.dettaglioText} >Lenzuolo contemporaneo dallo stile semplice,
                abbinabile senza fatica a piumini a tinta unita o fantasia e all’arredamento della camera da letto.
                Questo lenzuolo offre resistenza e durabilità, non si restringe e non si stropiccia,
                rimanendo sorprendentemente morbido al tatto. Oltre alla resistenza e
                    alla duttile morbidezza che lo caratterizzano, questo lenzuolo offre calore e traspirabilità.</Text>
            </View>

            <View style={styles.bottom}>
                <GenericButton testo="Aggiungi al carrello" onPress={() => navigation.navigate('login')} />
            </View>

        </ScrollView>

    );
}