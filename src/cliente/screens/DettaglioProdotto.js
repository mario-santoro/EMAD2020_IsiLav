import React, { useState } from 'react';
import { Dimensions, ScrollView, View, Text, StatusBar, StyleSheet, Image, } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import RNPickerSelect from 'react-native-picker-select';
import Carrello from '../services/Carrello';

const DettaglioProdotto = ({ navigation, route }) => {
    const [quantità, setQuantità] = useState(0);
    const [pezzi, setPezzi] = useState(1);
    const { width, height } = Dimensions.get('window');
    const item= route.params.item;
 

    return (

        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white', }}
        >
            <View >
                <StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />

                <TopBar navigation={navigation} />

            </View>
            <ScrollView style={{
                height: height * .80, width: "100%",
            }}>
                <Text style={styles.nomeProdotto} >{item.name}</Text>
                <Text style={styles.sottoTitolo}>{item.description}</Text>
                <Image
                    resizeMode="center"
                    style={styles.imgProdotto}
                    source={item.image}
                />

                <View style={{ flexDirection: "row", alignContent: "center" }}>
                    <Text style={styles.quantitaText} >Q.tà: </Text>
                    <View style={styles.viewSelect}>
                        <RNPickerSelect

                            pickerProps={{
                                style: {
                                    width: "100%",
                                    color: 'black',
                                    height: "100%",
                                }
                            }}

                            onValueChange={(value) => setPezzi(value)}

                            items={[
                                { label: '1', value: 1 },
                                { label: '2', value: 2 },
                                { label: '3', value: 3 },
                                { label: '4', value: 4 },
                                { label: '5', value: 5 },
                                { label: '6', value: 6 },
                                { label: '7', value: 7 },
                                { label: '8', value: 8 },
                                { label: '9', value: 9 },
                                { label: '10', value: 10 },
                                { label: '11', value: 11 },
                                { label: '12', value: 12 },
                            ]}

                            placeholder={{
                                label: 'Q.tà (pacco)',
                                value: null,

                            }}
                            value={pezzi}

                        />
                    </View>

                    <Text style={styles.quantitaText} > Tot pezzi: {pezzi*5} </Text>

                </View>

                <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <Text style={styles.testoprezzo} >Prezzo: </Text>
                    <Text style={styles.prezzo} >{parseFloat(item.price*pezzi).toFixed(2)} €</Text>


                </View>

                <View style={{ marginTop: 15, alignSelf: "center", borderBottomColor: '#70D0AE', borderBottomWidth: 2, width: "90%", }} />

                <View>

                    <Text style={styles.desc} >Descrizione: </Text>

                    <Text style={styles.dettaglioText} >Lenzuolo contemporaneo dallo stile semplice,
                    abbinabile senza fatica a piumini a tinta unita o fantasia e all’arredamento della camera da letto.
                    Questo lenzuolo offre resistenza e durabilità, non si restringe e non si stropiccia,
                    rimanendo sorprendentemente morbido al tatto. Oltre alla resistenza e
                    alla duttile morbidezza che lo caratterizzano, questo lenzuolo offre calore e traspirabilità.</Text>
                </View>
                <View style={styles.bottom}>
                    <GenericButton testo="Aggiungi al carrello" onPress={() => Carrello.addArticolo({item})} />
                </View>

            </ScrollView>
        </View>

    );


}
const styles = StyleSheet.create({

    viewSelect: {
        backgroundColor: "#E9EBED",
        marginTop: 20,
        elevation: 2,
        borderRadius: 4,
        borderColor: "black",
        borderWidth: 0.5,
        height: 30,
        width: 90,
    },

    imgProdotto: {

        width: "95%",
        height: 250,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        borderRadius: 5,


    },
    sottoTitolo: {
        color: "#3E4349",
        marginHorizontal: "5%",
        fontSize: 18,
        marginBottom: "5%",
    },
    bottom: {

        justifyContent: 'flex-end',
        margin: "5%",
        alignItems: "center",

    },

    dettaglioText: {
        fontSize: 18,
        color: '#3E4349',
        alignItems: "center",
        textAlign: "justify",
        marginRight: "5%",
        marginLeft: "5%",
    },

    quantitaText: {
        marginTop: 22,
        marginLeft: 22,
        marginRight: 25,
        fontSize: 20,
        color: '#70D0AE',
        alignItems: "center",
        fontWeight: "bold",
    },

    nomeProdotto: {
        marginHorizontal: "5%",
        marginTop: "5%",
        fontSize: 24,
        color: '#70D0AE',
        fontWeight: "bold",
        alignItems: "center",

    },

    prezzo: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 20,
        color: '#3E4349',
        alignItems: "center",

    },

    testoprezzo: {

        marginLeft: 22,
        fontSize: 20,
        color: '#70D0AE',
        alignItems: "center",
        fontWeight: "bold",
    },
    desc: {
        marginTop: 10,
        marginLeft: 22,
        fontSize: 20,
        color: '#70D0AE',
        alignItems: "center",
        fontWeight: "bold",
    },



});
export default DettaglioProdotto;