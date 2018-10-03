import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const imageBack = require('../../assets/jon-tyson.jpg');

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground source={imageBack} style={styles.image}>
          <Text>Inside</Text>
          <Button
            large
            rightIcon={{ name: 'code' }}
            title="Entrar"
            onPress={() => this.props.navigation.navigate('Signin')}
          />
          <Button
            large
            rightIcon={{ name: 'code' }}
            title="Criar uma conta"
            onPress={() => this.props.navigation.navigate('Signup')}
          />
        </ImageBackground>
      </View>
    );
  }
}
