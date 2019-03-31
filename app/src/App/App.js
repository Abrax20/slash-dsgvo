import React from 'react';
import SocketIOClient from 'socket.io-client';


import AppContainer from './../routes';
export const socket = SocketIOClient('http://42751929.ngrok.io/');
export const App = () => <AppContainer />;
export default App;
