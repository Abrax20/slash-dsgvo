import React, { Component } from 'react';

import { colors } from "../../../styles";

import Line from "../../Line/Line";
import TextInput from "../../TextInput/TextInput";
import { Container, Label, Footer } from './styled';
import PrimaryButton from "../../Buttons/PrimaryButton";

export default class ContactInformationForm extends Component {
  render() {
    return (
      <Container>
        <Label>Lead name</Label>
        <TextInput placeholder={'Lead name'} />
        <Line color={colors.white} />
        <Label>Messename</Label>
        <TextInput placeholder={'Messename'} />
        <Label>Messe Ort</Label>
        <TextInput placeholder={'Messe Ort'} />
        <Footer>
          <PrimaryButton>Start now</PrimaryButton>
        </Footer>
      </Container>
    )
  }
}
