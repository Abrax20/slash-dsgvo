import React from 'react';

import {
  Container
} from './styled';
import WebView from "../screens/WebView/WebView";
import Header from "../components/Header/Header";
import Submission from "../screens/Submission/Submission";

export const App = () => (
  <Container>
    <Header />
    <Submission/>
  </Container>
);
export default App;
//<WebView/>
