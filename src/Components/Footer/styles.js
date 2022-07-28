import styled from "styled-components";
import {colors} from "../../styles/globalStyles"

export const Wrapper = styled.footer`
  border-top: 3px solid ${colors.red};
  height: 10vh;
  color: ${colors.white};
  box-sizing: border-box;
  text-align: right;
  padding-right: 50px;
  font-size: 14px;
`;

export const Link = styled.a`
  line-height: 50px;
  color: ${colors.white};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
