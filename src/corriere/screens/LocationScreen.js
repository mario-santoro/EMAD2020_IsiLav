import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as API from "../../cliente/services/API";
import { StatusBar } from 'react-native';
//NOTE VECCHIA VERSIONE CON L'USO DEI TASK
//TODO: Rilevare GPS spento (sia durante che all'inizio se viene rifiutato il dialog)
//TODO: regione iniziale mappa sull'ultima posizione conosciuta (AsyncStorage)
//TODO: alla prima location ottenuta, porre il focus sul marker

//NOTE NUOVA VERSIONE CON L'USERLOCATION DI MapView
//TODO: Rilevare GPS spento (sia durante che all'inizio se viene rifiutato il dialog)
        //su Android: usare il modulo react-native-android-location-enabler
        //su iOS: lo fa in automatico (?)

const LocationScreen = ({ navigation }) => {
    const [permessi, setPermessi] = useState(null);
    const [location, setLocation] = useState(null);
    const [servicesEnabled, setServicesEnabled] = useState(false);

    const [deltas, setDeltas] = useState({latitude: 0.001110116707721225, longitude: 0.001110699234485626}); //Per mantenere lo zoom impostato dall'utente sulla mappa 

    const [follow, setFollow] = useState(true); //Stato per impostare se la mappa deve o meno seguire la posizione dell'utente
    const [readyStyle, setReadyStyle] = useState(false); //Per settare l'altezza della MapView una volta caricarata
    
    const markers = API.getLuoghi();
    //let locationWatcher = null; //Per effettuare il cleanup nell'useEffect
    /*const receiveUpdate = (arg) => {
      //console.log(arg);
      setLocation(arg);
    }*/

    const richiediPermessi = () => {
        
        (async () => {
            //Proprietà "status" dell'oggetto restituito
            const { status } = await Location.requestPermissionsAsync();

            if(status === 'granted'){
              //Vecchio metodo con il task
              /*locationWatcher = await Location.watchPositionAsync({
                  accuracy: LocationAccuracy.BestForNavigation,
                  timeInterval: 5000, //intervallo in ms
                  distanceInterval: 0, //differenza in metri per triggerare
                  mayShowUserSettingsDialog: true //
                },
                receiveUpdate);*/
              
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

        //Prima dell'unmount della screen
        /*return () => {
          if(locationWatcher){
            locationWatcher.remove();
          }
        }*/
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
                  latitude: 40.6748035,
                  longitude: 14.7576367,
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
              showsUserLocation={servicesEnabled}
              provider="google"
              pitchEnabled={false}
              showsPointsOfInterest={false}
            >
                      {markers.map(marker =>
                    <Marker
                    key={marker.title} //meglio l'id del luogo ottenuto dal db
                    coordinate={{ latitude: marker.latitude, longitude: marker.longitude}}
                    title={marker.title}
                   
                 
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