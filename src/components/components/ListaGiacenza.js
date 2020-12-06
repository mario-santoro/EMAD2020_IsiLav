import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import * as API from '../services/API';

const ListaGiacenza = ({ shouldShow }) => {
  const dat = API.getDate();

  return (
    <SafeAreaView style={styles.containerP} >
      <View >
        {!shouldShow ? (
          <View >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: 'bold', fontSize:16, paddingLeft:10, paddingTop:5, }}>Data ordine</Text>
              <Text style={{ fontWeight: 'bold',  fontSize:16, paddingLeft:"62%",paddingTop:5,}}>Q.tà</Text>
            </View>
            <FlatList
              data={dat}
              renderItem={({ item }) => (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title  >{item.data}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Title style={{ fontWeight: 'bold' }}>{item.quantità}</ListItem.Title>
                </ListItem>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

   


});

export default ListaGiacenza;