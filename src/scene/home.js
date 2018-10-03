import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import BarraNavegacao from '../components/barraNavegacao';

const logo = require('../../assets/logo.png');
const menuCliente = require('../../assets/menu_cliente.png');
const menuContato = require('../../assets/menu_contato.png');
const menuEmpresa = require('../../assets/menu_empresa.png');
const menuServico = require('../../assets/menu_servico.png');

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuGroup: {
    flexDirection: 'row',
  },
  imgMenu: {
    margin: 15,
  },
});

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden backgroundColor="#ccc" />
        <BarraNavegacao />

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGroup}>
            <TouchableHighlight
              underlayColor="#b9c941"
              activeOpacity={0.3}
              onPress={() => this.props.navigation.navigate('Clients')}
            >
              <Image
                style={styles.imgMenu}
                source={menuCliente}
              />
            </TouchableHighlight>
            <Image style={styles.imgMenu} source={menuContato} />
          </View>
          <View style={styles.menuGroup}>
            <Image style={styles.imgMenu} source={menuEmpresa} />
            <Image style={styles.imgMenu} source={menuServico} />
          </View>
        </View>

      </View>
    );
  }
}
