import React, {Component} from 'react';
import SignaturePad from 'react-native-signature-pad';

import {
  Container
} from './styled';

export default class Demo extends Component {
  render = () => {
    return (
      <Container>
        <SignaturePad onError={this._signaturePadError}
                      onChange={this._signaturePadChange}
                      style={{flex: 1, backgroundColor: 'white'}}/>
      </Container>
    )
  };

  _signaturePadError = (error) => {
    console.error(error);
  };

  _signaturePadChange = ({base64DataUrl}) => {
    console.log("Got new signature: " + base64DataUrl);
  };
}
