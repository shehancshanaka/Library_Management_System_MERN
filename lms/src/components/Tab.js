import styled from "styled-components";
export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 100%;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-right: 0.1em;
  font-size: 1em;
  text-color: #fff;
  text-transform: uppercase;
  border: ${(props) => (props.active ? "" : "1px solid  #9d4ec2")};
  border-bottom: none;
  background-color: ${(props) => (props.active ? "#9d4ec2" : "#55047a")};
  height: 3em;
  color: ${(props) => (props.active ? "#20012e" : "#fff")};
  :hover {
    background-color: ${(props) => props.theme.primary.light};
    color: ${(props) => props.theme.primary.dark};
    width: 100px;
    font-size: 17px;
  }
`;

export const TabContent = styled.div`
  border: 0.75em solid #9d4ec2;
  border-top: 0.75em solid #9d4ec2;
  border-bottom: 0.75em solid #9d4ec2;
  min-height: 80vh;
`;
export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;
