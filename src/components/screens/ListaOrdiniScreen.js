import React, { useState } from "react";
import {  Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopBar from '../components/TopBar';
import { Icon } from 'react-native-elements';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"

  },
  {
    id: "3Oc68afc-c605-48d3-a4f8-fb91a97f",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "18694a0f-3da1-471f-bd96-1455719d",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "3ac6afc-c605-48d3-a4f8-fbd91aa7",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455712",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "3ac68af-c605-48d3-a4f8-fbd91a97",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "58694a0f-3da1-471f-bd96-14571e29",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "3ac68afc-c605-48d-a4f8-fbd91a97f",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "58694a0f-3da1-471f-d96-14557129d7",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "column", flex: 8 }}>
         <View style={{ flexDirection: "column" }}>
           <Text style={styles.baseTextBold}>N° Ordine:</Text>
           <Text style={styles.baseText}>{item.id}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
        <Text style={styles.baseTextBold}>Data:</Text>
        <Text style={styles.baseText}> {item.data}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
        <Text style={styles.baseTextBold}>Totale:</Text>
        <Text style={styles.baseText}> {item.tot}€</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
        <Text style={styles.baseTextBold}>Stato:</Text>
        <Text style={styles.baseText}> {item.Stato}</Text>
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Icon name="navigate-next" color="lightgrey" size={50} ></Icon>
      </View>
    </View>
  </TouchableOpacity>
);

const ListaOrdini = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "white";

    return (

      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />

    );
  };

  return (
    <View
      style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}
    >
      <View  >
        <StatusBar
          backgroundColor="#5f9747"
          barStyle="light-content"
        />
        <TopBar navigation={navigation}/>
        <View style={{
          alignItems: "center", marginTop: 15,
        }}>
          <Text style={styles.titolo}>I miei ordini</Text>
        </View>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

      </SafeAreaView>



    </View>

  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 3,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  baseText: {
    fontSize: 14,
  },
  baseTextBold: {
    fontWeight: "bold",
    fontSize: 14,

  },
  titolo: {
    fontSize: 20,
    color: '#6AA84F',
    fontWeight: "bold"

  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default ListaOrdini;