import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MainNavigation from './src/navigations/HomeNavigation';

export default class App extends React.Component {
  render() {
    return (
      <MainNavigation/>
    );
  }
}

const styles = StyleSheet.create({
});
