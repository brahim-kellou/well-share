import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../const/Colors';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class FAB extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
          onPress={() => this.props.navigation.navigate('Cam')}
        >
          <Icon  
            name='camera'
            type='feather'
            color='white'
            size={26}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 28,
    alignSelf: 'center',
    height: 56,
    width: 56,
    borderRadius: 56/2,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  }
})



export default withNavigation(FAB);
