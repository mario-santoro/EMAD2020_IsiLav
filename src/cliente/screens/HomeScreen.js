import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import * as API from '../services/API';
import CategoryItem from '../components/CategoryItem';
import TopBar from '../components/TopBar';

const HomeScreen = ({navigation}) => {
  const [categorie, setCategorie] = useState([])

  useEffect(() => {
    API.getCategories()
    .then(response => response.json())
    .then(json => {
      setCategorie(json)
    })
    .catch((error) => {
      console.error(error)
      alert("Si è verificato un errore durante la ricerca delle categorie")
    })
  }, []);

  return (
    <View style={styles.container} >
      <TopBar />
      <FlatList
      data={categorie}
      renderItem={({item}) => (
        <CategoryItem name={item.nome_categoria} image={item.immagine}
        onPress={() => navigation.navigate('Category', {nome_categoria: item.nome_categoria})}
        />
      )}
      keyExtractor={item => item.nome_categoria}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
  
});

export default HomeScreen;