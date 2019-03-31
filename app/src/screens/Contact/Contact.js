import React from 'react';

import { saveContact } from "./socket";
import { Container, Footer } from './styled';
import Header from '../../components/Header/Header';
import ContactInformationForm from "../../components/forms/ContactInformationForm/ContactInformationForm";

export const ContactInformation = ({ navigation }) => (
  <Container>
    <Header title={'GDPR Complaince Checker'} />
    <ContactInformationForm onSubmit={(data) => saveContact({ ...navigation.state.params, ...data })} />
    <Footer />
  </Container>

);
export default ContactInformation;
