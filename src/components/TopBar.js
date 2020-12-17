import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

const TopBar = ({showSearchBar=true}) => (
    <View>
        <StatusBar
        backgroundColor="#70D0AE"
        barStyle="light-content"
        />

        <Header
        backgroundColor="#9DE7CD"
        barStyle="light-content"
        leftComponent={{ icon: 'menu', size: 30, color: '#FFFFFF', onPress: () => alert("ciao") }}
        centerComponent={<View style={{flexDirection: 'row', alignItems: 'center'}}><Image source={require('../../images/icona-bianca.png')} style={{height: 35, width: 35}} /><Text style={{color: "white", marginLeft: 2, fontSize: 28, fontWeight: "bold"}}>IsiLav</Text></View>}
        //centerComponent={{ text: 'IsiLav', style: { color: '#FFFFFF', fontSize: 25 } }}
        rightComponent={{ icon: 'shopping-cart', size: 30, color: '#FFFFFF' }}
        />

        <View>
        {!showSearchBar ? null : 
        <SearchBar
        platform='ios'
        containerStyle={{backgroundColor: "#9DE7CD", borderWidth: 0, marginTop: -11, paddingTop: 8}}
        inputStyle={{backgroundColor: "white" }}
        inputContainerStyle={{backgroundColor: "white", padding: 0, paddingBottom: 0}}
        cancelButtonTitle="Annulla"
        placeholder="Cerca nel catalogo..."
        cancelButtonProps={{ color: "white"}}
        />
        }
        </View>
    </View>
  );

export default TopBar;