import React from 'react';

import {
  Container
} from './styled';
import AppContainer from '../routes';
import SocketIOClient from 'socket.io-client';

export const socket = SocketIOClient('http://localhost:3000');
export const App = () => {
  return (
    <AppContainer />
  );
};
export default App;
