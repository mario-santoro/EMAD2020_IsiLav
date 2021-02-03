import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const InputElement = ({ placeholder, value, label, onSetState }) => {
    const [isFocus, setFocus] = useState(false);
     
    return (

        <Input
            style={{ color: "#3E4349", fontSize: 20 }}
            inputContainerStyle={[isFocus ? styles.inpFoc : null]}
            placeholder={placeholder}
            value={value}
            label={label}
         
            labelStyle={{ color: "#3E4349", fontSize: 20 }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={(text)=>onSetState(text)}
        />

    );
};

const styles = StyleSheet.create({
    inpFoc: {

        borderBottomColor: "#9DE7CD",

    }
});

export default InputElement;