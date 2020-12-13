import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
 

const DomandeFAQ = ({ domanda, risposta }) => {

    
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <View style={styles.sezioneFaq}>

            <TouchableOpacity  onPress={()=>setShouldShow(!shouldShow)}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.faq}> {domanda} </Text>
                    <Icon  style={{ marginTop: 10, marginRight:10}}  name='expand-more' color='#E9EBED'   size={50} ></Icon>
                </View>
                <View>{shouldShow ?
                    <View   >
                        <Text style={styles.risposte}>{risposta}</Text>
                    </View>
                    : null}
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    risposte:{
        marginLeft: "6%",
        marginRight: "6%",
        marginBottom:"5%",
        fontSize:20,
        textAlign:"justify",
        color:"#3E4349",

    },


    faq: {
        fontSize: 20,
        color:"#3E4349",
        fontWeight: "bold",
        margin: "5%",
        flex: 1,
        justifyContent: 'flex-start',
    },

    sezioneFaq: {
        margin: "2%",

        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E9EBED",
    },

    img: {
        justifyContent: 'flex-end',
        margin: "5%",
        width: 25,
        height: 25,
    },
});
export default DomandeFAQ;
