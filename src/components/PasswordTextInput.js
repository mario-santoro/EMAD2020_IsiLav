import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements';

const PasswordTextInput = () => {
  const [isFocus, setFocus] = useState(false);

  return (
    <View style={[styles.container, isFocus ? styles.focus : null]}>
        <TextInput
        placeholder="Password"
        style={styles.normal}
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        returnKeyType="next"
        selectionColor="lightgreen"
        secureTextEntry
        selectTextOnFocus
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        //onSubmitEditing=
        />
        <Icon style={styles.icon} name="lock" color="lightgreen"/>
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
        paddingRight: 10
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

export default PasswordTextInput;