import React from "react";
import { ThemeProvider } from "styled-components";

import { Footer, Header, Main } from "./components/Layout";
import { NavBar, NavItem, NavLink, NavImg } from "./components/Navbar";

function App() {
  const theme = {
    primary: {
      main: "#000000",
      light: "#ffffff",
      dark: "# 0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
    spacing: (factor) => `${factor * 8}px`,
  };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href="#">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">DashBoard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main></Main>
      <Footer> This is the footer</Footer>
    </ThemeProvider>
  );
}
export default App;
