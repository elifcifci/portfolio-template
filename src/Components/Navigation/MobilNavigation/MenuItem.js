import * as React from "react";
import {
  BodyStyle,
  LiStyle,
  TextPlaceholderStyle,
  RefreshStyle,
  NavbarLink
} from "./styles";


const variants = {
  open: {
    x: [0, 0,],
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    x: [0, -1, -300],
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, link, title }) => {
  const style = { background: "#45567d"};

  return (
    <LiStyle
      style={style}
      variants={variants}
      whileHover={{ scale: 1.1, background: "#2d2626" }}
      whileTap={{ scale: 0.95 }}
    >
      <NavbarLink to={link}>{title}</NavbarLink>
    </LiStyle>
  );
};