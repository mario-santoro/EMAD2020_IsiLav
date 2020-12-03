import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

const TopBar = () => (
    <View>
        <StatusBar
        backgroundColor="#5f9747"
        barStyle="light-content"
        />

        <Header
        backgroundColor="#6AA84F"
        barStyle="light-content"
        leftComponent={{ icon: 'menu', size: 30, color: '#FFFFFF', onPress: () => alert("ciao") }}
        centerComponent={<View style={{flexDirection: 'row', alignItems: 'center'}}><Image source={require('../../images/icona-bianca.png')} style={{height: 35, width: 35}} /><Text style={{color: "white", marginLeft: 2, fontSize: 28, fontWeight: "bold"}}>IsiLav</Text></View>}
        //centerComponent={{ text: 'IsiLav', style: { color: '#FFFFFF', fontSize: 25 } }}
        rightComponent={{ icon: 'shopping-cart', size: 30, color: '#FFFFFF' }}
        />

        <SearchBar
        platform='ios'
        containerStyle={{backgroundColor: "#6AA84F", borderWidth: 0, marginTop: -11, paddingTop: 8}}
        inputStyle={{backgroundColor: "white" }}
        inputContainerStyle={{backgroundColor: "white", padding: 0, paddingBottom: 0}}
        cancelButtonTitle="Annulla"
        placeholder="Cerca nel catalogo..."
        cancelButtonProps={{ color: "white"}}
        />
    </View>
  );


const styles = StyleSheet.create({
    
});

export default TopBar;