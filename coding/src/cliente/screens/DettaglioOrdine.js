import React, { useState } from 'react';
import { Dimensions, Text, View, Image, FlatList, ScrollView, StyleSheet } from 'react-native';
import { ButtonGroup, Icon, Button, Overlay, ListItem } from 'react-native-elements';
import HorizLine from '../components/HorizLine';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import * as API from '../services/API';



const DettaglioOrdine = ({ route, navigation }) => {
    const id = route.params.id;
    const cart = API.getCart();

    const buttons = ['Ordinati', 'Restituzione']

    const [index, updateIndex] = useState(0);

    const ritiro = API.getRitiro();

    return (
        <View style={styles.container}>

            {/* da mettere top bar*/}
            <TopBar navigation={navigation} />

            <ScrollView>
                <View style={styles.top}>
                    <Text style={styles.numeroOrdine}> Ordine: #{id} </Text>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Effettuato il:  </Text>
                        <Text style={styles.testoEvidenziato}> 27/10/2020 11:42 </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Totale:  </Text>
                        <Text style={styles.testoEvidenziato}> €99,99  </Text>
                    </View>

                    <View style={{ alignItems: "center", marginVertical: 10 }}>
                        <Button

                            iconRight={true}
                            containerStyle={{ width: "80%" }}
                            buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                            titleStyle={{ color: "#F8FFFC" }}
                            title="Mostra codice QR"
                            onPress={() => navigation.navigate("QrCode", { id: id })}
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
                        /></View>
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
                               cart.map (item =>
                                
                                    <ListItem key={item.id} bottomDivider>

                                        <ListItem.Content>
                                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.name}</ListItem.Title>
                                            <ListItem.Title style={{ color: "#3E4349", }}>Prezzo: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.price} </Text></ListItem.Title>

                                        </ListItem.Content>
                                        <ListItem.Title style={{ color: "#3E4349", }}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.quantità} </Text></ListItem.Title>
                                    </ListItem>
                                  
                                )
                     
                            : null}



                        {index == 1 ?

                              ritiro.map (item =>
                                    <ListItem key={item.id} bottomDivider>

                                        <ListItem.Content>
                                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.articolo}</ListItem.Title>


                                        </ListItem.Content>
                                        <ListItem.Title style={{ color: "#3E4349", }}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.quantità} </Text></ListItem.Title>
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
                        <Text style={styles.testoFisso}>Metodo:  </Text>
                        <Text style={styles.testoEvidenziato}> MasterCard  </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
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

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Data:  </Text>
                        <Text style={styles.testoEvidenziato}> 10/11/2020 09:00  </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Luogo:  </Text>
                        <Text style={styles.testoEvidenziato}>  Via Marconi, 36 </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                        <Text style={styles.testoFisso}>Stato:  </Text>
                        <Text style={styles.testoEvidenziato}>  IN PREPARAZIONE </Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10, }}>
                        <Button
                            icon={<Icon size={24} name="location-on" color="#F8FFFC" />}
                            iconRight={true}
                            containerStyle={{ width: "80%" }}
                            buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                            titleStyle={{ color: "#F8FFFC" }}
                            title="Mostra sulla mappa"
                            onPress={() => navigation.navigate("Map", {luogo: null, schermata:"DettaglioOrdine"})}   
                        />
                    </View>
                </View>


            </ScrollView>
            <View style={{ alignItems: "center", }}>
                <GenericButton testo="Modifica Ordine" onPress={() => navigation.navigate('ModificaOrdine')} />
            </View>
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
        color: "#3E4349"
    },
    line: {
        width: "100%", alignItems: "center",
        flexDirection: "row", paddingTop: 10, paddingBottom: 10
    },
    numeroOrdine: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#3E4349"
    },

    testoFisso: {
        fontSize: 20,
        color: "#3E4349"
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