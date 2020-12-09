import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './stileFAQ';

import DomandaFAQ from '../components/DomandaFAQ';

export default class FAQ extends React.Component {

    render() {
        

        const domande = [{ id: '1', faq: 'Domanda #1', risposta: 'prova uno' },
        { id: '2', faq: 'Domanda #2', risposta: 'prova due' },
        { id: '3', faq: 'Domanda #3', risposta: 'prova tre' },
        { id: '4', faq: 'Domanda #4', risposta: 'prova quattro' }];

        const list = domande.map(i => {

            return <DomandaFAQ domanda={i.faq} risposta={i.risposta} />

        })

        return (
            <View style={styles.container}>
                <ScrollView>
                    
                    {list}

                </ScrollView>
            </View>
        );
    }
}