import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import TopBar from '../components/TopBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Button } from 'react-native-elements';


const ConfermaResoScreen = ({navigation}) => {
  
    return (
    <View style={{flex: 1, backgroundColor: "white"}}>
        <TopBar showSearchBar={false} />

        <Button
            icon={<Icon size={24} name="keyboard-arrow-right" color="white" />}
            iconRight={true}
            containerStyle={{width: "45%", alignSelf: 'flex-end', padding: 10}}
            buttonStyle={{backgroundColor: "#6AA84F", borderRadius: 15}}
            titleStyle={{color: "white", fontSize: 16}}
            title="CONFERMA"
            onPress={() => navigation.navigate("ConfermaReso")}
        />

    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight/2
  }
  
});

export default ConfermaResoScreen;