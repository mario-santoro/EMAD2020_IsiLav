import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView, StatusBar, Image } from 'react-native';
import TopBar from '../components/TopBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Button, Overlay, ListItem } from 'react-native-elements';
import * as API from '../services/API';


const ResoScreen = ({ navigation, route }) => {
    const [giacenza, setGiacenza] = useState([])

    var luogo = null;
    if (route.params?.luogo) {
        luogo = route.params.luogo;
    }
    const oggi = new Date();
    const max = new Date().setDate(oggi.getDate() + 365); //es. oggi + 365 giorni

    const [date, setDate] = useState(oggi);
    const [show, setShow] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const [selezionati, setSelezionati] = useState([]);

    const onDateChange = (event, selectedDate) => {
        const newDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); //provare su iphone a cosa serve
        setDate(newDate);
    };

    const addItemToSelezionati = (item) => {
        setOverlay(false);
        //Devo creare un clone, non inserire il riferimento dalla giacenza
        let temp = Object.assign({}, item);
        temp.max = item.quantità;
        setSelezionati(selezionati.concat(temp));
    };

    const removeItemFromSelezionati = (toDelete) => {
        setSelezionati(selezionati.filter(item => item.id !== toDelete.id));
    };

    const decreaseItem = (id) => {
        //Per ogni item nella lesta dei selezionati
        //se l'id corrisponde a quello cliccato
        //decremento di uno
        setSelezionati(selezionati.map(item => {
            if (item.id === id && item.quantità > 1) {
                item.quantità -= 1;
            }
            return item;
        }))
    };

    const increaseItem = (id) => {
        //Per ogni item nella lesta dei selezionati
        //se l'id corrisponde a quello cliccato
        //incremento di uno
        setSelezionati(selezionati.map(item => {
            if (item.id === id && item.quantità < item.max) {
                item.quantità += 1;
            }
            return item;
        }))
    };


    const dateToString = (data) => {
        return data.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear()
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#F8FFFC" }}>
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
                        data={giacenza.filter(item => selezionati.every(selezionato => item.id !== selezionato.id))} //mostro solo quelli non ancora selezionati da restituire
                        renderItem={({ item }) => (
                            <ListItem bottomDivider>
                                <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ width: 64, height: 64 }} />
                                <ListItem.Content>
                                    <ListItem.Title style={{ color: "#9DE7CD", fontWeight: 'bold' }}>{item.name}</ListItem.Title>
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
                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start' }}>Seleziona la data per il reso:</Text>
                <Button
                    icon={<Icon size={24} name="date-range" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ width: "80%" }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC" }}
                    title={date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear()}
                    onPress={() => setShow(true)}
                />

                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start', marginTop: 10 }}>Seleziona luogo per il reso:</Text>
                <Button
                    icon={<Icon size={24} name="location-on" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ width: "80%" }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC" }}
                    title="Scegli sulla mappa"
                    onPress={() => navigation.navigate("Map", {selezionato: luogo, chiamante: "Reso"})}     
                />
              <Text style={{width: "80%", fontSize: 16, fontWeight: 'bold', color: '#70D0AE', alignItems: 'flex-start', marginTop: 0}}>Selezionato: {luogo===null? "NESSUNO" : luogo.title}</Text>

                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start', marginTop: 10 }}>Articoli che vuoi restituire:</Text>

                <View style={{ width: "95%", alignItems: 'center' }}>
                    {selezionati.map(item =>
                        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', width: "100%", marginVertical: 5, borderColor: "#9DE7CD", borderWidth: 1, padding: 2, borderRadius: 5, backgroundColor: "#F8FFFC" }}>
                            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
                                <Icon size={36} name="delete-forever" color="#9DE7CD" onPress={() => removeItemFromSelezionati(item)} />
                                <Text style={{ color: "#9DE7CD", fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Button
                                    onPress={() => decreaseItem(item.id)}
                                    title=""
                                    icon={<Icon size={20} name="remove" color="#9DE7CD" />}
                                    buttonStyle={{ backgroundColor: "#F8FFFC", borderColor: "#9DE7CD", borderWidth: 2 }}
                                    containerStyle={{ flex: 1 }}
                                />
                                <Text style={{ flex: 1, textAlign: 'center', color: "#3E4349" }}>{item.quantità}</Text>
                                <Button
                                    onPress={() => increaseItem(item.id)}
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
                        title="Aggiungi"
                        onPress={() => setOverlay(true)}
                    />
                </View>
            </ScrollView>

            <View style={{ width: "100%", borderTopWidth: 0.5, borderColor: "#9DE7CD", marginTop: 10 }}>
                <Button
                    icon={<Icon size={24} name="keyboard-arrow-right" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ width: "45%", alignSelf: 'flex-end', padding: 5 }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC", fontSize: 16 }}
                    title="CONTINUA"
                    onPress={() => navigation.navigate("ConfermaReso", { data: dateToString(date), luogo: "Via Mare, 4, Salerno (SA)", selezionati: selezionati })}
                />
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

export default ResoScreen;