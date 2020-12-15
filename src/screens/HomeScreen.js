import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import TopBar from '../components/TopBar';
import * as API from '../services/API';

//Ottengo le categorie disponibili dall'API
const categories = API.getCategories();

const HomeScreen = ({navigation}) => {

  return (
    <View 
    style={styles.container}
    >
    
    <TopBar showSearchBar={true}/>
    
    <FlatList
    data={categories}
    renderItem={({item}) => (
      <CategoryItem name={item.name} image={item.image} onPress={() => onCategoryPress(navigation, item.id)} />
    )}
    keyExtractor={item => item.id}
    />

    </View>
  );
};

const onCategoryPress = (navigation, itemID) => {
  navigation.navigate('Category')
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  
});

export default HomeScreen;