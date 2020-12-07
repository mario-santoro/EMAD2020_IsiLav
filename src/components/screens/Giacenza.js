import React, { useState } from 'react';
import { SafeAreaView, Button, View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import Lis from '../components/ListaGiacenza';

//Ottengo le categorie disponibili dall'API
const giacenza = API.getGiacenza();



const Giacenza = ({ navigation }) => {
 

    return (
        <View  
            style={styles.container}
        >

            <TopBar navigation={navigation} />
            <View style={{
                alignItems: "center", marginTop: 15,
            }}>
                <Text style={styles.titolo}>La mia giacenza</Text>
            </View>
            <FlatList 
                data={giacenza}
                renderItem={({ item }) => (

                   <Lis item={item}/>

                )

                }
                keyExtractor={item => item.id}

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
        fontSize: 20,
        color: '#6AA84F',
        fontWeight: "bold"

    },

});

export default Giacenza;
