import React, {useState} from 'react';
import { View, Text, StatusBar } from 'react-native';
import EmailTextInput from '../components/EmailTextInput';
import PasswordTextInput from '../components/PasswordTextInput';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

//import {Picker} from '@react-native-picker/picker';



const LoginScreen = ({navigation}) => {
  const [scelta, setScelta] = useState(1);
  return (
    <View
    style={{flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: 'white'}}
    >
      <StatusBar
      backgroundColor="#5f9747"
      barStyle="light-content"
      />

      <Text style={{fontWeight: "bold", fontSize: 45, color: "#6AA84F", marginBottom: 20}}>IsiLav</Text>

      <EmailTextInput placeholder="Email"/>
      <PasswordTextInput />
      
      <LoginButton onPress={() => navigation.navigate('Home')} />
      <SignupButton onPress={test} />

      {/*<Picker
      selectedValue={scelta}
      style={{height: 50, width: "100%"}}
      onValueChange={(itemValue, itemIndex) =>
        setScelta(itemValue)
      }>
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="8" value={8} />
        <Picker.Item label="9" value={9} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="11" value={11} />
        <Picker.Item label="12" value={12} />
        
    </Picker>*/}

    </View>
  );
};


const test = () => {
  alert("Registrazione");
};
 
export default LoginScreen;