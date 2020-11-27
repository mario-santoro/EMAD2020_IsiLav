import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements';

const EmailTextInput = ({placeholder, ic,  value, onChangeText}) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <View style={[styles.container, isFocus ? styles.focus : null]}>
        
        <TextInput
        placeholder={placeholder}
        style={styles.normal}
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        returnKeyType="next"
        selectionColor="lightgreen"
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onSubmitEditing={() => console.log("ciao")}
        />
        <Icon style={styles.icon} name={ic} color="lightgreen"/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        borderBottomWidth: 2,
        borderBottomColor: "#ebf0ef",
        margin: 5,
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
    },
    normal: {
        flex: 9,
        fontSize: 16,
        textAlign: 'left',
        color: "black",
        margin: 5,
    },
    focus:{   
        borderBottomWidth: 2,
        borderBottomColor: "lightgreen",
    },
});

export default EmailTextInput;