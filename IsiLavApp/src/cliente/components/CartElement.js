import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

const CartElement = ({ item, deleteAction, changeAction}) => {
    const generatePickerItems = (max) => {
        let temp = []
        let i;
        for(i=1; i<=max; i++)
            temp.push({ label: i.toString(), value: i })
        return temp;
    }

    return (
        <ListItem bottomDivider>
            <View style={{ flexDirection: "row", }}>
                <Image source={{uri: item.immagine}} resizeMethod='auto' resizeMode='cover' style={{ marginRight: 20, width: 125, height: 128 }} />
                <ListItem.Content>
                    <ListItem.Title style={{ color: "#70D0AE", fontSize: 20, fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
                    <ListItem.Subtitle style={{ fontSize: 18, color: "#3E4349", marginBottom: 10 }}><Text>Prezzo:</Text> <Text style={{ fontSize: 18, color: "#3E4349", fontWeight: "bold" }}>{parseFloat(item.prezzo * item.quantità_scelta).toFixed(2)} €</Text></ListItem.Subtitle>
                    <ListItem.Title>
                        <View style={{ paddingRight: 20, paddingBottom: 5 }}>
                            <Text style={{ fontSize: 18, color: "#3E4349" }} >Qt.à:</Text>
                        </View>
                        
                        <View style={{ backgroundColor: "#E9EBED", elevation: 2, borderRadius: 4, borderColor: "black", borderWidth: 0.5, height: 30, width: 90}}>
                            <RNPickerSelect
                            pickerProps={{
                                style: {
                                    width: "100%",
                                    color: 'black',
                                    height: "100%",
                                }
                            }}
                            onValueChange={(value) => changeAction(item.nome_prodotto, value)}
                            items={generatePickerItems(10)} //item.quantità
                            placeholder={{
                                label: "Qt.à",
                                value: 1
                            }}
                            value={item.quantità_scelta}
                            />
                        </View>
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        <Text style={{ fontSize: 18, color: "#3E4349" }}>Tot. pezzi: {item.pezzi * item.quantità_scelta}</Text>
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron name="delete" color="#9DE7CD" size={40} onPress={() => deleteAction(item.nome_prodotto)} />
            </View>
        </ListItem>
    );
};


const styles = StyleSheet.create({


});

export default CartElement;