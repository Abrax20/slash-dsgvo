import React from 'react';
import SocketIOClient from 'socket.io-client';


import AppContainer from './../routes';
export const socket = SocketIOClient('http://localhost:3000');
export const App = () => <AppContainer />;
export default App;
