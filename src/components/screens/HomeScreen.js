import React from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, Image } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import CategoryItem from '../components/CategoryItem';
import TopBar from '../components/TopBar';

const categories = [ //Da ottenere dinamicamente con API
  {
    id: '0',
    name: 'Bagno',
    image: require("../../image/bagno.jpg")
  },
  {
    id: '1',
    name: 'Letto',
    image: require("../../image/letto.jpg")
  },
  {
    id: '2',
    name: 'Tavola',
    image: require("../../image/tavola.jpg")
  },
  /*
  {
    id: '3',
    name: 'CategoriaX',
    image: require("../../images/bagno.jpg")
  },
  {
    id: '4',
    name: 'CategoriaY',
    image: require("../../images/letto.jpg")
  },
  {
    id: '5',
    name: 'CategoriaZ',
    image: require("../../images/tavola.jpg")
  },
  */
];

const HomeScreen = ({navigation}) => {

  return (
    <View 
    style={styles.container}
    >
    
    <TopBar navigation={navigation}/>
    
    <FlatList
    data={categories}
    renderItem={({item}) => (
    
      <CategoryItem name={item.name} image={item.image}    onPress={() => navigation.navigate('Category')} 
      //onPress={() => onPress(item.id)}
       />
      
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

export default HomeScreen;