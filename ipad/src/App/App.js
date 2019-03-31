import React from 'react';

import {
  Container
} from './styled';
import WebView from "../screens/WebView/WebView";
import Header from "../components/Header/Header";
import Submission from "../screens/Submission/Submission";

import SocketIOClient from 'socket.io-client';
export const socket = SocketIOClient('http://localhost:3000');
console.log('socket', socket);
socket.emit('OPEN_SIGNATURE_SCREEN');

export const App = () => (
  <Container>
    <Header />
    <Submission/>
  </Container>
);
export default App;
//<WebView/>
