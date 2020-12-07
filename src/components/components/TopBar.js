import { setStatusBarHidden } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Header, SearchBar, Overlay, Icon, ListItem, Badge, withBadge } from 'react-native-elements';



const TopBar = ({ navigation, quantità }) => {
   
     
 
    const list = [
        {
            name: 'Il mio profilo',
            icon: 'perm-identity',
            link: 'MyProfile'
        },
        {
            name: 'I miei ordini',
            icon: 'card-giftcard',
            link: 'ListaOrdini'
        },
        {
            name: 'La mia giacenza',
            icon: 'inbox',
            link: 'Giacenza'
        },
        {
            name: 'Prenota reso',
            icon: 'redo',
            link: ''
        },
        {
            name: 'FAQ',
            icon: 'help-outline',
            link: ''
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
                backgroundColor="#5f9747"
                barStyle="light-content"
            />

            <Header
                backgroundColor="#6AA84F"
                barStyle="light-content"

                leftComponent={{ icon: 'menu', size: 30, color: '#FFFFFF', onPress: toggleOverlay }}
                centerComponent={<View><TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../image/icona-bianca.png')} style={{ height: 35, width: 35 }} />
                        <Text style={{ color: "white", marginLeft: 2, fontSize: 28, fontWeight: "bold" }}>IsiLav</Text>

                    </View>
                </TouchableOpacity></View>}
                //centerComponent={{ text: 'IsiLav', style: { color: '#FFFFFF', fontSize: 25 } }}
                rightComponent={
                    <View>
                        <Icon name='shopping-cart' color='#FFFFFF'   size={30} ></Icon>
                        {quantità>0 && (

                            <Badge value={quantità} status="error" containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
                        )

                        }

                    </View>
                }
            />


            <SearchBar
                platform='ios'
                containerStyle={{ backgroundColor: "#6AA84F", borderWidth: 0, marginTop: -11, paddingTop: 8 }}
                inputStyle={{ backgroundColor: "white" }}
                inputContainerStyle={{ backgroundColor: "white", padding: 0, paddingBottom: 0 }}
                cancelButtonTitle="Annulla"
                placeholder="Cerca nel catalogo..."
                cancelButtonProps={{ color: "white" }}
            />

            <View>


                <Overlay animationType="fade" isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ borderRadius: 0, width: "85%", height: "100%", right: "7%" }}>
                    <View>
                        <View style={{ flexDirection: "row", }}>
                            <Icon onPress={toggleOverlay} name="chevron-left" color="lightgrey" size={50} ></Icon>
                            <Text style={styles.text}>Mario Rossi</Text>
                        </View>
                        <View style={{ backgroundColor: "#6AA84F" }}>
                            {
                                list.map((l, i) => (
                                    <ListItem onPress={() => changeScreen(l.link)} key={i} bottomDivider>

                                        <Icon name={l.icon} color="black" size={30} ></Icon>
                                        <ListItem.Content>
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

    },


});

export default TopBar;