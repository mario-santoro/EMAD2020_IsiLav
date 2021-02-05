import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as API from '../services/API';
import TopBar from '../components/TopBar';

const SearchScreen = ({navigation, route}) => {
  const [prodotti, setProdotti] = useState([])
  const nome = route.params.nome;

  useEffect(() => {
    API.searchProductsByName(nome)
    .then(response => response.json())
    .then(json => {
      setProdotti(json)
    })
    .catch((error) => {
      console.error(error)
      alert("Si è verificato un errore durante la ricerca dei prodotti!")
    })
  }, []);

  return (
    <View style={styles.container}>
      <TopBar />
      <Text style={styles.titolo}>Risultati per '{nome.toUpperCase()}'</Text>
      <FlatList
        data={prodotti}
        renderItem={({ item }) => (
          <ListItem onPress={() => navigation.navigate("DettaglioProdotto", {prodotto: item})} bottomDivider>
            <Image source={{uri: item.immagine}} resizeMethod='auto' resizeMode='cover' style={{ width: 125, height: 128 }} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "#70D0AE", fontSize:18, fontWeight: 'bold' }}>{item.nome_prodotto}</ListItem.Title>
              <ListItem.Subtitle>{item.descrizione_breve}</ListItem.Subtitle>
              <ListItem.Title style={{color:"#3E4349", }}>Prezzo: <Text style={{color:"#70D0AE", fontWeight: 'bold' }}>{parseFloat(item.prezzo).toFixed(2)} €</Text></ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#E9EBED"  size={50} />
          </ListItem>
        )}
        keyExtractor={item => item.nome_prodotto}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  titolo:{
    fontSize:24,
    color:"#70D0AE",
    fontWeight:"bold",
    marginHorizontal:15,
    marginTop:10,
  }

});

export default SearchScreen;