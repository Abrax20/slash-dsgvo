import React from 'react';

import AppContainer from '../routes';
import SocketIOClient from 'socket.io-client';

// http://72a3f2d3.ngrok.io/

export const socket = SocketIOClient('https://42751929.ngrok.io/');
console.log(socket);
export const App = () => <AppContainer />;
export default App;
