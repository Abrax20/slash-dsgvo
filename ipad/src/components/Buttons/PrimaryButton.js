import React from 'react';

import styled from 'styled-components/native';

import {
  colors
} from "../../styles";

export const Container = styled.View`
  padding: 16px 32px;
  border-radius: 4px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;
export const Title = styled.Text`
  line-height: 27px;
  text-align: center;
  font-size: 22.656px;
  color: ${colors.white};
`;

export const PrimaryButton = ({ children }) => <Container><Title> { children } </Title></Container>;
export default PrimaryButton;
