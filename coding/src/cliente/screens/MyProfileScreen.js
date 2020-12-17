import React from 'react';
import { TouchableOpacity, Dimensions, StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar from '../components/TopBar';
import Hr from '../components/HorizLine';
import TextInputCustomer from '../components/TextInputCustomer';
import GenericButton from '../components/GenericButton';
const MyProfileScreen = ({ navigation }) => {

    return (
        <View
            style={{ height: "100%", flexDirection: "column", flex: 1, backgroundColor: "white" }}
        >
            <View style={{ alignItems: "center", }}>
                <StatusBar
                    backgroundColor="#5f9747"
                    barStyle="light-content"
                />
              <TopBar navigation={navigation}/>

                <View style={{
                    alignItems: "center", marginTop: 15,
                }}>
                    <Text style={styles.titolo}>Il mio profilo</Text>
                </View>
            </View>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity  onPress={() => navigation.navigate('ChangePassword2')}  style={styles.item}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", flex: 8 }}>
                        <Text style={styles.baseTextBold}>Credenziali utente:</Text>
                            <View style={{ flexDirection: "row" ,marginLeft:10}}>
                               
                                <Text style={styles.baseText}>Password: ******</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center" }}>
                            <Icon name="navigate-next" color="#E9EBED" size={50} ></Icon>
                        </View>
                    </View>                    
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('ChangeAnagrafica')}  style={styles.item}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", flex: 8 }}>
                        <Text style={styles.baseTextBold}>Dati anagrafici:</Text>
                            <View style={{ flexDirection: "column", marginLeft:10 }}>
                               
                                <Text style={styles.baseText}>Nome e Cognome: Mario Rossi</Text>
                                <Text style={styles.baseText}>Codice Fiscale: RSIMRA12FGR85</Text>
                                <Text style={styles.baseText}>Nome attività: Hotel Fantastico</Text>
                                <Text style={styles.baseText}>P.IVA: HDHF4385HF3J</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center" }}>
                            <Icon name="navigate-next" color="#E9EBED" size={50} ></Icon>
                        </View>
                    </View>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePayMethod')}  style={styles.item}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", flex: 8 }}>
                        <Text style={styles.baseTextBold}>Metodo di pagamento:</Text>
                            <View style={{ flexDirection: "column" ,marginLeft:10}}>
                            <Text style={styles.baseText}>Tipo carta: Master Card</Text>
                                <Text style={styles.baseText}>N° Carta: ********654</Text>
                                <Text style={styles.baseText}>Data scadenza: 12/2025</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, justifyContent: "center" }}>
                            <Icon name="navigate-next" color="#E9EBED" size={50} ></Icon>
                        </View>
                    </View>                    
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  
  
  
    textButton: {
        padding: 7,
        fontSize: 20,
        color: "#6AA84F",
      
    },
    container: {
        flex: 3,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 2,
        borderColor: "#E9EBED",
        borderRadius: 10,
        backgroundColor:"#F8FFFC"
    },
    baseText: {
        fontSize: 20,
        color: '#3E4349',
    },
    baseTextBold: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#3E4349',
    },
    titolo: {
        fontSize: 24,
        color: '#70D0AE',
        fontWeight: "bold"

    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
    },

});

export default MyProfileScreen;