import styled from 'styled-components/native';

import { colors } from "../../styles";

export const Line = styled.View`
  height: 2px;
  align-self: center;
  width: ${({ width }) => width || '100%'};
  background-color: ${({ color }) => (color || colors.primary)};
  
`;
export default Line;
