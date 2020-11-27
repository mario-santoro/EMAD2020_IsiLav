import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View
    style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white'}}
    >
      <StatusBar
      backgroundColor="#6AA84F"
      barStyle="light-content"
      />

      <Text style={{fontWeight: "bold", fontSize: 45, color: "#6AA84F", marginBottom: 20}}>Wewe</Text>
    </View>
  );
};
 
export default HomeScreen;