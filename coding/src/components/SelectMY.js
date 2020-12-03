import React, { useState, useCallback } from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import MonthYearPicker from 'react-native-simple-month-year-picker';
const SelectYM = () => {
var  month;
  const [show, setShow] = useState(false);
  const [year, setYear] = useState("");
  const showPicker = useCallback((value) => setShow(value), []);

  return (
    <View  >
   
      <Text>Scegli data di scadenza</Text>
      
      <TouchableOpacity onPress={() => showPicker(true)}><Text>premi</Text></TouchableOpacity>
      {show && (
         <MonthYearPicker
    isShow={show}
   
    close={() => setShow(false)} //setState isShow to false
    onChangeYear={(year) => setYear(year)}
    onChangeMonth={(month) => console.log(month)}
/>  )}
<Text>Anno: {year}, Mese: {month} </Text>
</View>
  );
};

const styles = StyleSheet.create({
 
  

  text: {
    padding: 7,
    fontSize: 20,
    color: "#6AA84F",
  }
});



export default SelectYM;