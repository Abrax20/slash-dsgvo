import React, {Component, Fragment} from "react";
import { WebView } from "react-native";
import { setupSocket } from "./socket";

export default class RNWebView extends Component {
  constructor(props) {
    super(props);
    setupSocket(props.navigation);
  }

  render() {
    return (
      <WebView
        source={{ uri: "https://google.com/" }}
      />
    );
  }
}
