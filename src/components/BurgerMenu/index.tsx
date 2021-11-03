import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { styles } from "./styles";
import { Link as ScrollLink } from "react-scroll";

export const BurgerMenu = () => {
  return (
    <Menu styles={styles} right>
      <ScrollLink to="about" className="menu-item">
        About
      </ScrollLink>
      <ScrollLink to="portfolio" className="menu-item">
        Portfolio
      </ScrollLink>
      <ScrollLink to="contact" className="menu-item">
        Contact
      </ScrollLink>
    </Menu>
  );
};
