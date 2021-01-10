import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const CameraScreen = ({ navigation }) => {
    const [permessi, setPermessi] = useState(null);
    const [scanned, setScanned] = useState(false);

    const onCodeScanned = ({ type, data }) => {
        setScanned(true);
        console.log({data});
    };

    const richiediPermessi = () => {
        (async () => {
            //Proprietà status dell'oggetto restituito
            const { status  } = await Camera.requestPermissionsAsync();
            console.log(status );
            setPermessi(status  === 'granted');
        })();
    };

    //quando la component è stata montata
    //richiedi i permessi all'utente
    useEffect(() => {
        richiediPermessi();
    }, []);

    //Fase di controllo permessi
    if (permessi === false || permessi === null) { //Permesso negato || Primo avvio
        return (
            <View style={{ flex: 1, backgroundColor: "#9DE7CD", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={64} name="photo-camera" color="#F8FFFC" />
                <Text style={{color: "#F8FFFC", fontWeight: 'bold', fontSize: 24, textAlign: 'center', paddingHorizontal: 5, marginBottom: 10}}>Per continuare devi fornire il consenso all'utilizzo della FOTOCAMERA</Text>
                <Button
                icon={<Icon size={32} name="refresh" color="#9DE7CD" />}
                iconRight={true}
                buttonStyle={{backgroundColor: "#F8FFFC", borderRadius: 5}}
                titleStyle={{color: "#9DE7CD", fontSize: 24}}
                title="RIPROVA"
                onPress={() => richiediPermessi()}
                />
            </View>
        );
    }

    return ( //Permesso concesso
        <View style={{ flex: 1 }}>
            <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.back}
            barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
              }}
            //Rimuovi l'handler una volta scannerizzato un codice
            onBarCodeScanned={!scanned? onCodeScanned : null}
            >
                <Text style={{width:"100%", textAlign:'center', padding: 5, fontSize: 18, color: "white", backgroundColor: "#9DE7CD", fontWeight: 'bold'}}>INQUADRA IL CODICE QR</Text>
            </Camera>
        </View>
    );
};

export default CameraScreen;