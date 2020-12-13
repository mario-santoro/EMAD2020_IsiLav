import React from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import CategoryItem from '../components/CategoryItem';
import TopBar from '../components/TopBar';
import * as API from '../services/API';

//Ottengo le categorie disponibili dall'API
const categories = API.getProductsFromCategory();
var risultato="prova";
const CategoryScreen = ({ navigation }) => {

  return (
    <View
      style={styles.container}
    >

      <TopBar navigation={navigation} />
      <Text style={styles.titolo}>Risultati per '{risultato.toUpperCase()}'</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <ListItem onPress={() => navigation.navigate("DettaglioProdotto")} bottomDivider>
            <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ width: 125, height: 128 }} />
            <ListItem.Content>
              <ListItem.Title style={{ color: "#70D0AE", fontSize:18, fontWeight: 'bold' }}>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
              <ListItem.Title style={{color:"#3E4349", }}>Prezzo: <Text style={{color:"#70D0AE", fontWeight: 'bold' }}>{parseFloat(item.price).toFixed(2)} €</Text></ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color="#E9EBED"  size={50} />
          </ListItem>
        )}
        keyExtractor={item => item.id}
      />

    </View>
  );
};

const onPress = (itemID) => {
  alert(itemID);
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

export default CategoryScreen;
