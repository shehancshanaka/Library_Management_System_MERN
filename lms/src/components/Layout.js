import styled from "styled-components";
import myImage from "../background.png";
export const Header = styled.header`
  height: 7vh;
`;
export const Main = styled.main`
  background-image: url(${myImage});
  height: 90vh;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;
