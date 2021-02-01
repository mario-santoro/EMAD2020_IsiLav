import React, { useState, useEffect, useContext } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView, StatusBar, Image } from 'react-native';
import TopBar from '../components/TopBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox, Icon, Button, Overlay, ListItem } from 'react-native-elements';
import * as API from '../services/API';
import { CartContext } from '../services/Carrello';
import {datetoDDMMYYYY, dateToYYYYMMDD} from '../services/Utils';
import { UserContext } from '../services/Utente';

const EffettuaOrdine = ({ navigation, route }) => {
    const [giacenza, setGiacenza] = useState([])
    const sessione = useContext(UserContext);

    useEffect(() => {
        API.getGiacenza(sessione.getUser().email)
        .then(response => response.json())
        .then(json => {
            setGiacenza(json)
        })
        .catch((error) => {
            console.error(error)
            alert("Si è verificato un errore durante la ricerca della giacenza!")
        })
    }, []);


    useEffect(() => {
        if(route.params?.hub)
            setHub(route.params.hub)
    }, [route.params?.hub]);

    const oggi = new Date();
    const max = new Date(oggi)
    max.setDate(max.getDate() + 365); //es. oggi + 365 giorni

    const [date, setDate] = useState(oggi);
    const [show, setShow] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [selezionati, setSelezionati] = useState([]); //articoli dalla giacenza scelti per essere restituiti
    const [hub, setHub] = useState(null) //hub selezionato per la consegna

    const [isSelected, setSelection] = useState(false);
    const onDateChange = (event, selectedDate) => {
        const newDate = selectedDate || date;
        setShow(false);
        setDate(newDate);
        setHub(null); //resetta l'hub selezionato quando cambia la data scelta
    };

    const addItemToSelezionati = (item) => {
        setOverlay(false);
        //Devo creare un clone, non inserire il riferimento dalla giacenza
        let temp = Object.assign({}, item);
        temp.max = item.quantità;
        setSelezionati(selezionati.concat(temp));
    };

    const removeItemFromSelezionati = (toDelete) => {
        setSelezionati(selezionati.filter(item => item.nome_prodotto !== toDelete.nome_prodotto));
    };

    const decreaseItem = (nome_prodotto) => {
        //Per ogni item nella lesta dei selezionati
        //se il nome corrisponde a quello cliccato
        //decremento di uno
        setSelezionati(selezionati.map(item => {
            if (item.nome_prodotto === nome_prodotto && item.quantità > 1) {
                item.quantità -= 1;
            }
            return item;
        }))
    };

    const increaseItem = (nome_prodotto) => {
        //Per ogni item nella lesta dei selezionati
        //se il nome corrisponde a quello cliccato
        //incremento di uno
        setSelezionati(selezionati.map(item => {
            if (item.nome_prodotto === nome_prodotto && item.quantità < item.max) {
                item.quantità += 1;
            }
            return item;
        }))
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <TopBar showSearchBar={false} />

            {show ? (
                <DateTimePicker
                    value={date}
                    minimumDate={oggi}
                    maximumDate={max}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onDateChange}
                />
            ) : null}

            <Overlay overlayStyle={{ width: "90%", height: "95%" }} fullScreen={false} isVisible={overlay} onBackdropPress={() => setOverlay(false)}>
                <View>
                    <FlatList
                        style={{ height: "90%", width: "100%" }}
                        //mostro solo quelli non ancora selezionati da restituire
                        data={giacenza.filter(prodotto => selezionati.every(selezionato => prodotto.nome_prodotto !== selezionato.nome_prodotto))}
                        renderItem={({ item }) => (
                            <ListItem bottomDivider>
                                <Image source={item.immagine} resizeMethod='auto' resizeMode='cover' style={{ width: 64, height: 64 }} />
                                <ListItem.Content>
                                    <ListItem.Title style={{ color: "#9DE7CD", fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
                                    <ListItem.Title style={{ color: "#3E4349" }}>In magazzino: <Text style={{ fontWeight: 'bold' }}>{item.quantità}</Text></ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron name="playlist-add" color="#9DE7CD" size={40} onPress={() => addItemToSelezionati(item)} />
                            </ListItem>
                        )}
                        keyExtractor={item => item.id}
                    />
                    <Button
                        icon={<Icon size={24} name="chevron-left" color="#F8FFFC" />}
                        containerStyle={{ width: "100%", height: "10%", justifyContent: 'center' }}
                        buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 3 }}
                        titleStyle={{ color: "#F8FFFC", fontSize: 18 }}
                        title="ANNULLA"
                        onPress={() => setOverlay(false)}
                    />
                </View>
            </Overlay>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start' }}>Seleziona la data di consegna:</Text>
                <Button
                    icon={<Icon size={24} name="date-range" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ width: "80%" }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC" }}
                    title={datetoDDMMYYYY(date)}
                    onPress={() => setShow(true)}
                />

                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start', marginTop: 10 }}>Seleziona il punto di ritiro:</Text>
                <Button
                    icon={<Icon size={24} name="location-on" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ width: "80%" }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC" }}
                    title="Scegli sulla mappa"
                    onPress={() => {
                        API.getHubsByDate(dateToYYYYMMDD(date))
                        .then(response => response.json())
                        .then(array => {
                            if(array.length>0){
                                navigation.navigate("Map", {hubs: array, selezionato: hub, chiamante:"EffettuaOrdine"})
                            }
                            else{
                                alert("Non ci sono fermate disponibili per tale giorno. Scegliere una nuova data.")
                            }
                        })
                        .catch((error) => {
                            console.error(error)
                            alert("Si è verificato durante la ricerca dei punti di consegna!")
                        })
                        
                    }}

                />
              <Text style={{width: "80%", fontSize: 16, fontWeight: 'bold', color: '#70D0AE', alignItems: 'flex-start', marginTop: 0}}>Selezionato: {hub===null? "NESSUNO" : hub.via+" ("+hub.ore+":"+hub.minuti+")"}</Text>

                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start', marginTop: 10 }}>Articoli che vuoi restituire:</Text>

                <CheckBox
                    center
                    title='Vuoi abbinare un reso?'
                    checked={isSelected}
                    onPress={() => {
                        if(isSelected===true){
                            setSelezionati([]);
                        }
                        setSelection(!isSelected)
                    }}
                    checkedColor="#70D0AE"
                    checkedIcon="toggle-on"
                    uncheckedIcon="toggle-off"
                    containerStyle={{ backgroundColor: "white", borderColor: "white" }}
                    textStyle={{ color: "#3E4349" }}
                />

                {isSelected ? (
                        <View style={{ width: "95%", alignItems: 'center' }}>
                            {selezionati.map(item =>
                                <View key={item.nome_prodotto} style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginVertical: 5, borderColor: "#9DE7CD", borderWidth: 1, padding: 2, borderRadius: 5, backgroundColor: "#F8FFFC" }}>
                                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
                                        <Icon size={36} name="delete-forever" color="#9DE7CD" onPress={() => removeItemFromSelezionati(item)} />
                                        <Text style={{ color: "#9DE7CD", fontWeight: 'bold', fontSize: 16 }}>{item.nome_prodotto}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button
                                            onPress={() => decreaseItem(item.nome_prodotto)}
                                            title=""
                                            icon={<Icon size={20} name="remove" color="#9DE7CD" />}
                                            buttonStyle={{ backgroundColor: "#F8FFFC", borderColor: "#9DE7CD", borderWidth: 2 }}
                                            containerStyle={{ flex: 1 }}
                                        />
                                        <Text style={{ flex: 1, textAlign: 'center', color: "#3E4349" }}>{item.quantità}</Text>
                                        <Button
                                            onPress={() => increaseItem(item.nome_prodotto)}
                                            title=""
                                            icon={<Icon size={20} name="add" color="#F8FFFC" />}
                                            buttonStyle={{ backgroundColor: "#9DE7CD", borderColor: "#F8FFFC" }}
                                            containerStyle={{ flex: 1 }}
                                        />
                                    </View>
                                </View>
                            )}

                            <Button
                                icon={<Icon size={24} name="add" color="#F8FFFC" />}
                                iconRight={true}
                                containerStyle={{ width: "50%" }}
                                buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15, marginVertical: 5 }}
                                titleStyle={{ color: "#F8FFFC" }}
                                title="Aggiungi articolo"
                                onPress={() => setOverlay(true)}
                            />
                        </View>
                  
                ) : null}


            </ScrollView>

            <View style={{ width: "100%", borderTopWidth: 0.5, borderColor: "#9DE7CD", marginTop: 10 }}>
                <CartContext.Consumer>
                {carrello =>
                    <Button
                        icon={<Icon size={24} name="keyboard-arrow-right" color="#F8FFFC" />}
                        iconRight={true}
                        containerStyle={{ width: "45%", alignSelf: 'flex-end', padding: 5 }}
                        buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                        titleStyle={{ color: "#F8FFFC", fontSize: 16 }}
                        title="CONTINUA"
                        disabled={hub===null}
                        onPress={()=>navigation.navigate("PayOrdine", {data_scelta: dateToYYYYMMDD(date), hub: hub, prodotti: carrello.getArticoli(), prodotti_reso: selezionati})}
                    />
                }
                </CartContext.Consumer>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight / 2
    }

});

export default EffettuaOrdine;