import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';

import { colors } from '../const/Colors';
import { Icon } from 'react-native-elements';

class DrawerContentComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/BG_Drawer.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.userImage}
                source={require('../assets/profile.png')}
              />
              <View style={styles.backCercle}>
                <TouchableOpacity style={styles.frontCercle}>
                  <Icon
                    type='feather'
                    name='camera'
                    size={16}
                    color='#fff'
                  /> 
                </TouchableOpacity>
              </View>
            </View>
            
            <Text style={styles.userName}>Brahim Kellou</Text>
          </View>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.itemList}>
              <Icon
                type='feather'
                name='user-plus'
                size={24}
                color={colors.secondaryColor}
              />
              <Text style={styles.textItemList}>Ajouter un membre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemList}>
              <Icon
                type='feather'
                name='plus'
                size={24}
                color={colors.secondaryColor}
              />
              <Text style={styles.textItemList}>Ajouter un événement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemList}>
              <Icon
                type='feather'
                name='calendar'
                size={24}
                color={colors.secondaryColor}
              />
              <Text style={styles.textItemList}>Calendrier</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <Image
              style={styles.footerImage}
              source={require('../assets/illustration.png')}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.greyColor,
    
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'rgba(255, 118, 117, 0.2)'
  },
  backCercle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 35, 
    height: 35, 
    borderRadius: 15, 
    backgroundColor: colors.greyColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  frontCercle: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userName: {
    marginTop: 20,
    fontSize: 18,
  },
  contentContainer: {
    marginTop: 40,
  },
  itemList: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10
  },
  textItemList: {
    marginLeft: 20,
    fontSize: 18,
    color: colors.secondaryColor
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto'
  },
  footerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    opacity: .3
  },
})



export default DrawerContentComponents;
