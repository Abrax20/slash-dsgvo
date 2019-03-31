import React from 'react';

import Header from '../Header/Header';
import { Container, Footer } from './styled';
import DPOContactForm from "../components/forms/DPOContactForm/DPOContactForm";
import ContactInformationForm from "../components/forms/ContactInformationForm/ContactInformationForm";

export const App = () => (
  <Container>
    <Header title={'GDPR Complaince Checker'} />
    <ContactInformationForm/>
    <Footer />
  </Container>
);
export default App;
//     <DPOContactForm />
