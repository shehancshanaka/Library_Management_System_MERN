import React from "react";
import { ThemeProvider } from "styled-components";
import { ImHome3 } from "react-icons/im";
import { Footer, Header, Main } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";

import Dashboard from "./containers/Dashboard";


function App() {
  const theme = {
    primary: {
      main: "#55047a",
      light: "#ca81f0",
      dark: "#20012e",
      textColor: "#ffff",
    },
    secondary: {
      main: "#fff",
    },
    spacing: (factor) => `${factor * 8}px`,
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <NavItem>
          <ImHome3 size="30px" />
        </NavItem>
        <NavItem>
          <NavLink href="#">Catalog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">DashBoard</NavLink>
        </NavItem>
      </NavBar>
      <Main>
        <Dashboard></Dashboard>
      </Main>
      <Footer>Copyright {new Date().getFullYear()} @ Spark Academy </Footer>
    </ThemeProvider>
  );
}
export default App;
