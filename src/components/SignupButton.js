import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const SignupButton = ({onPress}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}><Text style={styles.text}>Registrazione</Text></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#6AA84F",
    borderRadius: 10,
    width: "80%",
  },

  text: {
    padding: 7,
    fontSize: 20,
    color: "#6AA84F",
  }
});

export default SignupButton;