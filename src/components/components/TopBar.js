import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { Header, SearchBar, Button, Overlay, Icon, ListItem } from 'react-native-elements';



const TopBar = ({ navigation }) => {
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
            link: ''
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
    function changeScreen(link){
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

                leftComponent={{ icon: 'menu',   color: '#FFFFFF', onPress: toggleOverlay }}
                centerComponent={<View style={{ flexDirection: 'row', alignItems: 'center', onPress:() => navigation.navigate('Home') }}><Image source={require('../../image/icona-bianca.png')} style={{ height: 35, width: 35 }} /><Text style={{ color: "white", marginLeft: 2, fontSize: 28, fontWeight: "bold" }}>IsiLav</Text></View>}
                //centerComponent={{ text: 'IsiLav', style: { color: '#FFFFFF', fontSize: 25 } }}
                rightComponent={{ icon: 'shopping-cart',   color: '#FFFFFF' }}
            />

            <SearchBar
                platform='ios'
                containerStyle={{ backgroundColor: "#6AA84F", borderWidth: 0, marginTop: -9 }}
                inputStyle={{ backgroundColor: "white" }}
                inputContainerStyle={{ backgroundColor: "white" }}
                cancelButtonTitle="Annulla"
                placeholder="Cerca nel catalogo..."
                cancelButtonProps={{ color: "white" }}
            />

            <View>


                <Overlay animationType="fade" isVisible={visible} onBackdropPress={toggleOverlay}  overlayStyle={{borderRadius:0, width: "85%", height: "100%", right: "7%" }}>
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
                                        <ListItem.Title style={{   paddingLeft:50,}}>{l.name}</ListItem.Title>

                                    </ListItem.Content>
                                </ListItem>
                            ))
                        }
                    </View>
                 
                </Overlay>
            </View>
        </View>

    );

};
const styles = StyleSheet.create({
    item: {
        margin: 15,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: '#6AA84F',
        flexDirection: 'column',
    },
    image: {
        borderTopLeftRadius: 10, //iOS compatibile?
        borderTopRightRadius: 10, //iOS compatibile?
        resizeMode: 'cover',
        width: null,
        height: 280,
        justifyContent: 'center'
    },
    name: {
        alignSelf: 'flex-end',
        color: 'white',
        padding: 3,
        fontSize: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        padding: 7,
        paddingLeft:50,
        fontSize: 20,

    },
    textL: {
        padding: 7,
        paddingLeft:50,
        fontSize: 16,

    }

});

export default TopBar;