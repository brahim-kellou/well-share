import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { colors } from '../../const/Colors';
import { Icon } from 'react-native-elements';

class NotificationAnniv extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/anniv.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Oussama Bouikken a posté une nouvelle photo dans son album
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    alignSelf: 'center',
    height: 100,
    marginVertical: 10,
    backgroundColor: colors.secondaryColor,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  imageContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    color: '#fff',
  }
})

export default NotificationAnniv;
