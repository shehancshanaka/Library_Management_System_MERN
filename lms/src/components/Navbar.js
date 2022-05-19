import styled from "styled-components";

export const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0.25em;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary.main};
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const NavItem = styled.li`
  display: inline;
`;
export const NavLink = styled.a`
  color: ${(props) => props.theme.primary.textColor};
  text-align: center;
  padding: 20px 20px;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    width: 100px;
    background-color: ${(props) => props.theme.primary.light};
    color: #000;
    font-size: 20px;
  }
  .active {
    background-color: ${(props) => props.theme.primary.dark};
    color: #151515;
  }
`;
