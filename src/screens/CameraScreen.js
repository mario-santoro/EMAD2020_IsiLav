import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text } from 'react-native';

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    //quando la component è stata montata
    //richiedi i permessi all'utente
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        console.log({data});
    };

    //Aggiungere controllo permessi
    //Cambiare lingua prompt permessi
    return (
        <View style={{ flex: 1 }}>
            <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.back}
            barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
              }}
            onBarCodeScanned={!scanned? handleBarCodeScanned : null}
            >
                <Text style={{width:"100%", textAlign:'center', padding: 5, fontSize: 18, color: "white", backgroundColor: "#9DE7CD", fontWeight: 'bold'}}>INQUADRA IL CODICE QR</Text>
            </Camera>
        </View>
    );
};

export default CameraScreen;