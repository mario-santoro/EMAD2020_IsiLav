import React, {useState} from 'react';

import {  StyleSheet, StatusBar, View, ScrollView } from 'react-native';

 
import BackButton from '../components/BackButton';
import TermsAndConditions from '../components/TermsAndCondition';

const TermAndCondition = ({ navigation }) => {
  
  return (
    <ScrollView
      style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
    >
      <View style={{ flex: 1, }}>
        <StatusBar
          backgroundColor="#70D0AE"
          barStyle="light-content"
        />
        <BackButton onPress={() => navigation.navigate('SignUp')}></BackButton>
      </View>
      <View style={styles.bottom}>

        <TermsAndConditions/>

      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  bottom: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",

    //position: 'absolute', height: 100, right: 0, left: 0, bottom: 50, top: 350
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width:"80%",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  linkP: {
    
    color:"#6AA84F",
    marginTop:10,

  },
 
});
export default TermAndCondition;
