import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
const SelectYM = () => {
 
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds(); //To get the Current Seconds
 
  console.log(year)
  return (
    <View style={{  marginTop: 5, alignSelf: "flex-start", }}>
      <Text style={{ fontWeight: "bold", fontSize: 16, color:"black"}}>Data scadenza:</Text>

      <View style={{  flexDirection: "row" }} >

        <RNPickerSelect

          style={{
            inputIOS: {       
              width: 120,
              fontSize: 18,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 4,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
            },
            inputAndroid: {
              width: 120,
              fontSize: 18,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 0.5,
              borderColor: 'purple',
              borderRadius: 8,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
            },
          }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' },
            { label: '7', value: '7' },
            { label: '8', value: '8' },
            { label: '9', value: '9' },
            { label: '10', value: '10' },
            { label: '11', value: '11' },
            { label: '12', value: '12' },

          ]}
          placeholder={{
            label: 'Mese',
            value: null,

          }}
         

        />
        <Text style={styles.text}>/</Text>
        <RNPickerSelect

          style={{
            inputIOS: {
           
              width: 120,
              fontSize: 18,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 4,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
            },
            inputAndroid: {
          
              width: 120,
              fontSize: 18,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 0.5,
              borderColor: 'purple',
              borderRadius: 8,
              color: 'black',
              paddingRight: 30, // to ensure the text is never behind the icon
            },
          }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: '2020', value: {year} },
            { label: '2021', value: '2021' },
            { label: '2022', value: '2022' },
            { label: '2023', value: '2023' },
            { label: '2024', value: '2024' },
            { label: '2025', value: '2025' },
            { label: '2026', value: '2026' },


          ]}
          placeholder={{
            label: 'Anno',
            value: null,

          }}


        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({



  text: {
    paddingTop: 12,
    fontSize: 18,
    color:"black"
  }
});



export default SelectYM;