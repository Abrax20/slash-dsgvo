import DPOLabel from '../../Label/Label';
import styled from 'styled-components/native';

import { colors } from './../../../styles'

export const Container = styled.View`
  background-color: ${colors.background};
`;
export const Label = styled(DPOLabel)`
  margin-top: 32px;
  margin-left: 16px;
  margin-bottom: 8px;
`;
export const Footer = styled.View`
  margin-top: 32px;
`;
