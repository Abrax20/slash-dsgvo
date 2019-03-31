import React from 'react';

import AppContainer from '../routes';
import SocketIOClient from 'socket.io-client';

export const socket = SocketIOClient('http://localhost:3000');
export const App = () => <AppContainer />;
export default App;
