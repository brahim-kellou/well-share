import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

import MembrePhoto from '../components/HomeScreen/MembrePhoto';
import NavBottom from '../components/HomeScreen/NavBottom';
import { colors } from '../const/Colors';
import { Icon } from 'react-native-elements';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/BG_home.png')}
          style={styles.container}
        >
          <View style={styles.header}>
            <View style={styles.menuIcon}>
              <TouchableOpacity style={{padding: 3}}>
                <Icon 
                  type='feather'
                  name='menu'
                  size={24}
                  color={colors.thirdColor}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo} 
                source={require('../assets/logo_header.png')}
              />
            </View>
            <View style={styles.notificationIcon}>
              <TouchableOpacity style={{padding: 3}}
                onPress={() => this.props.navigation.navigate('Notification')}
              >
                <Icon 
                  type='feather'
                  name='bell'
                  size={24}
                  color={colors.thirdColor}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.treeFamilyContainer}>
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 40,
                left: 190,
              }}
            />
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 150,
                left: 100,
              }}
            />
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 150,
                left: 190,
              }}
            />
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 260,
                left: 10,
              }}
            />
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 260,
                left: 100,
              }}
            />
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 260,
                left: 187,
              }}
            />
            <MembrePhoto
              src={require('../assets/profile.png')}
              style={{
                position: 'absolute',
                top: 260,
                left: 274,
              }}
            />
          </View>
          
          <NavBottom/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.greyColor,
  },
  header: {
    height: 80,
    width: '100%',
  },
  logoContainer: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    marginTop: 30
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  menuIcon: {
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  notificationIcon: {
    position: 'absolute',
    bottom: 10,
    right: 20
  },
  treeFamilyContainer: {
    width: '100%',
    flex: 1
  }
})

export default HomeScreen;
