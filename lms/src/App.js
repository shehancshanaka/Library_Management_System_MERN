import React,{Suspense} from "react";
import { ThemeProvider } from "styled-components";
import { ImHome3 } from "react-icons/im";
import { Footer, Main } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
      <Footer>Copyright {new Date().getFullYear()} @ Spark Academy </Footer>
    </ThemeProvider>
  );
}
export default App;
