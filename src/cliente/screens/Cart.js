import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import CartElement from '../components/CartElement';


//Ottengo i prodotti nel carrello disponibili dall'API
const cart = API.getCart();


const Cart = ({ navigation }) => {

    var tot = 0;

    function getTot(){
        return tot;
    }
    function setTot(newtot){
        tot=tot+ newtot;
    }
    for (var i of cart) {
        tot = (i.price * i.quantità) + tot;
    }


    return (
        <View
            style={styles.container}
        >

            <TopBar navigation={navigation} />
            <View style={{
                alignItems: "center", marginTop: 15,
            }}>
                <Text style={styles.titolo}>Carrello</Text>
            </View>
            <FlatList
                data={cart}
                renderItem={({ item }) => (

                    <CartElement item={item}   />

                )}
                keyExtractor={item => item.id}
            />
 
            <View style={{ alignItems: "center", justifyContent: "center", margin: 20, }}>
                <Text style={{ color: "#70D0AE", fontWeight: 'bold', marginBottom: -20, fontSize: 20 }}>Totale: {parseFloat(tot).toFixed(2)} €</Text>
                <GenericButton testo="Procedi all'ordine" onPress={() => navigation.navigate("EffettuaOrdine")} />
            </View>
        </View>
    );
};

const onPress = (itemID) => {
    alert(itemID);
};


const styles = StyleSheet.create({
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

export default Cart;
