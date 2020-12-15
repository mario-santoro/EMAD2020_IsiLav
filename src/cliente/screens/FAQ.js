import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
 import  TopBar from '../components/TopBar';

import DomandaFAQ from '../components/DomandaFAQ';
import * as API from '../services/API';
const FAQ = ({navigation})=> {
  
    const faq = API.getFAQ();

      

        return (
            <View style={styles.container}>
                <TopBar navigation={navigation} />
                <FlatList
                  data={faq}
                  renderItem={({ item }) => (
                    <DomandaFAQ domanda={item.domanda} risposta={item.risposta}/>
                  )}
                  keyExtractor={item => item.id}
                />
            </View>
        );
    
}

const styles = StyleSheet.create({
   
    container: {
        
        backgroundColor: "white",
        flex: 1,
    },

    top: {

        justifyContent: 'flex-start',
        margin: "5%",
        alignItems: "center",

    },
  });
  export default FAQ;