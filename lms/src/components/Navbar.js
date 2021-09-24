import styled from "styled-components";

export const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary.main};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
 
`;

export const NavItem = styled.li`

  float: left;
`;
export const NavLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: width 3s;
  transition-delay: 1s;

  :hover {
    width: 100px;
    background-color: ${(props) => props.theme.primary.light};
    color: #151515;
  }
  .active {
    background-color: ${(props) => props.theme.primary.dark};
    color: #151515;
  }
`;
