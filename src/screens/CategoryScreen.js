import React from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import CategoryItem from '../components/CategoryItem';
import TopBar from '../components/TopBar';
import * as API from '../services/API';

//Ottengo le categorie disponibili dall'API
const categories = API.getProductsFromCategory();

const CategoryScreen = ({navigation}) => {

  return (
    <View 
    style={styles.container}
    >
    
    <TopBar />

    <FlatList
    data={categories}
    renderItem={({item}) => (
      <ListItem bottomDivider>
      <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{width: 125, height: 128}} />
      <ListItem.Content>
      <ListItem.Title style={{color: "#6AA84F", fontWeight: 'bold'}}>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      <ListItem.Title>Prezzo: <Text style={{fontWeight: 'bold'}}>{parseFloat(item.price).toFixed(2)} €</Text></ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron size={32} />
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
  }
  
});

export default CategoryScreen;