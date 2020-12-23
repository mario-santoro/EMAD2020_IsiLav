import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { CheckBox, Button, Icon } from 'react-native-elements'
import TopBar from '../components/TopBar';
import Select from '../components/SelectMY';
import InputElement from '../components/InputElement';
import { ScrollView } from 'react-native-gesture-handler';
const PayOrdine = ({ navigation }) => {

    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    function selected(index){
   
        if(index==0){
            setSelection1(true);
            setSelection2(false);
            setSelection3(false);
            setSelection4(false);
            setSelection5(false);
            setSelection6(false);
        }
        
        if(index==1){
            setSelection1(false);
            setSelection2(true);
            setSelection3(false);
            setSelection4(false);
            setSelection5(false);
            setSelection6(false);
        }
        
        if(index==2){
            setSelection1(false);
            setSelection2(false);
            setSelection3(true);
            setSelection4(false);
            setSelection5(false);
            setSelection6(false);
        }
        
        if(index==3){
            setSelection1(false);
            setSelection2(false);
            setSelection3(false);
            setSelection4(true);
            setSelection5(false);
            setSelection6(false);
        }
       
        if(index==4){
            setSelection1(false);
            setSelection2(false);
            setSelection3(false);
            setSelection4(false);
            setSelection5(true);
            setSelection6(false);
        }
       
        if(index==5){
            setSelection1(false);
            setSelection2(false);
            setSelection3(false);
            setSelection4(false);
            setSelection5(false);
            setSelection6(true);
        }

    }
    return (
        <View
            style={styles.container}
        >
            <TopBar navigation={navigation} />
            <Text style={styles.titolo}>Pagamento</Text>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.subTitolo}>Inserisci tipo di pagamento:</Text>
                </View>
                <View style={{ flexDirection: 'column', alignSelf: "center" }}>
                    <View style={{ flexDirection: 'row', }}>
                        <CheckBox
                            center
                            title={<Image style={{ width: 70, height: 40 }} source={require("../../../image/creditCard/Visa.png")} />}
                            checked={isSelected1}
                            onPress={() => selected(0)}
                            checkedColor="#70D0AE"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        />
                        <CheckBox
                            center
                            title={<Image style={{ width: 70, height: 40, backgroundColor: "blue" }} source={require("../../../image/creditCard/MasterCard.png")} />}
                            checked={isSelected2}
                            onPress={() => selected(1)}
                            checkedColor="#70D0AE"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        />
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <CheckBox
                            center
                            title={<Image style={{ width: 70, height: 40 }} source={require("../../../image/creditCard/paypal.jpg")} />}
                            checked={isSelected3}
                            onPress={() => selected(2)}
                            checkedColor="#70D0AE"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        />
                        <CheckBox
                            center
                            title={<Image style={{ width: 70, height: 40, backgroundColor: "blue" }} source={require("../../../image/creditCard/postepay.jpg")} />}
                            checked={isSelected4}
                            onPress={() => selected(3)}
                            checkedColor="#70D0AE"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        />
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <CheckBox
                            center
                            title={<Image style={{ width: 70, height: 40 }} source={require("../../../image/creditCard/aura.png")} />}
                            checked={isSelected5}
                            onPress={() => selected(4)}
                            checkedColor="#70D0AE"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        />
                        <CheckBox
                            center
                            title={<Image style={{ width: 70, height: 40, backgroundColor: "blue" }} source={require("../../../image/creditCard/americanExpress.png")} />}
                            checked={isSelected6}
                            onPress={() => selected(5)}
                            checkedColor="#70D0AE"
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            containerStyle={{ backgroundColor: "white", borderColor: "white" }}

                        />
                    </View>

                </View>
                <View style={styles.body}>
                    <InputElement placeholder="Numero Carta"
                        value="********654"
                        label="Numero Carta:" />
                    <View style={{ width: "100%", marginBottom: 30, }}>
                        <Select />
                    </View>
                    <InputElement placeholder="CVV"
                        label="CVV:" />
                </View>
            </ScrollView>
               
      <View style={{flexDirection:'row', width: "100%", borderTopWidth: 0.5, borderColor: "#9DE7CD", marginTop: 10}}>
          <Button
          icon={<Icon size={24} name="keyboard-arrow-left" color="#9DE7CD" />}
          containerStyle={{flex: 1, alignSelf: 'flex-start', padding: 5}}
          buttonStyle={{borderColor: "#9DE7CD", borderRadius: 15, borderWidth: 1}}
          titleStyle={{color: "#9DE7CD", fontSize: 16}}
          title="INDIETRO"
          type="outline"
          onPress={() => navigation.goBack()}
          />
          <Button
          icon={<Icon size={24} name="done" color="#F8FFFC" />}
          iconRight={true}
          containerStyle={{flex:1, alignSelf: 'flex-end', padding: 5}}
          buttonStyle={{backgroundColor: "#9DE7CD", borderRadius: 15}}
          titleStyle={{color: "#F8FFFC", fontSize: 16}}
          title="PROCEDI"
          onPress={() => navigation.navigate("SuccessScreen")}
          />
        </View>
        </View>

    );
};

const onPress = (itemID) => {
    alert(itemID);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titolo: {
        fontSize: 24,
        color: "#70D0AE",
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
    },
    subTitolo: {
        fontSize: 20,
        color: "#3E4349",
        fontWeight: "bold",
        marginHorizontal: 15,
        marginTop: 10,
    },
    body: {

        alignSelf: 'center',
        justifyContent: 'center',
        width: "80%",


    },

});

export default PayOrdine;
