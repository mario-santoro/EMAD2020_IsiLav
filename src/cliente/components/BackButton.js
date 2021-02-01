import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';

const BackButton = ({onPress}) => {
    return (
        <View style={{ flexDirection: "row", paddingTop: 20,paddingBottom:20,  height:80  }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Icon name="chevron-left" size={40} color="#E9EBED"></Icon>

                </TouchableOpacity >
            </View>
            <View style={{ flex: 9, flexDirection: "row", justifyContent: "center", marginRight: 30 }}>
                <Image
                    style={styles.logo}
                    source={require('../../../image/icona-verde.png')}
                />
                <Text style={styles.logoText}>IsiLav</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",

        borderRadius: 10,

    },
    logo: {
        width: 35,
        height: 35,
    },

    logoText: {
        fontSize: 25,
        color: '#48B08B',
        fontWeight: "bold"
    },
    text: {
        padding: 7,
        fontSize: 20,
        color: "#6AA84F",
    }
});

export default BackButton;