import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const LoginButton = ({onPress}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}><Text style={styles.text}>Accedi</Text></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6AA84F",
        borderRadius: 10,
        width: "80%",
        marginTop: 40,
        marginBottom: 10,
      },
    
      text: {
        padding: 7,
        fontSize: 20,
        color: "white",
      },
});

export default LoginButton;