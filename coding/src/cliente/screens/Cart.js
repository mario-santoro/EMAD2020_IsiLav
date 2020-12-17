import React from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import RNPickerSelect from 'react-native-picker-select';
//Ottengo le categorie disponibili dall'API
const cart = API.getCart();

const Cart = ({ navigation }) => {
    var tot = 0;
    var i;

    for (i = 0; i < cart.length; i++) {

        tot += cart[i].price * cart[i].quantità;
        console.log(tot);
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
                    <ListItem bottomDivider>

                        <View style={{ flexDirection: "row", }}>
                            <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ marginRight: 20, width: 125, height: 128 }} />
                            <ListItem.Content>
                                <ListItem.Title style={{ color: "#70D0AE",fontSize:20, fontWeight: 'bold' }}>{item.name}</ListItem.Title>
                                <ListItem.Subtitle style={{ fontSize:18, color: "#3E4349", marginBottom:10 }}><Text>Prezzo:</Text> <Text style={{fontSize:18, color:"#3E4349", fontWeight:"bold"}}>{parseFloat(item.price * item.quantità).toFixed(2)} €</Text></ListItem.Subtitle>
                                <ListItem.Title   >
                                    <View style={{paddingRight:20,   paddingBottom:5}}>
                                    <Text style={{ fontSize:18, color:"#3E4349"}} >Qt.à:</Text></View>
                                    <View style={{  backgroundColor: "#E9EBED", elevation: 2, borderRadius: 4, borderColor: "black", borderWidth: 0.5, height: 30, width: 90, }}>
                                        <RNPickerSelect

                                            pickerProps={{
                                                style: {
                                                    width: "100%",
                                                    color: 'black',
                                                    height: "100%",
                                                

                                                }
                                            }}
                                            onValueChange={(value) => console.log(value)}
                                            items={[
                                                { label: '1', value: 1 },
                                                { label: '2', value: 2 },
                                                { label: '3', value: 3 },
                                                { label: '4', value: 4 },
                                                { label: '5', value: 5 },
                                                { label: '6', value: 6 },
                                                { label: '7', value: 7 },
                                                { label: '8', value: 8 },
                                                { label: '9', value: 9 },
                                                { label: '10', value: 10 },
                                                { label: '11', value: 11 },
                                                { label: '12', value: 12 },

                                            ]}
                                            placeholder={{
                                                label: 'Q.tà',
                                                value: null,

                                            }}
                                            value={item.quantità}

                                        />

                                    </View>
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron   name="delete" color="#9DE7CD" size={40} ></ListItem.Chevron>
                        </View>
                    </ListItem>
                )}
                keyExtractor={item => item.id}
            />
            <View style={{    alignItems: "center", justifyContent: "center",   margin: 20,   }}>
                <Text style={{ color: "#70D0AE", fontWeight: 'bold',  marginBottom:-20, fontSize: 20 }}>Totale: {parseFloat(tot).toFixed(2)} €</Text>
                <GenericButton testo="Procedi all'ordine" onPress={()=>navigation.navigate("EffettuaOrdine")}/>
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
