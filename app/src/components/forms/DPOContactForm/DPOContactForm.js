import React, { Component } from 'react';

import TextInput from "../../TextInput/TextInput";
import { Container, Label, Footer } from './styled';
import PrimaryButton from "../../Buttons/PrimaryButton";

export default class DPOContactForm extends Component {
  render() {
    return (
      <Container>
        <Label>Your Company</Label>
        <TextInput placeholder={'example GmbH'} />
        <Label>Data Protection Officer (DPO)</Label>
        <TextInput placeholder={'Max Musterman'} />
        <Label>DPO E-Mail</Label>
        <TextInput placeholder={'max.musterman@example.de'} />
        <Label>DPO/Office Phone number</Label>
        <TextInput placeholder={'+49 166 166 166'} />
        <Label>Office locationr</Label>
        <TextInput placeholder={'Gasteiner Straße 13, 10717'} />
        <Footer>
          <PrimaryButton>Start now</PrimaryButton>
        </Footer>
      </Container>
    )
  }
}
