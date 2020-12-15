import React, { useState } from 'react';
import { Dimensions, Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon, Button, ListItem } from 'react-native-elements';

import TopBar from '../components/TopBarCorriere';
import GenericButton from '../../cliente/components/GenericButton';
import * as API from '../../cliente/services/API';

const { width, height } = Dimensions.get('window');
const DettaglioCliente = ({ navigation, route }) => {
    const nome = route.params.nome;
    const operazione = route.params.operazione;

    const consegna = API.getConsegna();
    return (

        <View style={styles.container}>
            <TopBar navigation={navigation} />
            <View style={styles.body}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.title}>{nome}</Text>
                    <Text style={styles.subtitle}>operazione: {operazione}</Text>

                </View>

            </View>
            < View style={{ padding: 10, }}>
                <View style={styles.line}>
                    <Text style={styles.baseText} >Consegna</Text>

                    <View
                        style={{
                            borderBottomColor: '#70D0AE',
                            borderBottomWidth: 2,
                            width: "80%",

                        }}></View>
                </View>
                <FlatList
                    style={{ height: height * .25 }}
                    data={consegna}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider>

                            <ListItem.Content>
                                <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.articolo}</ListItem.Title>


                            </ListItem.Content>
                            <ListItem.Title style={{ color: "#3E4349", }}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.quantità} </Text></ListItem.Title>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id}
                />
                <View style={styles.line}>
                    <Text style={styles.baseText} >Ritiro</Text>

                    <View
                        style={{
                            borderBottomColor: '#70D0AE',
                            borderBottomWidth: 2,
                            width: "80%",

                        }}></View>
                </View>
                <FlatList
                    style={{height: height * .25}}
                    data={consegna}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider>

                            <ListItem.Content>
                                <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.articolo}</ListItem.Title>


                            </ListItem.Content>
                            <ListItem.Title style={{ color: "#3E4349", }}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.quantità} </Text></ListItem.Title>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id}
                />
            </ View>
            <View style={styles.bottom}>
                <GenericButton testo="Scannerizza QR code" onPress={() => navigation.navigate('login')} />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({


    container: {

        backgroundColor: "white",
        flex: 1,
    },
    line: {
        width: "100%", alignItems: "center", justifyContent: 'center',
        flexDirection: "row", paddingHorizontal: 15, marginTop: 20
    },
    baseText: {
        fontSize: 20,
        color: '#70D0AE',
        width: "28%"
    },
    body: {
        margin: "2%",
        padding: "5%",
        alignSelf: "center",
        borderColor: "#262626",
        flexDirection: "row",
        flex: 1,
    },
    bottom: {

        justifyContent: 'flex-end',
        alignItems: "center",

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#70D0AE"
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#70D0AE",
        alignSelf: "center"
    },

});
export default DettaglioCliente;