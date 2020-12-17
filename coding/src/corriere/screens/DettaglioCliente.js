import React, { useState } from 'react';
import { Dimensions, Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ButtonGroup, ListItem } from 'react-native-elements';

import TopBar from '../components/TopBarCorriere';
import GenericButton from '../../cliente/components/GenericButton';
import * as API from '../../cliente/services/API';


const DettaglioCliente = ({ navigation, route }) => {
    const nome = route.params.nome;
    const operazione = route.params.operazione;

    const buttons = ['Consegna', 'Ritiro']
 
    const [index, updateIndex] = useState(0);
    const consegna = API.getConsegna();
    const ritiro = API.getRitiro();
    return (

        <View style={styles.container}>
            <TopBar navigation={navigation} />
            <View style={styles.body}>
                <View style={{ flexDirection: "column", height: 30 }}>
                    <Text style={styles.title}>{nome}</Text>
                    <Text style={styles.subtitle}>operazione: {operazione}</Text>

                </View>

            </View>

            <ButtonGroup
                containerStyle={{ height: 50, justifyContent: "flex-start",  }}
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
                    <FlatList

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
                    : null}



                {index == 1 ?

                    <FlatList

                        data={ritiro}
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
                    : null}




            </ View>


        </View>
    );
}
const styles = StyleSheet.create({


    container: {

        backgroundColor: "white",
        flex:1,
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
        alignSelf: "center"
    },

});
export default DettaglioCliente;