import React from 'react';
import {
  Content,
  Container,
  HeadlineContainer
} from './styled';
import Line from "../Line/Line";
import Label from "../Label/Label";
import Headline from "../Headline/Headline";

export const Header = () => (
  <Container>
    <Content>
      <HeadlineContainer>
        <Headline>DSGVO-Checker</Headline>
        <Line width={'40%'} />
      </HeadlineContainer>
      <Label>Exit</Label>
    </Content>
  </Container>
);
export default Header;
