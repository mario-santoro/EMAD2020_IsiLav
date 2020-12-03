import React, { useState } from 'react';
import { Dimensions, ScrollView, View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import RNPickerSelect from 'react-native-picker-select';

const DettaglioProdotto = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("1");
    const { width, height } = Dimensions.get('window');
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
                <Text style={styles.nomeProdotto} >Lenzuolo</Text>
               
                    <Image
                    resizeMode="center"
                        style={styles.imgProdotto}
                        source={require('../../image/lenzuola.jpg')}
                    />
              
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                    <Text style={styles.quantitaText} >Q.tà: </Text>
                    <RNPickerSelect
                        style={{
                            inputIOS: {
                                marginTop: "20%",
                                width: 50,
                                fontSize: 18,
                                paddingVertical: 12,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 4,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                            },
                            inputAndroid: {
                                marginTop: "20%",
                                width: 50,
                                fontSize: 18,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderWidth: 0.5,
                                borderColor: 'purple',
                                borderRadius: 8,
                                color: 'black',
                                paddingRight: 30, // to ensure the text is never behind the icon
                            },
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5', value: '5' },
                            { label: '6', value: '6' },
                            { label: '7', value: '7' },
                            { label: '8', value: '8' },
                            { label: '9', value: '9' },
                            { label: '10', value: '10' },

                        ]}
                        placeholder={{
                            label: 'Seleziona quantità',
                            value: null,

                        }}
                        value="1"

                    />

                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.testoprezzo} >Prezzo: </Text>
                    <Text style={styles.prezzo} >22.97 €</Text>


                </View>
                <View
      style={{
          marginTop:15,
          alignSelf:"center",
        borderBottomColor: '#6AA84F',
        borderBottomWidth: 1,
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
                    <GenericButton testo="Aggiungi al carrello" onPress={() => navigation.navigate('Login')} />
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

    bottom: {

        justifyContent: 'flex-end',
        margin: "5%",
        alignItems: "center",

    },

    dettaglioText: {
        fontSize: 16,
        color: '#262626',
        alignItems: "center",
        textAlign: "justify",
        marginRight: "5%",
        marginLeft: "5%",
    },

    quantitaText: {
        marginTop:22,
        marginLeft:22,
        marginRight:25,
        fontSize: 18,
        color: '#6AA84F',
        alignItems: "center",

    },

    nomeProdotto: {
        margin: "5%",
        fontSize: 22,
        color: '#6AA84F',
        alignItems: "center",

    },

    prezzo: {
        marginLeft: 10,
        fontWeight:"bold",
        fontSize: 18,
        color: '#262626',
        alignItems: "center",

    },

    testoprezzo: {

        marginLeft: 22,
        fontSize: 18,
        color: '#6AA84F',
        alignItems: "center",

    },
    desc: {
        marginTop: 10,
        marginLeft: 22,
        fontSize: 18,
        color: '#6AA84F',
        alignItems: "center",

    },



});
export default DettaglioProdotto;