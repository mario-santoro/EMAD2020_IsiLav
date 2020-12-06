import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'


const HorizLine = ({testo}) => {
 
  return (
    <View style={styles.container}>    
    
    <Text style={styles.baseText} >{testo}</Text>

    <View
      style={{
        borderBottomColor: '#6AA84F',
        borderBottomWidth: 2,
        width: "60%",
        
      }}
    />
  </View>
  );
};

const styles = StyleSheet.create({


    container: {
        width:"100%", alignItems: "center", justifyContent: 'center',
        flexDirection: "row", padding:10
    },
  
    baseText: {
      fontSize: 18,
      color: '#6AA84F',
      width: "40%"
    }
  
  });

export default HorizLine;