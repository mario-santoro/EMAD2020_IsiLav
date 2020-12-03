import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements';

const InputElement = ({placeholder, value, label}) => {
    const [isFocus, setFocus] = useState(false);
    return (
      
            <Input
                            inputContainerStyle={[isFocus? styles.inpFoc : null]} 
                            placeholder={placeholder}
                            value={value}
                            label={label}
                            labelStyle={{ color: "black" }}
                            onFocus={()=>setFocus(true)}
                            onBlur={()=>setFocus(false)}
                        />
   
    );
};

const styles = StyleSheet.create({
    inpFoc:{

        borderBottomColor:"#6AA84F",

    }
});

export default InputElement;