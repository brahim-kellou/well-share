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
    if (this.state.actif) {
      color='#ff7675'
    } else {
      color='#ffd7d7'
    }
    return (
      <TouchableOpacity 
        style={[styles.backCercle, this.props.style, {backgroundColor: color}]}
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
    width: 70,
    height: 70,
    borderRadius: 37,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  membreImage: {
    height: 66,
    width: 66,
    borderRadius: 33,
  }
})


export default MembrePhoto;
