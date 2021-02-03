import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';

const SelectMap = ({ route }) => {
    const ordine = route.params.ordine;
    return (
        <View style={{ flexDirection: "column", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
            style={{ width: "100%", flex: 8 }}
            initialRegion={{
                latitude: parseFloat(ordine.latitudine),
                longitude: parseFloat(ordine.longitudine),
                latitudeDelta: 0.00420,
                longitudeDelta: 0.00420,
            }}
            >
                <Marker
                key={ordine.via}
                coordinate={{ latitude: parseFloat(ordine.latitudine), longitude: parseFloat(ordine.longitudine) }}
                title={ordine.via}
                />
            </MapView>

            <View style={{ flex: 1, width: "100%", backgroundColor: "#F8FFFC", justifyContent: 'center', alignItems: 'center' }}>              
                <View style={{ width: "100%", padding: 10 }}>
                    <Text style={{ color: "#3E4349", fontSize: 16 }}>Hub scelto per la consegna:</Text>
                    <Text style={{ color: "#9DE7CD", fontSize: 18, fontWeight: "bold" }}>{ordine.via}</Text>
                </View>                   
            </View>
        </View>
    );
};

export default SelectMap;