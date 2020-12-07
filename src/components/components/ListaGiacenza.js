import React, { useState } from 'react';
import { SafeAreaView, Button, View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import * as API from '../services/API';

const ListaGiacenza = ({item} ) => {
  const dat = API.getDate();
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <ListItem  onPress={()=>setShouldShow(!shouldShow)}  bottomDivider>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", width: 380, }}>
          <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ width: 125, height: 128 }} />
          <ListItem.Content>
            <ListItem.Title style={{ color: "#6AA84F", fontWeight: 'bold', marginBottom: 30, marginLeft: 10 }}>{item.name}</ListItem.Title>
            <ListItem.Title style={{ marginLeft: 10 }}>Q.tà: <Text style={{ fontWeight: 'bold', }}>{item.quantità}</Text></ListItem.Title>
          </ListItem.Content>
          <Icon style={{ marginTop: 50, }} name="expand-more" color="lightgrey" size={32} ></Icon>
        </View>

        <SafeAreaView style={styles.containerP} >
          <View >
            {shouldShow ? (
              <View >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: 10, paddingTop: 5, }}>Data ordine</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: "62%", paddingTop: 5, }}>Q.tà</Text>
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
      </View>

    </ListItem>

  );
};

const styles = StyleSheet.create({




});

export default ListaGiacenza;