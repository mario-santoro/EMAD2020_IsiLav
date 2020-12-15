import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';

const percorsoCorriere = ({ via, ore, numClienti }) => {

    return (
        <TouchableOpacity onPress={() => alert("")}>

            <View style={styles.container}>

                <View style={{ flexDirection: "column", flex: "1" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Via: </Text>
                        <Text>{via}</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: "2%", }}>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <Text>Ore: </Text>
                            <Text>{ore}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Numero clienti: </Text>
                            <Text>{numClienti}</Text>
                        </View>
                    </View>

                </View>

                <Icon style={{ marginTop: 10, marginRight: 10 }} name='navigate-next' color='#E9EBED' size={50} ></Icon>

            </View>
            
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    container: {
        margin: "2%",
        padding: "5%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#262626",
        flexDirection: "row",
        flex: "1",
    },

});

export default percorsoCorriere;