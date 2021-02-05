import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text } from 'react-native';
import * as API from '../../cliente/services/API';
import { CommonActions } from '@react-navigation/native';

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
        console.log(data);
        API.getOrderDetailsByID(data)
        .then(response => response.json())
        .then(json => {
            if(json.status === "ok"){
                //console.log(json.ordine) //per vedere la struttura del cliente (operazione)
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: "HomeCorriere" }, { name: "DettaglioCliente", params: {cliente: json.ordine} }]
                }));
            }
            else{
                alert(json.status)
                navigation.goBack();
            }
        })
        .catch((error) => {
            console.error(error)
            alert("Si è verificato un errore durante la ricerca dell'ordine!")
        })
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
            <View style={{flex:1, width:"100%",justifyContent:"center", backgroundColor: "#9DE7CD"}}>
              <Text style={{ textAlign:'center',  fontSize: 18, color: "white",  fontWeight: 'bold'}}>INQUADRA IL CODICE QR</Text></View>
        </View>
    );
};

export default CameraScreen;