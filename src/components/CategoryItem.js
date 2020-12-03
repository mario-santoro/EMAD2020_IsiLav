import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

{/*<TouchableOpacity>
      <Card
      containerStyle={{borderRadius: 10, elevation: 5, backgroundColor: 'white', borderColor: 'cyan', borderWidth: 1}}
      >
      <Card.Image
      source={item.image}
      //source={require("../../images/bagno.jpg")}
      resizeMethod='auto'
      resizeMode='cover'
      style={{ marginBottom: 10, borderWidth: 0}}
      placeholderStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
      //PlaceholderContent={<ActivityIndicator color='black' size='large'/>}
      />
      <Card.Title>{item.name}</Card.Title>
      </Card>
      </TouchableOpacity>*/}

    {/*border radius immagine, colori*/}

const CategoryItem = ({ name, image, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );


const styles = StyleSheet.create({
    container: {
        margin: 15,
        elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    image: {
        resizeMode: 'cover',
        width: null,
        height: 200,
    },
    text: {
        color: 'white',
        padding: 3,
        fontSize: 32,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: 0.5, height: 0.5},
        textShadowRadius: 6, 

    },
});

export default CategoryItem;