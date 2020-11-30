import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';

const BackButton = ({onPress}) => {
    return (
        <View style={{ flexDirection: "row", paddingTop: 20, paddingBottom:10, backgroundColor: "#6AA84F"}}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Icon name="arrow-back" color="white"></Icon>

                </TouchableOpacity >
            </View>
            <View style={{ flex: 9, flexDirection: "row", justifyContent: "center", marginRight: 30 }}>
                <Image
                    style={styles.logo}
                    source={require('C:/Users/mario/Desktop/DInfUniSa/MagistraleMatricola_866/2anno/Enterprise Mobile Application Development/IsiLav/image/icona-bianca.png')}
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
        backgroundColor: "#6AA84F",

        borderRadius: 10,

    },
    logo: {
        width: 35,
        height: 35,
    },

    logoText: {
        fontSize: 25,
        color: 'white',
        fontWeight: "bold"
    },
    text: {
        padding: 7,
        fontSize: 20,
        color: "white",
    }
});

export default BackButton;