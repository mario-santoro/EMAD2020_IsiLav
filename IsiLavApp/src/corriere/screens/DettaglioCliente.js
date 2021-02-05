import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Button, ButtonGroup, ListItem, Icon } from 'react-native-elements';
import TopBar from '../components/TopBarCorriere';
import * as API from '../../cliente/services/API';
import { CommonActions } from '@react-navigation/native';

const DettaglioCliente = ({ navigation, route }) => {
    const cliente = route.params.cliente;
    const buttons = ['Consegna', 'Ritiro']
    const [index, updateIndex] = useState(0);

    const [noleggiato, setNoleggiato] = useState([]); //Lista dei prodotti ordinati nell'operazione
    const [restituito, setRestituito] = useState([]); //Lista dei prodotti restituiti nell'operazione

    useEffect(() => {
        API.getOperationDetails(cliente.id_operazione)
        .then(response => response.json())
        .then(json => {
          setNoleggiato(json.noleggiato)
          setRestituito(json.restituito)
        })
        .catch((error) => {
          console.error(error)
          alert("Si è verificato un errore durante la ricerca dei dettagli dell'ordine!")
        })
      }, []);

    const confermaOrdine = () => {
        API.confirmOrderByID(cliente.id_ordine)
        .then(response => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [{ name: "HomeCorriere" }, { name: "SuccessScreenCorriere" }]
            }));
        })
        .catch((error) => {
          console.error(error)
          alert("Si è verificato un errore durante la conferma dell'ordine!")
        })
    }

    const formattaOperazione = (ordine, reso) => {
        let testo = ""
        if(ordine){
            testo += "ORDINE"
        }
        if(ordine && reso){
            testo += " + " 
        }
        if(reso){
            testo += "RESO"
        }
        return testo
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 9}}>
                <TopBar />
                <View style={styles.body}>
                    <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.title}>{cliente.ragSociale}</Text>
                        <Text style={styles.subtitle}>Operazione: {formattaOperazione(cliente.id_ordine !== null, cliente.id_reso !== null)}</Text>
                        <Text style={styles.subtitle}>Ordine #{cliente.id_ordine}</Text>
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

                <View style={{ padding: 5, marginBottom: 20 }}>
                    {index == 0 ?
                        <FlatList
                            data={noleggiato}
                            renderItem={({ item }) => (
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Title style={{ color: "#3E4349", }}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.quantità}</Text></ListItem.Title>
                                </ListItem>
                            )}
                            keyExtractor={item => item.nome_prodotto}
                        />
                        : null}

                    {index == 1 ?
                        <FlatList
                            data={restituito}
                            renderItem={({ item }) => (
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Title style={{ color: "#3E4349", }}>Quantità: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.quantità}</Text></ListItem.Title>
                                </ListItem>
                            )}
                            keyExtractor={item => item.nome_prodotto}
                        />
                        : null}
                </View>
            </View>
            {
                cliente.stato !== 'CONSEGNATO' ?
                    <Button
                    containerStyle={{flex: 1, justifyContent: 'center'}}
                    buttonStyle={{width: "90%", backgroundColor: "#9DE7CD", alignSelf: 'center'}}
                    icon={<Icon size={32} name="check" color="#F8FFFC" />}
                    iconRight={true}
                    titleStyle={{ color: "#F8FFFC"}}
                    onPress={()=>confermaOrdine()}
                    title="Conferma ordine"
                    />
                :
                    <Text style={{flex: 1, justifyContent: 'center', alignSelf: 'center', textAlignVertical: 'center', color: "#70D0AE", fontWeight: 'bold', fontSize: 18}}>Questo ordine è stato già confermato!</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
    },
    body: {
        paddingVertical: 10,
        alignSelf: "center",
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
        fontSize: 18,
        fontWeight: "bold",
        color: "#70D0AE",
        alignSelf: "center"
    },

});
export default DettaglioCliente;