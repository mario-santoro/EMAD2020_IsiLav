import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, ScrollView, StatusBar, Image } from 'react-native';
import TopBar from '../components/TopBar';
import { Icon, Button, Overlay, ListItem } from 'react-native-elements';

const ResoScreen = ({navigation, route}) => {
    const selezionati = route.params.selezionati;
    return (
    <View style={{flex: 1, backgroundColor: "#F8FFFC"}}>
      <TopBar />

      <ScrollView contentContainerStyle={{alignItems: "center"}}>
        <View style={{backgroundColor: "orange", marginTop: 0, alignItems: 'center', width: "100%", padding: 5, elevation: 5}}>
          <Icon name="warning" color="#F8FFFC" size={32}/>
          <Text style={{color: "#F8FFFC", fontWeight: 'bold', fontSize: 18}}>Attenzione</Text>
          <Text style={{textAlign: "center", color: "#F8FFFC", fontSize: 16}}>Per un reso non abbinato ad un nuovo ordine, potrebbero essere applicati dei costi aggiuntivi</Text>
        </View>
        

        <View style={{width: "90%", marginTop: 10}}>
          <Text style={{fontSize: 16, color: '#3E4349'}}>Questo reso ti costerà:</Text>
          <Text style={{fontSize: 16, color: 'orange', fontWeight: 'bold'}}>9.99€</Text>
          <Text style={{fontSize: 16, color: '#3E4349'}}>Data selezionata:</Text>
          <Text style={{fontSize: 16, color: '#9DE7CD', fontWeight: 'bold'}}>{route.params.data}</Text>
          <Text style={{fontSize: 16, color: '#3E4349'}}>Luogo selezionato:</Text>
          <Text style={{fontSize: 16, color: '#9DE7CD', fontWeight: 'bold'}}>{route.params.luogo}</Text>
          <Text style={{fontSize: 16, color: '#3E4349'}}>Articoli scelti:</Text>

          {selezionati.map(item =>
            <View key={item.id} style={{flexDirection: 'row', alignItems:'center', width: "100%", marginVertical: 5, borderColor: "#9DE7CD", borderWidth: 1, padding: 2, borderRadius: 5, backgroundColor: "#F8FFFC"}}>
              <View style={{flex: 2, flexDirection: 'row', alignItems:'center', paddingHorizontal: 10}}>
                <Text style={{color: "#9DE7CD", fontWeight: 'bold', fontSize: 18}}>{item.name}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, textAlign:'center', color: "#3E4349", fontSize: 18}}>{item.quantità}</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      
      <View style={{flexDirection:'row', width: "100%", borderTopWidth: 0.5, borderColor: "#9DE7CD", marginTop: 10}}>
          <Button
          icon={<Icon size={24} name="keyboard-arrow-left" color="#9DE7CD" />}
          containerStyle={{flex: 1, alignSelf: 'flex-start', padding: 5}}
          buttonStyle={{borderColor: "#9DE7CD", borderRadius: 15, borderWidth: 1}}
          titleStyle={{color: "#9DE7CD", fontSize: 16}}
          title="INDIETRO"
          type="outline"
          onPress={() => navigation.goBack()}
          />
          <Button
          icon={<Icon size={24} name="done" color="#F8FFFC" />}
          iconRight={true}
          containerStyle={{flex:1, alignSelf: 'flex-end', padding: 5}}
          buttonStyle={{backgroundColor: "#9DE7CD", borderRadius: 15}}
          titleStyle={{color: "#F8FFFC", fontSize: 16}}
          title="PROCEDI"
          onPress={() => navigation.navigate("PayOrdine")}
          />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  }
  
});

export default ResoScreen;