import { setStatusBarHidden } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Header, SearchBar, Overlay, Icon, ListItem, Badge, withBadge } from 'react-native-elements';



const TopBarCorriere = ({ navigation, quantità }) => {
   
    const [text, setText] = useState("");
 
    const list = [
        {
            name: 'Il mio profilo',
            icon: 'perm-identity',
            link: 'MyProfileCorriere'
        },
       
        {
            name: 'FAQ',
            icon: 'help-outline',
            link: 'FAQCorriere'
        },
        {
            name: 'Logout',
            icon: 'exit-to-app',
            link: 'Login'
        },
    ]
    const [visible, setVisible] = useState(false);
    function changeScreen(link) {
        navigation.navigate(link)
        setVisible(!visible);

    }
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <StatusBar
                backgroundColor="#70D0AE"
                barStyle="light-content"
            />

            <Header
                backgroundColor="#9de7cc"
                barStyle="light-content"

                leftComponent={{ icon: 'menu', size: 40, color: '#F8FFFC', onPress: toggleOverlay }}
                centerComponent={<View><TouchableOpacity onPress={() => navigation.navigate("HomeCorriere")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../../image/icona-bianca.png')} style={{ height: 35, width: 35 }} />
                        <Text style={{ color: "#F8FFFC", marginLeft: 2, fontSize: 28, fontWeight: "bold" }}>IsiLav</Text>

                    </View>
                </TouchableOpacity></View>}
                //centerComponent={{ text: 'IsiLav', style: { color: '#FFFFFF', fontSize: 25 } }}
                rightComponent={
                    <View>
                        <Icon onPress={() => navigation.navigate("Cart")} name='shopping-cart' color='#F8FFFC'   size={40} ></Icon>
                        {quantità>0 && (

                            <Badge value={quantità} status="error" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                        )

                        }

                    </View>
                }
            />


            <SearchBar
                platform='ios'
                containerStyle={{ backgroundColor: "#9de7cc", borderWidth: 0, marginTop: -11, paddingTop: 8 }}
                inputStyle={{ backgroundColor: "#F8FFFC" }}
                inputContainerStyle={{ backgroundColor: "#F8FFFC", color:"#3E4349", padding: 0, paddingBottom: 0 }}
                cancelButtonTitle="Annulla"
                placeholder="Cerca nel catalogo..."
                cancelButtonProps={{ color: "#F8FFFC" }}
                value={text}
                onChangeText={(newText)=>setText(newText)}
            />

            <View>


                <Overlay animationType="fade" isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ backgroundColor: "white", borderRadius: 0, width: "85%", height: "100%", right: "7%" }}>
                    <View>
                        <View style={{ flexDirection: "row", }}>
                            <Icon onPress={toggleOverlay} name="chevron-left" color="#E9EBED" size={50} ></Icon>
                            <Text style={styles.text}>Mario Corriere</Text>
                        </View>
                        <View  >
                            {
                                list.map((l, i) => (
                                    <ListItem  onPress={() => changeScreen(l.link)} key={i} bottomDivider>

                                        <Icon name={l.icon} color="#70D0AE" size={30} ></Icon>
                                        <ListItem.Content >
                                            <ListItem.Title style={{ paddingLeft: 50, }}>{l.name}</ListItem.Title>

                                        </ListItem.Content>
                                    </ListItem>
                                ))
                            }
                        </View>
                    </View>
                </Overlay>
            </View>
        </View>

    );

};
const styles = StyleSheet.create({

    text: {
        padding: 7,
        paddingLeft: 50,
        fontSize: 20,
        color:"#3E4349"
    },


});

export default TopBarCorriere;