import styled from "styled-components";
import {fontSizes, colors} from "../../styles/globalStyles"

export const Wrapper = styled.footer`
  border-top: 3px solid ${colors.secondary};
  height: 10vh;
  color: ${colors.textColor};
  box-sizing: border-box;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: ${fontSizes.xs};
`;

export const Link = styled.a`
  line-height: 50px;
  color: ${colors.textColor};
  background-color:  ${colors.primary};
  padding: 10px;
  border-radius: 10px;
  border: 3px solid white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
