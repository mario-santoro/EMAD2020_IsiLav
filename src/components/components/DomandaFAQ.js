import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const shouldShow = true;

const CategoryItem = ({ domanda, risposta, shouldShow }) => {

    

    return (
        <View style={styles.sezioneFaq}>

            <TouchableOpacity onPress={() => alert(!shouldShow)}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.faq}> {domanda} </Text>
                    <Image
                        style={styles.img}
                        source={require('../image/rArrow.png')}
                    />
                </View>
                <View>{shouldShow ?
                    <View style={styles.risposte}>
                        <Text>{risposta}</Text>
                    </View>
                    : null}
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    risposte: {
        opacity: 0,
        width: 0,
        height: 0,
    },

    faq: {
        fontSize: 20,
        fontWeight: "bold",
        margin: "5%",
        flex: 1,
        justifyContent: 'flex-start',
    },

    sezioneFaq: {
        margin: "2%",

        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#262626",
    },

    img: {
        justifyContent: 'flex-end',
        margin: "5%",
        width: 25,
        height: 25,
    },
});

export default CategoryItem;