import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import * as API from "../services/API";
import { Button, Icon } from 'react-native-elements';

const MapScreen = () => {
    var lat;
    var long;
    var i=0;
 
 
    const [selezionato, setSelezionato] = useState(null);
    useEffect(() => {
        if (selezionato) {
            setSelezionato(selezionato)
        }
    }, [selezionato]);
    const markers = API.getLuoghi();
    for(i=0; i< markers.length; i++){
        if(markers[i].select===true){
            lat=markers[i].latitude;
            
            long=markers[i].longitude;

        }      

    }
    return (
        <View style={{ flexDirection: "column", flex: 9, paddingHorizontal: 20, }}>
            <MapView
                style={{ width: "100%", flex: 7.5 }}
                initialRegion={{
                    latitude:lat,
                    longitude: long,
                    latitudeDelta: 0.0420,
                    longitudeDelta: 0.0420,

                }}
            >
                {markers.map(marker =>
                    <Marker
                        key={marker.title} //meglio l'id del luogo ottenuto dal db
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                        title={marker.title}
                        onPress={() => setSelezionato(marker)}
                        pinColor={marker.select !== false && marker.title === marker.title ? "green" : null} //meglio usare gli id
                    />
                )}

            </MapView>

            <View style={{ flex: 1, width: "100%", backgroundColor: "#F8FFFC", justifyContent: 'center', alignItems: 'center' }}>
                {selezionato === null ?
                    <View style={{ width: "100%", padding: 10 }}>
                         <Text style={{ color: "#3E4349", fontSize: 16 }}>Selezionato:</Text>
                        <Text style={{ color: "#9DE7CD", fontSize: 16, fontWeight: "bold" }}> {markers.map(marker =>marker.select !== false? marker.title: null)}</Text>
                    </View>
                    :
                    <View style={{ width: "100%", padding: 10 }}>
                        <Text style={{ color: "#3E4349", fontSize: 16 }}>Modificare con:</Text>
                        <Text style={{ color: "#9DE7CD", fontSize: 16, fontWeight: "bold" }}>{selezionato.title}</Text>

                    </View>
                }
            </View>
        </View>
    );
};

export default MapScreen;