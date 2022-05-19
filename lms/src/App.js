import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { ImHome3 } from "react-icons/im";
import { Footer, Main } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderImage from "./components/Spinner";
import { DASHBOARD, CATALOG } from "./shared/routes";
import loading from "./assets/Spin-1s-200px.gif";

const Dashboard = React.lazy(() => {
  return import("./containers/Dashboard/index");
});
const NotFound = React.lazy(() => {
  return import("./containers/404");
});
function App() {
  const theme = {
    primary: {
      main: "#6a1b9a",
      light: "#9c4dcc",
      dark: "#38006b",

      textColor: "#ffffff",
    },
    danger: {
      main: "#e91e63",
      dark: "#b0003a",
    },

    tColor: {
      tbColor: "#e1bee7",
      tbhover: "#ab47bc",
    },
    secondary: {
      main: "#6a1b9a",
      light: "",
      dark: "#38006b",
      textColor: "#ffffff",
    },
    spacing: (factor) => `${factor * 8}px`,
  };
  let routes = (
    <Suspense fallback={<HeaderImage src={loading} />}>
      <Switch>
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path={CATALOG}>
          <HeaderImage src={loading} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );

  return (
    <ThemeProvider theme={theme}>
      <NavBar>
        <NavItem>
          <NavLink href={CATALOG}>
            <ImHome3 size="35px" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={CATALOG}>Catalog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={DASHBOARD}>DashBoard</NavLink>
        </NavItem>
      </NavBar>
      <Main>
        <Router>{routes}</Router>
      </Main>
      <Footer>Copyright {new Date().getFullYear()} @ Shehan Shanaka </Footer>
    </ThemeProvider>
  );
}
export default App;
