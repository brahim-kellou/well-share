import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, ImagePicker } from 'expo';

import { Icon } from 'react-native-elements';

export default class CamScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
              }}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 50,
                    right: 40
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                    <Icon
                      type='feather'
                      name='refresh-cw'
                      size={30}
                      color='white'
                    />
                  
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 40
                  }}
                  onPress={this._pickImage}
                >
                  <Icon
                    type='feather'
                    name='image'
                    size={30}
                    color='white'
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 60,
                    alignSelf: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: 'white'
                  }}
                >
                </TouchableOpacity>
                <Text style={[styles.text, {
                  position: 'absolute',
                  bottom: 5,
                  left: 70
                }]}>
                  RAFALE
                </Text>
                <Text style={[styles.text, {
                  position: 'absolute',
                  bottom: 5,
                  alignSelf: 'center',
                  color: 'white'
                }]}>
                  PHOTO
                </Text>
                <Text style={[styles.text, {
                  position: 'absolute',
                  bottom: 5,
                  right: 70
                }]}>
                  VIDEO
                </Text>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)'
  }
})