import React from 'react';

import { Container, Footer } from './styled';
import Header from '../../components/Header/Header';
import DPOContactForm from "../../components/forms/DPOContactForm/DPOContactForm";

export const DPOContact = ({ navigation }) => (
  <Container>
    <Header title={'GDPR Complaince Checker'} />
    <DPOContactForm onSubmit={(data) => navigation.navigate('ContactInformationForm', data)} />
    <Footer />
  </Container>
);
export default DPOContact;
