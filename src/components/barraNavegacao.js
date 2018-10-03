import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
});

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}
