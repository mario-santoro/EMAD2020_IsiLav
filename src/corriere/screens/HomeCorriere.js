import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon, Button, ListItem } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
//import PercorsoCorriere from '../components/PercorsoCorriere';
import GenericButton from '../../cliente/components/GenericButton';
import TopBar from '../components/TopBarCorriere';

import * as API from '../../cliente/services/API';

const HomeCorriere = ({ navigation }) => {
    const oggi = new Date();
    const max = new Date().setDate(oggi.getDate() + 365); //es. oggi + 365 giorni

    const [date, setDate] = useState(oggi);
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const newDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); //provare su iphone a cosa serve
        setDate(newDate);
    };

    const fermate = API.getFermate();
    return (

        <View style={styles.container}>
            <TopBar navigation={navigation} />
            <View style={styles.body}>
                {show ? (
                    <DateTimePicker
                        value={date}
                        minimumDate={oggi}
                        maximumDate={max}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                ) : null}
                <Button
                    icon={<Icon size={24} name="date-range" color="#F8FFFC" style={{ paddingLeft: 90 }} />}
                    iconRight={true}
                    containerStyle={{ width: "90%", }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", }}
                    titleStyle={{ color: "#F8FFFC", paddingLeft: 90 }}
                    title={date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear()}
                    onPress={() => setShow(true)}
                />

            </View>
            <FlatList
                data={fermate}
                renderItem={({ item }) => (
                    <ListItem onPress={() => navigation.navigate("DettaglioFermata", { via: item.via, ora: item.ora })} bottomDivider>

                        <ListItem.Content>
                            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold' }}>{item.via}</ListItem.Title>
                            <ListItem.Subtitle>ora: {item.ora}</ListItem.Subtitle>
                            <ListItem.Title style={{ color: "#3E4349", }}>Numero Clienti: <Text style={{ color: "#70D0AE", fontWeight: 'bold' }}> {item.numClienti} </Text></ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron name="navigate-next" color="#E9EBED" size={50} />
                    </ListItem>
                )}
                keyExtractor={item => item.id}
            />
            <View style={styles.bottom}>
                <Button
                    icon={<Icon size={24} name="location-on" color="#F8FFFC" style={{ paddingLeft: 90 }} />}
                    iconRight={true}
                    containerStyle={{ width: "90%", borderRadius: 5 }}
                    buttonStyle={{ backgroundColor: "#9DE7CD", }}
                    titleStyle={{ color: "#F8FFFC", paddingLeft: 90 }}

                   onPress={()=>navigation.navigate("Location")}
                    title="Visualizza percorso"
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
    body: {
        margin: "2%",
        padding: "5%",
        alignSelf: "center",
        borderColor: "#262626",
        flexDirection: "row",

    },
    bottom: {
        marginVertical: 15,
        justifyContent: 'flex-end',
        alignItems: "center",

    },


});
export default HomeCorriere;