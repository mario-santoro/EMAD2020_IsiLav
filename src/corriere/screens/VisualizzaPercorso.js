import React, { useState, useEffect } from 'react';
import MapView, {Circle, Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import * as API from "../../cliente/services/API";
import { Button, Icon } from 'react-native-elements';

const VisualizzaPercorso = ({ navigation }) => {
    const [selezionato, setSelezionato] = useState(null);
  

    const markers = API.getLuoghi();

    return (
        <View style={{ flexDirection: "column", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MapView
                style={{ width: "100%", flex: 8 }}
                initialRegion={{
                    latitude: selezionato===null? 40.6748035 : selezionato.latitude,
                    longitude: selezionato===null? 14.7576367 : selezionato.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {markers.map(marker =>
                    <Marker
                    key={marker.title} //meglio l'id del luogo ottenuto dal db
                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude}}
                    title={marker.title}
                    onPress={() => setSelezionato(marker)}
                    pinColor={selezionato!==null && marker.title === selezionato.title? "green" : null} //meglio usare gli id
                    />
                )}
                 <Marker
                    key={0} 
                   title="Mia posizione"
                    coordinate={{ latitude: 40.6638814 , longitude: 14.7911249}}                 
                    icon={require('../../../image/truck.png')}
                    
               
                
                    />


            </MapView>
            
            <View style={{ flex: 1.5, width: "100%", backgroundColor: "#F8FFFC", justifyContent: 'center', alignItems: 'center'}}>
                {selezionato === null?
                    <Text style={{textAlign: 'center', justifyContent: 'center', color: "#9DE7CD", fontSize: 16, fontWeight: 'bold'}}>Seleziona un punto sulla mappa</Text>
                :
                    <View style={{width: "100%", padding: 10, marginTop:10}}>
                        <Text style={{color: "#3E4349", fontSize: 16}}>Hai salezionato:</Text>
                        <Text style={{color: "#9DE7CD", fontSize: 16, fontWeight: "bold"}}>{selezionato.title}</Text>
                      
                    </View>
                }
                 <View style={{width: "100%", padding: 10}}> 
                     <Button
                        onPress={()=> navigation.navigate("HomeCorriere")}
                        title="INDIETRO"
                        icon={<Icon size={20} name="done" color="#F8FFFC" />}
                        iconRight={true}
                        buttonStyle={{backgroundColor: "#9DE7CD", borderRadius: 10}}
                        />
                </View>
            </View>
         
        </View>
    );
};

export default VisualizzaPercorso;