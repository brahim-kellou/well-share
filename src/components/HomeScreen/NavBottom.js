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
        <View style={styles.galleryIcon}> 
          <TouchableOpacity
            style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
          >
            <Icon  
              name='image'
              type='feather'
              color={colors.secondaryColor}
              size={26}
            />
          </TouchableOpacity>
        </View>
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
