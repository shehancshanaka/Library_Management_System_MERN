import styled from "styled-components";
import { Footer, Header, Main } from "./components/Layout";
import { Navbar, NavItem, NavLink } from "./components/Navbar";

const Title = styled.h1`
  color: red;
`;

function App() {
  return (
    <>
      <Header>
        <Navbar>
          <NavItem>
            <NavLink href="#">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Member</NavLink>
          </NavItem>
        </Navbar>
      </Header>
      <Main>This is the main</Main>
      <Footer> This is the footer</Footer>
    </>
  );
};
export default App;
