import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopBar from '../components/TopBar';
import { Icon } from 'react-native-elements';
 
 
 
const DATA = [
  {
    id: "bd7a-c1b1-46c2-aed5",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"

  },
  {
    id: "3Oc6-c605-48d3-a4f8",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "1869-3da1-471f-bd96",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "3ac6-c605-48d3-a4f8",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "5819-3da1-471f-bd96",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "3ac9-c605-48d3-a4f8",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "5869-3da1-471f-bd96",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "3aM6-c605-48d-a4f8",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
  {
    id: "52s69-3da1-471f-d961",
    data: "01/12/2020",
    tot: "100",
    Stato: "IN PREPARAZIONE"
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity  onPress={onPress} style={styles.item}>
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
        <Icon name="navigate-next" color="#E9EBED" size={50} ></Icon>
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
      
        onPress={()=>navigation.navigate("DettaglioOrdine", {id: item.id})}
      
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
        <TopBar navigation={navigation} />
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
    borderColor: "#E9EBED",
    borderRadius: 10,
    backgroundColor:"#F8FFFC"
  },
  baseText: {
    fontSize: 20,
    color:"#3E4349"
  },
  baseTextBold: {
    fontWeight: "bold",
    fontSize: 20,
    color:"#3E4349"
  },
  titolo: {
    fontSize: 24,
    color: '#70D0AE',
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