import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './homeCorriereStile';


import PercorsoCorriere from '../components/PercorsoCorriere';
import GenericButton from '../components/GenericButton';
import TopBar from '../components/TopBar';
import { FlatList } from 'react-native-gesture-handler';


export default function homeCorriere() {

    return (
        
        <View style={styles.container}>
            
            <ScrollView>
                <Text>Picker calendario di Davide oi</Text>
                
                <PercorsoCorriere via="Madonna Di Fatima, 31" ore="10:00" numClienti="7" />
                
            </ScrollView>

            <View style={styles.bottom}>
                <GenericButton testo="Visualizza Mappa Percorso" onPress={() => navigation.navigate('login')} />
            </View>

        </View>
    );
}