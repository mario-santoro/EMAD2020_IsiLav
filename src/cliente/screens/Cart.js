import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TopBar from '../components/TopBar';
import CartElement from '../components/CartElement';
import { CartContext } from '../services/Carrello';
import { Button } from 'react-native-elements';

const CartScreen = ({ navigation }) => {
    
    return (
        <CartContext.Consumer>
        {carrello =>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <TopBar showSearchBar={false} />
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
                    keyExtractor={item => item.nome_prodotto}
                />
    
                <View style={{alignItems: "center", justifyContent: "center", margin: 15}}>
                    <Text style={{color: "#70D0AE", fontWeight: 'bold', fontSize: 20}}>Totale: {carrello.getTotale().toFixed(2)} €</Text>
                    <Button
                        disabled={!carrello.getLunghezza()>0}
                        containerStyle={{ width: "80%" }}
                        buttonStyle={{ backgroundColor: "#9DE7CD", borderRadius: 10, marginVertical: 3 }}
                        titleStyle={{ color: "#F8FFFC", fontSize: 20}}
                        title="Procedi all'ordine"
                        onPress={() => navigation.navigate("EffettuaOrdine")}
                    />
                </View>
            </View>
        }
        </CartContext.Consumer>
    );
};

export default CartScreen;
