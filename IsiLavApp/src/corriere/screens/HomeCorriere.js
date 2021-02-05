import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Icon, Button, ListItem } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import TopBar from '../components/TopBarCorriere';
import {dateToYYYYMMDD} from '../../cliente/services/Utils';
import * as API from '../../cliente/services/API';

const HomeCorriere = ({ navigation }) => {
    const oggi = new Date();
    const min = new Date(oggi)
    min.setDate(oggi.getDate() + 1) //da domani
    const max = new Date(oggi)
    max.setDate(max.getDate() + 31); //es. un mese

    const [date, setDate] = useState(min); //stato per mantenere la data selezionata
    const [show, setShow] = useState(false); //stato per mostrare o meno il calendario
    const [percorsi, setPercorsi] = useState([]); //lista percorsi per la data selezionata

    const onDateChange = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate || date);
    };

    useEffect(() => {
        API.getPercorsiByDate(dateToYYYYMMDD(date))
        .then(response => response.json())
        .then(json => {
            //console.log(json) //per vedere la struttura dei percorsi
            setPercorsi(json)
        })
        .catch((error) => {
            console.error(error)
            alert("Si è verificato un errore durante la ricerca dei percorsi!")
        })
    }, [date]);

    return (
        <View style={styles.container}>
            <TopBar />
            <View style={styles.body}>
                {show ?
                    <DateTimePicker
                    value={date}
                    minimumDate={min}
                    maximumDate={max}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onDateChange}
                    />
                : null}

                <Button
                icon={<Icon size={24} name="date-range" color="#F8FFFC" />}
                iconRight={true}
                containerStyle={{ width: "100%" }}
                buttonStyle={{ backgroundColor: "#9DE7CD", }}
                titleStyle={{ color: "#F8FFFC"}}
                title={date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear()}
                onPress={() => setShow(true)}
                />
            </View>

            <FlatList
            data={percorsi}
            renderItem={({ item }) => (
                <ListItem onPress={() => navigation.navigate("DettaglioPercorso", { id_percorso: item.id_percorso })} bottomDivider>
                    <Icon size={48} name="local-shipping" color="#70D0AE" />
                    <ListItem.Content>
                        <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>ID #{item.id_percorso}</ListItem.Title>
                        <ListItem.Title style={{ color: "#3E4349", }}>Nome tratta: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}>{item.nome}</Text></ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron name="navigate-next" color="#E9EBED" size={50} />
                </ListItem>
            )}
            keyExtractor={item => item.id_percorso.toString()}
            ListEmptyComponent={<Text style={{alignSelf: 'center'}}>Non ci sono percorsi per la data selezionata!</Text>}
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
});
export default HomeCorriere;