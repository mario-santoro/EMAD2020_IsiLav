import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import Lis from '../components/ListaGiacenza';
import { UserContext } from '../services/Utente';

const Giacenza = ({ navigation }) => {
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


    return (
        <View style={styles.container}>
            <TopBar />
            <View style={{alignItems: "center", marginTop: 15}}>
                <Text style={styles.titolo}>La mia giacenza</Text>
            </View>

            <FlatList 
                data={giacenza}
                renderItem={({ item }) => (
                   <Lis prodotto={item}/>
                )}
                keyExtractor={item => item.nome_prodotto}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerP: {
        width: 300,
        paddingTop: 50,
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titolo: {
        fontSize: 24,
        color: '#70D0AE',
        fontWeight: "bold"

    },

});

export default Giacenza;
