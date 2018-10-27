import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NotificationPost from '../components/NotificationScreen/NotificationPost';
import { colors } from '../const/Colors';
import NotificationAnniv from '../components/NotificationScreen/NotificationAnniv';

class NotificationScreen extends Component {
  static navigationOptions = {
    title: 'Notifications',
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NotificationPost/>
        <NotificationAnniv/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.greyColor,
  }
})

export default NotificationScreen;
