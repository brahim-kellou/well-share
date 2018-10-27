import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { colors } from '../../const/Colors';
import { Icon } from 'react-native-elements';

import FAB from './FAB';

class NavBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/BarBottom.png')}
        style={styles.container}>
        <FAB/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  galleryIcon: {
    position: 'absolute',
    right: 26,
  }
})

export default NavBottom;
