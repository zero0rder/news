import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CountryContext } from "../../contexts";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MobileMenu from "./mobileMenu";
import { headerStyles } from "../../styles/header";
import { headerTabs } from "../../utils/mock";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => (
  <AppBar>
    <Toolbar sx={headerStyles.toolbar}>
      <ButtonGroup variant="text" sx={headerStyles.buttonGroupWeb}>
        {getNavItems()}
      </ButtonGroup>
      <ButtonGroup sx={headerStyles.buttonGroupMobile}>
        <MobileMenu />
      </ButtonGroup>
      <ButtonGroup>{toggleCountry()}</ButtonGroup>
    </Toolbar>
  </AppBar>
);

const countryTabs = ["us", "in"];
const toggleCountry = () => {
  const { country, setCountry } = useContext(CountryContext);
  return countryTabs.map((c) => (
    <Button
      {...{
        key: c,
        color: "inherit",
        onClick: () => setCountry(() => c),
      }}
      sx={{
        backgroundColor: country == c ? "#ff5722" : "",
        ...headerStyles.buttonHover,
      }}
    >
      {c}
    </Button>
  ));
};

const getNavItems = () => {
  const { pathname } = useLocation();
  return headerTabs.map(({ label, href }) => (
    <Button
      {...{
        key: label,
        color: "inherit",
        to: href,
        component: Link,
      }}
      sx={{
        backgroundColor: pathname == href ? "#ff5722" : "",
        ...headerStyles.buttonHover,
      }}
    >
      {label}
    </Button>
  ));
};

export default Header;
