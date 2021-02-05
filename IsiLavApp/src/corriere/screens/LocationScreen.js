import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { StatusBar } from 'react-native';

const LocationScreen = ({ navigation, route }) => {
  const fermate = route.params.fermate; //fermate passate come argomento da aggiungere sulla mappa come markers

  const [permessi, setPermessi] = useState(null);
  const [location, setLocation] = useState(null);
  const [servicesEnabled, setServicesEnabled] = useState(false);

  const [deltas, setDeltas] = useState({latitude: 0.001110116707721225, longitude: 0.001110699234485626}); //Per mantenere lo zoom impostato dall'utente sulla mappa 

  const [follow, setFollow] = useState(false); //Stato per impostare se la mappa deve o meno seguire la posizione dell'utente
  const [readyStyle, setReadyStyle] = useState(false); //Per settare l'altezza della MapView una volta caricarata

  const richiediPermessi = () => {
      (async () => {
          //Letteralmente la proprietà "status" dell'oggetto restituito
          const { status } = await Location.requestPermissionsAsync();

          if(status === 'granted'){
            
            try{
              await Location.enableNetworkProviderAsync();
              setServicesEnabled(true);
            }
            catch(err){
              setServicesEnabled(false);
            }
          }
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
              <Icon size={64} name="location-on" color="#F8FFFC" />
              <Text style={{color: "#F8FFFC", fontWeight: 'bold', fontSize: 24, textAlign: 'center', paddingHorizontal: 5, marginBottom: 10}}>Per continuare devi fornire il consenso all'utilizzo della POSIZIONE</Text>
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

  const formattaOrario = (ore, minuti) => {
    if(ore<10){
        ore = "0"+ore.toString()
    }
    if(minuti<10){
        minuti = "0"+minuti.toString()
    }
    return ore+":"+minuti
  }

  return ( //Permesso concesso
      <View style={{ flex: 1 }}>
          <MapView
            onUserLocationChange={(event) => {setLocation(event.nativeEvent.coordinate)}}
            onRegionChangeComplete={(region) => {
              setDeltas({latitude: region.latitudeDelta, longitude: region.longitudeDelta});
            }}
            showsIndoors={false}
            showsBuildings={false}
            onMapReady = {() => setReadyStyle(true)}
            style={[{width: "100%"}, readyStyle? {height: "100%"} : {height: 100}]}
            initialRegion={{
                latitude: fermate.length>0 ? parseFloat(fermate[0].latitudine) : 40.6748035,
                longitude: fermate.length>0 ? parseFloat(fermate[0].longitudine) : 14.7576367,
                latitudeDelta: deltas.latitude,
                longitudeDelta: deltas.longitude,
            }}
            region={follow && location?
                {
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: deltas.latitude,
                  longitudeDelta: deltas.longitude,
                }
              :
                null
            }
            showsMyLocationButton={false}
            showsCompass={false}
            showsUserLocation={servicesEnabled}
            provider="google"
            pitchEnabled={false}
            showsPointsOfInterest={false}
          >
              {fermate.map(fermata =>
                <Marker
                key={fermata.via} 
                coordinate={{ latitude: parseFloat(fermata.latitudine), longitude: parseFloat(fermata.longitudine)}}
                title={fermata.via+" ("+formattaOrario(fermata.ore, fermata.minuti)+")"}
                />
              )}
          </MapView>

          <View style={{position: 'absolute', top: StatusBar.currentHeight+25, right: 25, alignSelf: 'flex-end'}}>
            <Button
            icon={<Icon size={30} name={servicesEnabled? (follow? (location!==null? "gps-fixed": "search") : "gps-not-fixed") : "gps-off"} color="black" style={{opacity: 1}} />}
            containerStyle={{opacity: 1, elevation: 6}}
            buttonStyle={{backgroundColor: "white", borderRadius: 5}}
            title=""
            onPress={servicesEnabled? //GPS acceso?
              () => {
                setFollow(!follow); //toggle del follow sulla posizione
              }
              : //altrimenti
              () => {
                Location.enableNetworkProviderAsync() //chiedo di accendere il GPS
                .then((value) => setServicesEnabled(true))
                .catch((err) => setServicesEnabled(false))
              }
            }
            />
          </View>
      </View>
  );
};

export default LocationScreen;