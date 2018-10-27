import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CamScreen from '../screens/CamScreen';
import DrawerContentComponents from './DrawerContentComponents';
import { colors } from '../const/Colors';
import { Icon } from 'react-native-elements';

import { createDrawerNavigator, createStackNavigator} from 'react-navigation';

const HomeNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notification: {
    screen: NotificationScreen,
  },
  Cam: {
    screen: CamScreen
  }
}, {
  navigationOptions: {
    
    headerStyle: {
      backgroundColor: colors.secondaryColor,
    },
    headerTintColor: '#fff',
  }
})

const MainNavigation = createDrawerNavigator({
  HomeNavigation: {
    screen: HomeNavigation,
  }
}, {
  contentComponent: DrawerContentComponents
});




export default MainNavigation;
