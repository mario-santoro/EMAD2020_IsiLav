import React, { useState } from 'react';
import { SafeAreaView, Button, View, Text, StatusBar, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import TopBar from '../components/TopBar';
import * as API from '../services/API';
import Lis from '../components/ListaGiacenza';

//Ottengo le categorie disponibili dall'API
const giacenza = API.getGiacenza();


const dat = API.getDate();

const Giacenza = ({ navigation }) => {
    const [shouldShow, setShouldShow] = useState(true);

    return (
        <View  
            style={styles.container}
        >

            <TopBar navigation={navigation} />
            <View style={{
                alignItems: "center", marginTop: 15,
            }}>
                <Text style={styles.titolo}>La mia giacenza</Text>
            </View>
            <FlatList 
                data={giacenza}
                renderItem={({ item }) => (

                    <ListItem onPress={() => setShouldShow(!shouldShow)} bottomDivider>
                        <View style={{flexDirection:"column"}}>
                        <View style={{flexDirection:"row", width:380,  }}>
                        <Image source={item.image} resizeMethod='auto' resizeMode='cover' style={{ width: 125, height: 128 }} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: "#6AA84F", fontWeight: 'bold', marginBottom: 30, marginLeft:10 }}>{item.name}</ListItem.Title>
                            <ListItem.Title style={{  marginLeft:10 }}>Q.tà: <Text style={{ fontWeight: 'bold', }}>{item.quantità}</Text></ListItem.Title>                                                    
                        </ListItem.Content>
                        <Icon style={{marginTop:50,}} name="expand-more" color="lightgrey" size={32} ></Icon>
                        </View>
                      
                        <Lis shouldShow={shouldShow} />
                        </View>

                    </ListItem>

                )

                }
                keyExtractor={item => item.id}

            />


        </View>
    );
};



const styles = StyleSheet.create({
    containerP: {
        width: 300,
        paddingTop: 50,
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titolo: {
        fontSize: 20,
        color: '#6AA84F',
        fontWeight: "bold"

    },

});

export default Giacenza;
