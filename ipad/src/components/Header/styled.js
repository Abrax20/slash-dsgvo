import styled from 'styled-components/native';

import { colors } from "../../styles";

export const Content = styled.View`
  flex: 1;
  position: relative;
`;
export const Container = styled.View`
  width: 100%;
  height: 85px;
  padding-top: 40px;
  background-color: ${colors.background};
`;
export const HeadlineContainer = styled.View`
  left: 0px;
  right: 0px;
  position: absolute;
  justify-content: center;
`;
