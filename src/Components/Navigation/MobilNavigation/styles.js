import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {colors, devices} from "../../../styles/globalStyles"

export const BodyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sidebar = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 2;
  background-color: ${colors.white};

  @media ${devices.laptop} {
    background-color: ${colors.red};
    position: fixed;
    box-shadow: 0px 1px 2px ${colors.black};
    width: 100%;
    height: 65px;
  }
`;

export const NavStyle = styled(motion.nav)`
  width: 300px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleIcon = styled(motion.button)`
  outline: none;
  border: none;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  background: transparent;
`;

export const UlStyle = styled(motion.ul)`
  margin: 0;
  padding: 25px;
  position: absolute;
  top: 180px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-left: 100px;
    top: 0px;
    padding: 0px;
    height: 65px;
    background-color: ${colors.red};
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${colors.white};
  width: 100%;

  @media ${devices.laptop} {
    padding: 20px;
  }
`;

export const LiStyle = styled(motion.li)`
  list-style-type: none;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  width: 180px;
  height: 50px;
  text-align: center;
  flex: 1;
  line-height: 50px;
  list-style: none;
  font-weight: bold;
  background-color: ${colors.blue};

  &:hover {
    background-color: ${colors.black};

  }
  @media ${devices.laptop} {
    line-height: 25px;
    height: 65px;
    margin-bottom: 0px;
    border-radius: 0px;
    background-color: red;
  }
`;

export const IconPlaceholderStyle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`;

export const RefreshStyle = styled(motion.div)`
  padding: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 20px;
  height: 20px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
