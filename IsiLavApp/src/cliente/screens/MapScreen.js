import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const MapScreen = ({ navigation, route }) => {
    const [selezionato, setSelezionato] = useState(null);
    useEffect(() => {
        if (route.params?.selezionato) {
          setSelezionato(route.params?.selezionato)
        }
      }, [route.params?.selezionato]);

    const chiamante = route.params.chiamante;
    const hubs = route.params.hubs;

    const formattaOrario = (ore, minuti) => {
        if(ore<10){
            ore = "0"+ore.toString()
        }
        if(minuti<10){
            minuti = "0"+minuti.toString()
        }
        return ore+":"+minuti
    }

    return (
        <View style={{ flexDirection: "column", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
                style={{ width: "100%", flex: 8 }}
                initialRegion={{
                    latitude: selezionato===null? 40.66603380035814 : parseFloat(selezionato.latitudine),
                    longitude: selezionato===null? 14.793144967406988 : parseFloat(selezionato.longitudine),
                    latitudeDelta: 0.010198750686598146,
                    longitudeDelta: 0.007582940161226404,
                }}
            >
                {hubs.map(marker =>
                    <Marker
                    key={marker.via+marker.id_percorso}
                    coordinate={{ latitude: parseFloat(marker.latitudine), longitude: parseFloat(marker.longitudine)}}
                    title={marker.via+" ("+formattaOrario(marker.ore, marker.minuti)+")"}
                    onPress={() => setSelezionato(marker)}
                    pinColor={selezionato!==null && marker.via === selezionato.via? "green" : null} //meglio usare gli id
                    />
                )}

            </MapView>
            
            <View style={{ flex: 1, width: "100%", backgroundColor: "#F8FFFC", justifyContent: 'center', alignItems: 'center'}}>
                {selezionato === null?
                    <Text style={{textAlign: 'center', justifyContent: 'center', color: "#9DE7CD", fontSize: 16, fontWeight: 'bold'}}>Seleziona un punto sulla mappa</Text>
                :
                    <View style={{width: "100%", padding: 10}}>
                        <Text style={{color: "#3E4349", fontSize: 16}}>Hai selezionato:</Text>
                        <Text style={{color: "#9DE7CD", fontSize: 16, fontWeight: "bold"}}>{selezionato.via+" ("+formattaOrario(selezionato.ore, selezionato.minuti)+")"}</Text>
                        <Button
                        onPress={()=> navigation.navigate(chiamante.toString(), {hub: selezionato})}
                        title="CONFERMA"
                        icon={<Icon size={20} name="done" color="#F8FFFC" />}
                        iconRight={true}
                        buttonStyle={{backgroundColor: "#9DE7CD", borderRadius: 10}}
                        />
                    </View>
                }
            </View>
        </View>
    );
};

export default MapScreen;