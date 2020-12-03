import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryItem = ({ name, image, onPress }) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image style={styles.image} source={image} />
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );


const styles = StyleSheet.create({
    item: {
        margin: 15,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#6AA84F',
        flexDirection: 'column',
    },
    image: {
        borderTopLeftRadius: 10, //iOS compatibile?
        borderTopRightRadius: 10, //iOS compatibile?
        resizeMode: 'cover',
        width: null,
        height: 280,
        justifyContent: 'center'
    },
    name: {
        alignSelf: 'flex-end',
        color: 'white',
        padding: 3,
        fontSize: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default CategoryItem;