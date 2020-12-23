import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';

import * as API from '../services/API';
import RNPickerSelect from 'react-native-picker-select';

const cart = API.getCart();

const CartElement = ({ item }) => {
        
    const [pezzi, setPezzi] = useState(item.quantità);

    
   
    return (

        <ListItem bottomDivider>
            <View style={{ flexDirection: "row", }}>
                <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ marginRight: 20, width: 125, height: 128 }} />
                <ListItem.Content>
                    <ListItem.Title style={{ color: "#70D0AE", fontSize: 20, fontWeight: 'bold' }}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ fontSize: 18, color: "#3E4349", marginBottom: 10 }}><Text>Prezzo:</Text> <Text style={{ fontSize: 18, color: "#3E4349", fontWeight: "bold" }}>{parseFloat(item.price * pezzi).toFixed(2)} €</Text></ListItem.Subtitle>
                    <ListItem.Title   >
                        <View style={{ paddingRight: 20, paddingBottom: 5 }}>
                            <Text style={{ fontSize: 18, color: "#3E4349" }} >Qt.à:</Text>
                        </View>
                        <View style={{ backgroundColor: "#E9EBED", elevation: 2, borderRadius: 4, borderColor: "black", borderWidth: 0.5, height: 30, width: 90, }}>
                            <RNPickerSelect

                                pickerProps={{
                                    style: {
                                        width: "100%",
                                        color: 'black',
                                        height: "100%",
                                    }
                                }}

                                onValueChange={(value) => setPezzi(value)}

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
                    <ListItem.Subtitle>
                        <Text style={{ fontSize: 18, color: "#3E4349" }} >Tot pezzi: {pezzi * 5}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron name="delete" color="#9DE7CD" size={40} />
            </View>
        </ListItem>
    );
};


const styles = StyleSheet.create({


});

export default CartElement;
