import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import TopBar from '../components/TopBarCorriere';

import DomandaFAQ from '../components/DomandaFAQ';
import * as API from '../../cliente/services/API';
const FAQCorriere = ({navigation})=> {
  
    const faq = API.getFAQCorriere();

      

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
  export default FAQCorriere;