import React from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import TopBar from '../components/TopBar';
import CartElement from '../components/CartElement';
import { CartContext } from '../services/Carrello';

const CartScreen = ({ navigation }) => {
    
    return (
        <CartContext.Consumer>
        {carrello =>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <TopBar />
                <View style={{alignItems: "center", marginTop: 15}}>
                    <Text style={{fontSize: 24, color: '#70D0AE', fontWeight: "bold"}}>Carrello</Text>
                </View>
                <FlatList
                    data={carrello.getArticoli()}
                    renderItem={({ item }) => (
                        <CartElement
                        item={item}
                        deleteAction={carrello.removeProdotto}
                        changeAction={carrello.changeProdottoQuantity}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
    
                <View style={{alignItems: "center", justifyContent: "center", margin: 15}}>
                    <Text style={{color: "#70D0AE", fontWeight: 'bold', fontSize: 20}}>Totale: {carrello.getTotale().toFixed(2)} €</Text>
                </View>
            </View>
        }
        </CartContext.Consumer>
    );
};

export default CartScreen;
