import React, { Component } from 'react';

import { colors } from "../../../styles";

import Line from "../../Line/Line";
import TextInput from "../../TextInput/TextInput";
import { Container, Label, Footer } from './styled';
import PrimaryButton from "../../Buttons/PrimaryButton";

export default class ContactInformationForm extends Component {
  state = {
    lead_name: '',
    expo_title: '',
    expo_location: '',
  };

  submit = () => {
    this.setState({
      lead_name: '',
      expo_title: '',
      expo_location: '',
    });
    this.props.onSubmit();
  };


  render() {
    return (
      <Container>
        <Label>Lead name</Label>
        <TextInput
          placeholder={'Lead name'}
          value={this.state.lead_name}
          onChangeText={lead_name => this.setState({ lead_name })} />
        <Line color={colors.white} />
        <Label>Messename</Label>
        <TextInput
          placeholder={'Messename'}
          value={this.state.expo_title}
          onChangeText={expo_title => this.setState({ expo_title })} />
        <Label>Messe Ort</Label>
        <TextInput
          placeholder={'Messe Ort'}
          value={this.state.expo_location}
          onChangeText={expo_location => this.setState({ expo_location })} />
        <Footer>
          <PrimaryButton onPress={this.submit}>Save</PrimaryButton>
        </Footer>
      </Container>
    )
  }
}
