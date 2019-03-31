import React from 'react';

import {
  Container
} from './styled';
import WebView from "../screens/WebView/WebView";
import Header from "../components/Header/Header";

export const App = () => (
  <Container>
    <Header />
    <WebView/>
  </Container>
);
export default App;
