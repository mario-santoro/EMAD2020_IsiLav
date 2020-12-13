import React, { useState } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native'


const LogoNome = () => {
 
  return (
    <View style={styles.bar}>
    <Image
      style={styles.logo}
      source={require('C:/Users/mario/Desktop/DInfUniSa/MagistraleMatricola_866/2anno/Enterprise Mobile Application Development/IsiLav/image/icona-verde.png')}
    />      
    <Text style={styles.logoText}>IsiLav</Text>
  </View>
  );
};

const styles = StyleSheet.create({
    
  bar:{
    //flex:1,
    flexDirection:"row",
   // alignItems:"center",
    //justifyContent:"center",
    paddingTop:20,
  },
    logo: {
        width:56,
        height: 56,
      },
    
      logoText: {
        fontSize: 40,
        color:'#48B08B',
        fontWeight: "bold"
      },
});

export default LogoNome;