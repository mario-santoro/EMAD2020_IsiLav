import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

const TopBar = ({ name, image, onPress }) => (
    <View>
        <StatusBar
        backgroundColor="#5f9747"
        barStyle="light-content"
        />

        <Header
        backgroundColor="#6AA84F"
        barStyle="light-content"
        leftComponent={{ icon: 'menu', color: '#FFFFFF' }}
        centerComponent={<View style={{flexDirection: 'row', alignItems: 'center'}}><Image source={require('../../images/icona-bianca.png')} style={{height: 35, width: 35}} /><Text style={{color: "white", marginLeft: 2, fontSize: 28, fontWeight: "bold"}}>IsiLav</Text></View>}
        //centerComponent={{ text: 'IsiLav', style: { color: '#FFFFFF', fontSize: 25 } }}
        rightComponent={{ icon: 'shopping-cart', color: '#FFFFFF' }}
        />

        <SearchBar
        platform='ios'
        containerStyle={{backgroundColor: "#6AA84F", borderWidth: 0, marginTop: -9}}
        inputStyle={{backgroundColor: "white"}}
        inputContainerStyle={{backgroundColor: "white"}}
        cancelButtonTitle="Annulla"
        placeholder="Cerca nel catalogo..."
        cancelButtonProps={{ color: "white"}}
        />
    </View>
  );


const styles = StyleSheet.create({
    item: {
        margin: 15,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#6AA84F',
        flexDirection: 'column',
    },
    image: {
        borderTopLeftRadius: 10, //iOS compatibile?
        borderTopRightRadius: 10, //iOS compatibile?
        resizeMode: 'cover',
        width: null,
        height: 280,
        justifyContent: 'center'
    },
    name: {
        alignSelf: 'flex-end',
        color: 'white',
        padding: 3,
        fontSize: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default TopBar;