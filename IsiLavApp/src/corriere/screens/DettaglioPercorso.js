import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Icon, Button, ListItem } from 'react-native-elements';
import TopBar from '../components/TopBarCorriere';
import * as API from '../../cliente/services/API';

const DettaglioPercorso = ({ navigation, route }) => {
    const [fermate, setFermate] = useState([]); //lista fermate per il percorso selezionato

    useEffect(() => {
        API.getFermateByPercorso(route.params.id_percorso)
        .then(response => response.json())
        .then(json => {
            //console.log(json) //per vedere la struttura delle fermate
            setFermate(json)
        })
        .catch((error) => {
            console.error(error)
            alert("Si è verificato un errore durante la ricerca delle fermate!")
        })
    }, []);

    const formattaOrario = (ore, minuti) => {
        if(ore<10){
            ore = "0"+ore.toString()
        }
        if(minuti<10){
            minuti = "0"+minuti.toString()
        }
        return ore+":"+minuti
    }

    return (
        <View style={styles.container}>
            <TopBar />

            <FlatList
            data={fermate} //fermate per quel percorso passate come argomento
            renderItem={({ item }) => (
                <ListItem onPress={() => navigation.navigate("DettaglioFermata", { fermata: item })} bottomDivider>
                    <Icon size={48} name="location-on" color="#70D0AE" />
                    <ListItem.Content>
                        <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.via}</ListItem.Title>
                        <ListItem.Title>Ore: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{formattaOrario(item.ore, item. minuti)}</Text></ListItem.Title>
                        {/*<ListItem.Title style={{ color: "#3E4349", }}>Numero Clienti: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.numClienti}</Text></ListItem.Title>*/}
                    </ListItem.Content>
                    <ListItem.Chevron name="navigate-next" color="#E9EBED" size={50} />
                </ListItem>
            )}
            keyExtractor={item => item.via+item.ore+item.minuti}
            />

            <View style={styles.bottom}>
                <Button
                icon={<Icon size={24} name="map" color="#F8FFFC" />}
                iconRight={true}
                containerStyle={{ width: "95%", borderRadius: 5 }}
                buttonStyle={{ backgroundColor: "#9DE7CD", }}
                titleStyle={{ color: "#F8FFFC"}}
                onPress={()=>navigation.navigate("Location", {fermate: fermate})}
                title="Visualizza percorso sulla mappa"
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    bottom: {
        marginVertical: 15,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
});
export default DettaglioPercorso;