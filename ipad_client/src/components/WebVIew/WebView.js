import React from 'react';
import { RNWebView } from './styled';

export const WebView = ({}) => (
  <RNWebView
    source={{uri: 'https://github.com/facebook/react-native'}}
  />
);

