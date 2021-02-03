import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import QRCode from 'react-native-qrcode-svg';

const QrCodeScreen = ({ route, navigation }) => {
    const id = route.params.id;

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="#5f9747"
                barStyle="light-content"
            />
            <TopBar showSearchBar={false} />
            <View style={{alignItems: "center", marginTop: 15, padding:10}}>
                <Text style={styles.titolo}>Ordine #{id}</Text>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <QRCode
                value={id.toString()}
                size={300}
                logoBackgroundColor='transparent'
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
                <GenericButton onPress={() => navigation.navigate('ListaOrdini')} testo="Torna a lista ordini" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titolo: {
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        textAlign:"center",
        color:"#3E4349"
    },

});

export default QrCodeScreen;