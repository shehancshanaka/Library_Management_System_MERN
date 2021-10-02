import styled from "styled-components";
import myImage from "../background.png";
export const Header = styled.header`
  height: 8vh;
`;
export const Main = styled.main`
  background-image: url(${myImage});
  padding: ${(props)=>props.theme.spacing(1)};
  height: 90vh;
  align-items:center;
  flex-directions:column;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-top: 1px solid #ccc;
`;
