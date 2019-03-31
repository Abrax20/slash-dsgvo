import React, { Component } from "react";
import { WebView } from "react-native";
//import WKWebView from 'react-native-wkwebview-reborn';

// ...
class MyWebComponent extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://google.com/" }}
      />
    );
  }
}
export default MyWebComponent;
