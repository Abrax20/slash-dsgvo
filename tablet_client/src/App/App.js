import { Container } from "./styled";
import React, { Component } from 'react';
import { NativeModules } from 'react-native';
import BleManager from "react-native-ble-plx";
import Paragraph from "../components/Paragraph/Paragraph";


export default class RNbeaconArticle extends Component {
  constructor(props) {
    super(props);
    //this.manager = new BleManager();
  }

  componentWillMount(){
    console.log(NativeModules, BleManager);
  }

  componentDidMount() {
    /*
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        return
      }
      console.log('device', device.name, device.id)
      if (device.name === this.state.identifier) {
        this.setState("Is Running");
        this.setTimeout(() => this.setState({ state: 'Not Running' }))
      }
    });*/
  }

  render() {
    return (
      <Container>
        <Paragraph>Welcome</Paragraph>
      </Container>
    );
  }
}
