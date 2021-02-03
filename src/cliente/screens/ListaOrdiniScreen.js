import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopBar from '../components/TopBar';
import { Icon } from 'react-native-elements';
import * as API from '../services/API';
import { UserContext } from "../services/Utente";
import {datetoDDMMYYYY} from "../services/Utils";

const Item = ({ item, onPress }) => (
  <TouchableOpacity  onPress={onPress} style={styles.item}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "column", flex: 8 }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.baseTextBold}>Num. ordine: </Text>
          <Text style={styles.baseText}>{item.id_ordine}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.baseTextBold}>Data: </Text>
          <Text style={styles.baseText}>{datetoDDMMYYYY(new Date(item.data_operazione))}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.baseTextBold}>Totale: </Text>
          <Text style={styles.baseText}>{item.totale}€</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.baseTextBold}>Stato: </Text>
          <Text style={styles.baseText}>{item.stato}</Text>
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Icon name="navigate-next" color="#E9EBED" size={50} ></Icon>
      </View>
    </View>
  </TouchableOpacity>
);

const ListaOrdini = ({ navigation }) => {
  const [ordini, setOrdini] = useState([]);
  const sessione = useContext(UserContext);

  useEffect(() => {
    API.getOrdersByUser(sessione.getUser().email)
    .then(response => response.json())
    .then(json => {
      //console.log(json) //per vedere la struttura degli ordini
      setOrdini(json)
    })
    .catch((error) => {
      console.error(error)
      alert("Si è verificato un errore durante la ricerca degli ordini!")
    })
  }, []);
  
  const renderItem = ({ item }) => {
    return (
      <Item 
        item={item}
        onPress={()=>navigation.navigate("DettaglioOrdine", {ordine: item})}
      />
    );
  };

  return (
    <View style={{ flexDirection: "column", flex: 1, backgroundColor: 'white' }}>
      <View  >
        <StatusBar
          backgroundColor="#5f9747"
          barStyle="light-content"
        />
        <TopBar />
        <View style={{
          alignItems: "center", marginTop: 15,
        }}>
          <Text style={styles.titolo}>I miei ordini</Text>
        </View>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={ordini}
          renderItem={renderItem}
          keyExtractor={(item) => item.id_ordine.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

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