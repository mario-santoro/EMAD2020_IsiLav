import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements';

const TextInputCustomer = ({placeholder, value, onChangeText}) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <View style={[styles.container, isFocus ? styles.focus : null]}>
        
        <TextInput
        placeholder={placeholder}
        style={styles.normal}
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="next"
        selectionColor="lightgreen"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        //onSubmitEditing={() => console.log("submit")}
        />
       
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
  
    normal: {
        flex: 10,
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

export default TextInputCustomer;