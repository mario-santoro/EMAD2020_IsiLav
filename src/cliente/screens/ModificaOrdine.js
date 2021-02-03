import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView, StatusBar, Image } from 'react-native';
import TopBar from '../components/TopBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Button, Overlay, ListItem } from 'react-native-elements';
import * as API from '../services/API';
import Map from '../components/Map';

const onDateChange = (event, selectedDate) => {
    const newDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); //provare su iphone a cosa serve
    setDate(newDate);
};

const ModificaOrdine = ({ navigation }) => {
    const oggi = new Date();
    const max = new Date().setDate(oggi.getDate() + 365); //es. oggi + 365 giorni

    const [date, setDate] = useState(oggi);
    const [show, setShow] = useState(false);

    const [selezionato, setSelezionato] = useState(null);

    const markers = API.getLuoghi();


    return (
        <View style={{ flex: 1, backgroundColor: "#F8FFFC" }}>
            <TopBar />

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



            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start' }}>Cambia la data del ritiro:</Text>
                <Button
                    icon={<Icon size={24} name="date-range" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ width: "80%" }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC" }}
                    title={date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear()}
                    onPress={() => setShow(true)}
                />

                <Text style={{ width: "80%", fontSize: 16, color: '#3E4349', alignItems: 'flex-start', marginTop: 10 }}>Cambia luogo per il ritiro:</Text>

            </ScrollView>
       
            <Map/>
         

            <View style={{ flexDirection: 'row', width: "100%", borderTopWidth: 0.5, borderColor: "#9DE7CD", marginTop: 10 }}>
                <Button
                    icon={<Icon size={24} name="keyboard-arrow-left" color="#9DE7CD" />}
                    containerStyle={{ flex: 1, alignSelf: 'flex-start', padding: 5 }}
                    buttonStyle={{ borderColor: "#9DE7CD", borderRadius: 15, borderWidth: 1 }}
                    titleStyle={{ color: "#9DE7CD", fontSize: 16 }}
                    title="INDIETRO"
                    type="outline"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    icon={<Icon size={24} name="done" color="#F8FFFC" />}
                    iconRight={true}
                    containerStyle={{ flex: 1, alignSelf: 'flex-end', padding: 5 }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 15 }}
                    titleStyle={{ color: "#F8FFFC", fontSize: 16 }}
                    title="PROCEDI"
                    onPress={() => navigation.navigate("SuccessScreen")}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight / 2,
        
  
    }

});

export default ModificaOrdine;