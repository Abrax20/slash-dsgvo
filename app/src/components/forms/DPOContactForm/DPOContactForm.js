import React, { Component } from 'react';

import TextInput from "../../TextInput/TextInput";
import { Container, Label, Footer } from './styled';
import PrimaryButton from "../../Buttons/PrimaryButton";

export default class DPOContactForm extends Component {
  state = {
    dpo_name: '',
    dpo_email: '',
    company_name: '',
    office_location: '',
    dpo_phone_number: '',
  };

  submit = () => {
    this.props.onSubmit();
  };

  render() {
    return (
      <Container>
        <Label>Your Company</Label>
        <TextInput
          value={this.state.company_name}
          placeholder={'example GmbH'}
          onChangeText={company_name => this.setState({ company_name })} />
        <Label>Data Protection Officer (DPO)</Label>
        <TextInput
          value={this.state.dpo_name}
          placeholder={'Max Musterman'}
          onChangeText={dpo_name => this.setState({ dpo_name })} />
        <Label>DPO E-Mail</Label>
        <TextInput
          value={this.state.dpo_email}
          placeholder={'max.musterman@example.de'}
          onChangeText={dpo_email => this.setState({ dpo_email })} />
        <Label>DPO/Office Phone number</Label>
        <TextInput
          value={this.state.dpo_phone_number}
          placeholder={'+49 166 166 166'}
          onChangeText={dpo_phone_number => this.setState({ dpo_phone_number })} />
        <Label>Office location</Label>
        <TextInput
          value={this.state.office_location}
          placeholder={'Gasteiner Straße 13, 10717'}
          onChangeText={office_location => this.setState({ office_location })} />
        <Footer>
          <PrimaryButton onPress={this.submit}>Start now</PrimaryButton>
        </Footer>
      </Container>
    )
  }
}
