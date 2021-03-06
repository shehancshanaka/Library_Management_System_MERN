import styled from "styled-components";
import notFoundImg from "../assets/404.gif";
import { FluidContainer } from "../components/CommonComponents";
const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0;
  color: ${(props) => props.theme.primary.main};
  :hover {
    cursor: pointer;
  }
`;

const NotFound = () => (
  <FluidContainer>
    <Title>The page you are looking for doesn't exist.</Title>

    <img src={notFoundImg} alt="page not found image" />
  </FluidContainer>
);

export default NotFound;
