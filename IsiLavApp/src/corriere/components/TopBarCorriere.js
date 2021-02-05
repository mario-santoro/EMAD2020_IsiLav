import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Header, Overlay, Icon, ListItem } from 'react-native-elements';
import { UserContext } from '../../cliente/services/Utente';
import { useNavigation } from '@react-navigation/native';

const TopBarCorriere = () => {
    const navigation = useNavigation(); //Prop navigation da hook React

    const screenList = [
        {
            name: 'Il mio profilo',
            icon: 'person',
            link: 'MyProfileCorriere'
        },
        {
            name: 'Scanner codice QR',
            icon: 'photo-camera', //qr-code-scanner
            link: 'ScannerQR'
        },
        {
            name: 'FAQ',
            icon: 'help',
            link: 'FAQCorriere'
        },
        {
            name: 'Logout',
            icon: 'exit-to-app',
            link: 'Login'
        },
    ]
    const [overlayVisible, setOverlayVisible] = useState(false);
    function changeScreen(link) {
        navigation.navigate(link)
        setOverlayVisible(false);

    }
    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
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
               
            />

            <View>
                <Overlay
                animationType="fade"
                isVisible={overlayVisible}
                onBackdropPress={() => setOverlayVisible(false)}
                overlayStyle={{ backgroundColor: "white", borderRadius: 0, width: "80%", height: "100%", alignSelf: "flex-start"}}>
                    <View>
                        <View style={{flexDirection: "row"}}>
                            <Icon onPress={() => setOverlayVisible(false)} name="chevron-left" color="#E9EBED" size={50} />
                            <UserContext.Consumer>
                                {sessione =>
                                    <Text style={{flex: 1, fontSize: 18, color:"#3E4349", textAlign: 'center', textAlignVertical: 'center'}}>{sessione.getUser().nominativo}</Text>
                                }
                            </UserContext.Consumer>
                        </View>
                        <View>
                            { screenList.map((l, i) => (
                                <ListItem onPress={() => changeScreen(l.link)} key={i} bottomDivider>
                                    <Icon name={l.icon} color="#70D0AE" size={30} />
                                    <ListItem.Content >
                                        <ListItem.Title style={{fontSize:18}}>{l.name}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            ))}
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