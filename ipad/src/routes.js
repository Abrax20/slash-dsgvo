import WebView from './screens/WebView/WebView';
import Submission from "./screens/Submission/Submission";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  WebView: {
    screen: WebView
  },
  Submission: {
    screen: Submission,
  },
},{
  mode: 'modal',
  headerMode: 'none'
});
export default createAppContainer(AppNavigator);
