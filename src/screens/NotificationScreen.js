import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import NotificationPost from '../components/NotificationScreen/NotificationPost';
import { colors } from '../const/Colors';
import NotificationAnniv from '../components/NotificationScreen/NotificationAnniv';
import * as Animatable from 'react-native-animatable';

DATA = {
  text01: 'Brahim Kellou a ajouté une nouvelle photo à son album',
  text02: "C'est l'anniversaire de Abdelhak Ouchar",
  text03: 'Abdelmajid Bouikken vous a envoyé une photo',
  text04: 'Adel Namani a ajouté une photo à son album',
  text05: 'Youcef Remil a ajouté une nouvelle photo à son album',
  text06: 'Brahim Kellou a ajouté une nouvelle photo à son album',
}

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
        <ScrollView contentContainerStyle={{
          flex: 1,
          width: '100%',
        }}>
          <Animatable.View animation="fadeInUp" delay={200}>
            <NotificationPost text={DATA.text01} src={require('../assets/son1.png')}/>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={400}>
            <NotificationAnniv text={DATA.text02} src={require('../assets/son2.png')}/>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={600}>
            <NotificationPost text={DATA.text03} src={require('../assets/son3.png')}/>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={800}>
            <NotificationPost text={DATA.text04} src={require('../assets/son04.jpg')}/>
          </Animatable.View>
          <Animatable.View animation="fadeInUp" delay={1000}>
            <NotificationPost text={DATA.text05} src={require('../assets/father.png')}/>
          </Animatable.View>
        </ScrollView>
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
