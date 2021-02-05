import React, { useState } from 'react';
import { Dimensions, ScrollView, View, Text, StatusBar, StyleSheet, Image, } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import RNPickerSelect from 'react-native-picker-select';
import { CartContext } from '../services/Carrello';

const DettaglioProdotto = ({ navigation, route }) => {
    const [quantità, setQuantità] = useState(1);
    const { width, height } = Dimensions.get('window');
    const {prodotto} = route.params;

    const generatePickerItems = (max) => {
        let temp = []
        let i;
        for(i=1; i<=max; i++)
            temp.push({ label: i.toString(), value: i })
        return temp;
    }

    const fromBufferToText = (buffer) => {
        let temp = "";
        let i;
        for(i=0; i<buffer.length; i++)
            temp+=String.fromCharCode(buffer[i])
        return temp;
    }

    return (
        <CartContext.Consumer>
        {carrello =>
        <View
            style={{ flexDirection: "column", flex: 1, backgroundColor: 'white', }}
        >
            <View >
                <StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />

                <TopBar />

            </View>
            <ScrollView style={{height: height * .80, width: "100%"}}>
                <Text style={styles.nomeProdotto} >{prodotto.nome_prodotto}</Text>
                <Text style={styles.sottoTitolo}>{prodotto.descrizione_breve}</Text>
                <Image
                    resizeMode="center"
                    style={styles.imgProdotto}
                    source={{uri: prodotto.immagine}}
                />

                <View style={{ flexDirection: "row", alignContent: "center" }}>
                    <Text style={styles.quantitaText}>Q.tà:</Text>
                    <View style={styles.viewSelect}>
                        <RNPickerSelect
                        pickerProps={{
                            style: {
                                width: "100%",
                                color: 'black',
                                height: "100%",
                            }
                        }}
                        onValueChange={(value) => setQuantità(value)}
                        items={generatePickerItems(10)} //prodotto.quantità
                        placeholder={{
                            label: 'Q.tà (confezioni)',
                            value: 0,
                        }}
                        value={quantità}
                        />
                    </View>
                    <Text style={styles.quantitaText}>Tot. pezzi: {quantità*prodotto.pezzi}</Text>
                </View>

                <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <Text style={styles.testoprezzo}>Prezzo:</Text>
                    <Text style={styles.prezzo}>{parseFloat(prodotto.prezzo*quantità).toFixed(2)} €</Text>
                </View>

                <View style={{marginTop: 15, alignSelf: "center", borderBottomColor: '#70D0AE', borderBottomWidth: 2, width: "90%"}} />

                <View>
                    <Text style={styles.desc}>Descrizione: </Text>
                    <Text style={styles.dettaglioText}>{fromBufferToText(prodotto.descrizione.data)}</Text>
                </View>
                <View style={styles.bottom}>
                    <GenericButton testo="Aggiungi al carrello"
                    onPress={()=>{
                        if(quantità>0)
                            carrello.addProdotto(prodotto, quantità)
                        else
                            alert("Selezionare prima la quantità")
                    }}
                    />
                </View>

            </ScrollView>
        </View>
        }
        </CartContext.Consumer>
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