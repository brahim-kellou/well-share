import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { colors } from '../../const/Colors';

class MembrePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actif: this.props.initActif,
    };
  }

  render() {
    let opacity = 0.3;
    actif = this.state.actif;
    actif ? opacity = 1 : null;
    return (
      <TouchableOpacity 
        style={[styles.backCercle, this.props.style]}
        onPress={() => {
          this.setState({actif: false})
        }}
      >
        <Image
          source={this.props.src}
          style={styles.membreImage}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backCercle: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: colors.greyColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.secondaryColor
  },
  membreImage: {
    height: 66,
    width: 66,
    borderRadius: 33,
  }
})


export default MembrePhoto;
