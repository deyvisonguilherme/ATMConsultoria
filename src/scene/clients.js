import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from '../components/barraNavegacao';

const detalheCliente = require('../../assets/detalhe_cliente.png');
const cliente1 = require('../../assets/cliente1.png');
const cliente2 = require('../../assets/cliente1.png');

export default class SceneClients extends Component {
    render() {
        return (
            <View>
                <StatusBar hidden backgroundColor="#ccc" />
                <BarraNavegacao />

                <View styles={styles.header}>
                    <Image source={detalheCliente} />
                    <Text styles={styles.txtTitle}>Nossos Clientes</Text>
                </View>

                <View >
                    <Image source={cliente1} />
                    <Text>Loren lorein lorin</Text>
                </View>
                
                <View>
                    <Image source={cliente2} />
                    <Text>Loren lorein lorin</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitle: {
        fontSize: 30,
        color: '#b9c941',
        marginleft: 10,
        marginTop: 25
    }
});
