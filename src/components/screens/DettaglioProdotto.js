import React, { useState } from 'react';
import { Dimensions, ScrollView, View, Text, StatusBar, StyleSheet, Image, } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import RNPickerSelect from 'react-native-picker-select';


const DettaglioProdotto = ({ navigation }) => {
    const [quantità, setQuantità] = useState(0);
    const { width, height } = Dimensions.get('window');
    function addCarrello() {
        setQuantità(quantità + 1);
        console.log(quantità);

    }
    return (

        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white', }}
        >
            <View >
                <StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />

                <TopBar navigation={navigation} quantità={quantità} />

            </View>
            <ScrollView style={{
                height: height * .80, width: "100%",
            }}>
                <Text style={styles.nomeProdotto} >Lenzuola</Text>
                <Text style={styles.sottoTitolo}>Lenzuola matrimoniali bianche 100% cotone</Text>
                <Image
                    resizeMode="center"
                    style={styles.imgProdotto}
                    source={require('../../image/lenzuola.jpg')}
                />

                <View style={{ flexDirection: "row", alignContent: "center" }}>
                    <Text style={styles.quantitaText} >Q.tà: </Text>
                    <View style={{ backgroundColor: "#E9EBED", marginTop: 20, elevation: 2, borderRadius: 4, borderColor: "black", borderWidth: 0.5, height: 30, width: 90, }}>
                        <RNPickerSelect

                            pickerProps={{
                                style: {
                                    width: "100%",
                                    color: 'black',
                                    height: "100%",
                                    

                                }
                            }}
                            onValueChange={(value) => console.log(value)}
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
                                label: 'Q.tà',
                                value: null,

                            }}
                            value={1}

                        />
                    </View>
                </View>

                <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <Text style={styles.testoprezzo} >Prezzo: </Text>
                    <Text style={styles.prezzo} >22.97 €</Text>


                </View>
                <View
                    style={{
                        marginTop: 15,
                        alignSelf: "center",
                        borderBottomColor: '#70D0AE',
                        borderBottomWidth: 2,
                        width: "90%",

                    }}
                />
                <View>

                    <Text style={styles.desc} >Descrizione: </Text>

                    <Text style={styles.dettaglioText} >Lenzuolo contemporaneo dallo stile semplice,
                    abbinabile senza fatica a piumini a tinta unita o fantasia e all’arredamento della camera da letto.
                    Questo lenzuolo offre resistenza e durabilità, non si restringe e non si stropiccia,
                    rimanendo sorprendentemente morbido al tatto. Oltre alla resistenza e
                    alla duttile morbidezza che lo caratterizzano, questo lenzuolo offre calore e traspirabilità.</Text>
                </View>

                <View style={styles.bottom}>
                    <GenericButton testo="Aggiungi al carrello" onPress={() => addCarrello()} />
                </View>

            </ScrollView>
        </View>

    );


}
const styles = StyleSheet.create({

    imgProdotto: {

        width: "95%",
        height: 250,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        borderRadius: 5,


    },
    sottoTitolo:{
        color:"#3E4349",
        marginHorizontal:"5%",
        fontSize:18,
        marginBottom:"5%",
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
        marginTop:"5%",
        fontSize: 24,
        color: '#70D0AE',
        fontWeight:"bold",
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