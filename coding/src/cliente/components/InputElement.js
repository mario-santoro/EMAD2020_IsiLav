import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const InputElement = ({ placeholder, value, label }) => {
    const [isFocus, setFocus] = useState(false);
    const [text, setText] = useState(value);
    
    return (

        <Input
            style={{ color: "#3E4349", fontSize: 20 }}
            inputContainerStyle={[isFocus ? styles.inpFoc : null]}
            placeholder={placeholder}
            value={text}
            label={label}
            labelStyle={{ color: "#3E4349", fontSize: 20 }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={(newText)=>setText(newText)}
        />

    );
};

const styles = StyleSheet.create({
    inpFoc: {

        borderBottomColor: "#9DE7CD",

    }
});

export default InputElement;