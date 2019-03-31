import styled from 'styled-components/native';

import { colors } from "../../styles";

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ color }) => (color || colors.primary)};
  
`;
export default Line;
