import React from "react";
import { ThemeProvider } from "styled-components";
import { ImHome3 } from "react-icons/im";
import { Footer, Header, Main } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";

function App() {
  const theme = {
    primary: {
      main: "#848484",
      light: "#424242",
      dark: "# 0086c3",
      textColor: "#000000",
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
      <Main></Main>
      <Footer> This is the footer</Footer>
    </ThemeProvider>
  );
}
export default App;
