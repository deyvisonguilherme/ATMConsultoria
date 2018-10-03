import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import BarraNavegacao from '../components/barraNavegacao';

const detalheCliente = require('../../assets/detalhe_cliente.png');
const cliente1 = require('../../assets/cliente1.png');
const cliente2 = require('../../assets/cliente1.png');

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txtTitle: {
    fontSize: 30,
    color: '#b9c941',
    marginLeft: 10,
    marginTop: 25,
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10,
  },
  txtDetalheCliente: {

  },
});

export default class ClientScreen extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor="#ccc" />
        <BarraNavegacao />

        <View style={styles.header}>
          <Image source={detalheCliente} />
          <Text style={styles.txtTitle}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Loren lorein lorin</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Loren lorein lorin</Text>
        </View>

      </View>
    );
  }
}
