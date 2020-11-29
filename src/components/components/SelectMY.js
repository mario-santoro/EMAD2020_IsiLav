import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native'

import MonthYearPicker from 'react-native-simple-month-year-picker';
const SelectYM = () => {
    const [isShow, setIsShow] = useState(true);
  return (
    <View  >
   
         <MonthYearPicker
    isShow={isShow}
    close={() => setIsShow(false)} //setState isShow to false
    onChangeYear={(year) => console.log(year)}
    onChangeMonth={(month) => console.log(month)}
/>
</View>
  );
};

const styles = StyleSheet.create({
 
    button: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection:"column",
    width: "80%",
  },

  text: {
    padding: 7,
    fontSize: 20,
    color: "#6AA84F",
  }
});

export default SelectYM;