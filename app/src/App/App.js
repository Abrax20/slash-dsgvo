import React from 'react';

import Header from '../Header/Header';
import { Container, Footer } from './styled';
import SocketIOClient from 'socket.io-client';
import DPOContactForm from "../components/forms/DPOContactForm/DPOContactForm";
import ContactInformationForm from "../components/forms/ContactInformationForm/ContactInformationForm";

export const socket = SocketIOClient('http://localhost:3000');
socket.emit('OPEN_SIGNATURE_SCREEN');
console.log('socket', socket);
export const App = () => (
  <Container>
    <Header title={'GDPR Complaince Checker'} />
    <ContactInformationForm/>
    <Footer />
  </Container>
);
export default App;
//     <DPOContactForm />
