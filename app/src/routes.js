import { createStackNavigator, createAppContainer } from "react-navigation";

import Contact from "./screens/Contact/Contact";
import DPOContact from "./screens/DPOContact/DPOContact";

const AppNavigator = createStackNavigator({
  DPOContactForm: {
    screen: DPOContact
  },
  ContactInformationForm: {
    screen: Contact,
  },
},{
  mode: 'modal',
  headerMode: 'none'
});
export default createAppContainer(AppNavigator);
