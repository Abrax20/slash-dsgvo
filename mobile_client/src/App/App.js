import React, { Component } from 'react';
import { DeviceEventEmitter, Alert } from 'react-native';

import { Container } from './styled';
import { BleManager } from 'react-native-ble-plx';
import Paragraph from './../components/Paragraph/Paragraph';


export default class App extends Component {
  state = {
    identifier: 'Estimotes',
    uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
  };

  constructor(props) {
    super(props);
    this.manager = new BleManager();
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        return
      }
      console.log('Device', device.name, device.id);
      if (device.name === this.state.identifier) {
        Alert.alert("Call");
        //console.log('device', device.name, device.id)
      }
    });
  }

  componentDidMount() {
    this.scanAndConnect()
  }

  render() {
    return (
      <Container>
        <Paragraph>Welcome to React Native!</Paragraph>
        <Paragraph>To get started, edit App.js</Paragraph>
      </Container>
    );
  }
}
