import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import * as API from "../services/API";
import { Button, Icon } from 'react-native-elements';

const MapScreen = () => {
    var lat;
    var long;
    var tit;
    var i=0; 
    const markers = API.getLuoghi();
    for(i=0; i< markers.length; i++){
        if(markers[i].select===true){
            lat=markers[i].latitude;            
            long=markers[i].longitude;
            tit=markers[i].title;
        }      
    }
    return (
        <View style={{ flexDirection: "column", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MapView
            style={{ width: "100%", flex: 8 }}
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
                        pinColor={marker.select !== false && marker.title === marker.title ? "green" : null} //meglio usare gli id
                    />
                )}

            </MapView>

            <View style={{ flex: 1, width: "100%", backgroundColor: "#F8FFFC", justifyContent: 'center', alignItems: 'center' }}>              
                    <View style={{ width: "100%", padding: 10 }}>
                         <Text style={{ color: "#3E4349", fontSize: 16 }}>Selezionato:</Text>
                        <Text style={{ color: "#9DE7CD", fontSize: 16, fontWeight: "bold" }}>{tit}</Text>
                    </View>                   
            </View>
        </View>
    );
};

export default MapScreen;