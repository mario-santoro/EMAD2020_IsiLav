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
        <View style={{ flex: 1, flexDirection:"column" }}>
          
            <Camera
            style={{ flex: 9 }}
            type={Camera.Constants.Type.back}
            barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
              }}
            onBarCodeScanned={!scanned? handleBarCodeScanned : null}
            >
               
            </Camera>
            <View style={{flex:1, width:"100%",justifyContent:"center",     backgroundColor: "#9DE7CD",  }}>
              <Text style={{ textAlign:'center',  fontSize: 18, color: "white",  fontWeight: 'bold'}}>INQUADRA IL CODICE QR</Text></View>
        </View>
    );
};

export default CameraScreen;