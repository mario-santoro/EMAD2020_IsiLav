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
        selectionColor="#9DE7CD"
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        />
        <Icon style={styles.icon} name={ic} color="#9DE7CD"/>
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
        fontSize: 20,
        textAlign: 'left',
        color: "#3E4349",
        margin: 5,
    },
    focus:{   
        borderBottomWidth: 2,
        borderBottomColor: "#9DE7CD",
    },
});

export default EmailTextInput;