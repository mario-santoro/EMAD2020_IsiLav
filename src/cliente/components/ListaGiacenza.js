import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import {datetoDDMMYYYY} from '../services/Utils'

const ListaGiacenza = ({prodotto}) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
  <View style={styles.item}>
    <ListItem containerStyle={styles.itemInterno}  onPress={()=>setShouldShow(!shouldShow)}  >      
          <Image source={{uri: prodotto.immagine}} resizeMethod='auto' resizeMode='cover' style={{ width: 125, height: 128 }} />
          <ListItem.Content>
            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold',  marginLeft: 8 }}>{prodotto.nome_prodotto}</ListItem.Title>
            <ListItem.Title style={{ marginLeft: 8, fontSize: 18, color:"#3E4349" }}>Q.tà: <Text style={{ fontWeight: 'bold', }}>{prodotto.quantità}</Text></ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron name="expand-more" color="#E9EBED" size={50} />        
        </ListItem>
        <View style={styles.containerP} >         
            {shouldShow ? (
              <View >
                <View style={{ flexDirection: "row", paddingHorizontal:10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18,  color:"#3E4349", flex:1}}>Data ordine</Text>
                  <View style={{flex:1,}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf:"flex-end", color:"#3E4349"}}>Q.tà</Text>
                  </View>
                </View>
                <FlatList
                  data={prodotto.dettagli}
                  renderItem={({ item }) => (
                    <ListItem containerStyle={styles.itemInterno} bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title style={{ color:"#3E4349"}}>{datetoDDMMYYYY(new Date(item.data))}</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Title style={{ fontWeight: 'bold', color:"#3E4349"}}>{item.quantità}</ListItem.Title>
                    </ListItem>
                  )}
                  keyExtractor={item => item.id_noleggio.toString()}
                />
              </View>
            ) : null}          
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item:{ 
    flexDirection: "column",
    padding: 5,
    marginVertical:10,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: "#E9EBED",
    borderRadius: 10,
    backgroundColor:"#F8FFFC"
  },
  itemInterno:{ 
    backgroundColor:"#F8FFFC"}
});

export default ListaGiacenza;