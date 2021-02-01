import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon, Button, ListItem } from 'react-native-elements';
import GenericButton from '../../cliente/components/GenericButton';
import TopBar from '../components/TopBarCorriere';

import * as API from '../../cliente/services/API';

const DettaglioFermata = ({ navigation, route }) => {
    const via = route.params.via;
    const ora = route.params.ora;

    const clienti = API.getClienti();
    return (

        <View style={styles.container}>
            <TopBar />
            <View style={styles.body}>
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.title}>{via}</Text>
                    <Text style={styles.subtitle}>ore: {ora}</Text>

                </View>

            </View>
            <FlatList
                data={clienti}
                renderItem={({ item }) => (
                    <ListItem  onPress={()=>navigation.navigate("DettaglioCliente", {nome: item.nome, operazione: item.operazione })} bottomDivider>

                        <ListItem.Content>
                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.nome}</ListItem.Title>
                          
                            <ListItem.Title style={{ color: "#3E4349", }}>Operazione: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.operazione} </Text></ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron name="navigate-next" color="#E9EBED" size={50} />
                    </ListItem>
                )}
                keyExtractor={item => item.id}
            />
         

        </View>
    );
}
const styles = StyleSheet.create({


    container: {

        backgroundColor: "white",
        flex: 1,
    },
    body: {
        margin: "2%",
        padding: "5%",
        alignSelf: "center",
        borderColor: "#262626",
        flexDirection: "row",
        
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
        alignSelf:"center"
    },

});
export default DettaglioFermata;