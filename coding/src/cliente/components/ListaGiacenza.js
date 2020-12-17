import React, { useState } from 'react';
import { SafeAreaView, Button, View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import * as API from '../services/API';

const ListaGiacenza = ({item} ) => {
  const dat = API.getDate();
  const [shouldShow, setShouldShow] = useState(false);
  return (
  <View style={styles.item}>
    <ListItem containerStyle={styles.itemInterno}  onPress={()=>setShouldShow(!shouldShow)}  >      
          <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ width: 125, height: 128 }} />
          <ListItem.Content>
            <ListItem.Title style={{ color: "#70D0AE", fontSize: 18, fontWeight: 'bold',  marginLeft: 8 }}>{item.name}</ListItem.Title>
            <ListItem.Title style={{ marginLeft: 8, fontSize: 18, color:"#3E4349" }}>Q.tà: <Text style={{ fontWeight: 'bold', }}>{item.quantità}</Text></ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron name="expand-more" color="#E9EBED" size={50} ></ListItem.Chevron>        
        </ListItem>
        <View style={styles.containerP} >         
            {shouldShow ? (
              <View >
                <View style={{ flexDirection: "row", paddingHorizontal:10 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18,  color:"#3E4349", flex:1}}>Data ordine</Text>
                  <View style={{flex:1,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18,   alignSelf:"flex-end" ,  color:"#3E4349"  }}>Q.tà</Text>
                  </View>
                </View>
                <FlatList
                  data={dat}
                  renderItem={({ item }) => (
                    <ListItem containerStyle={styles.itemInterno} bottomDivider>
                      <ListItem.Content>
                        <ListItem.Title style={{ color:"#3E4349"}} >{item.data}</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Title style={{ fontWeight: 'bold', color:"#3E4349"}}>{item.quantità}</ListItem.Title>
                    </ListItem>
                  )}
                  keyExtractor={item => item.id}
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