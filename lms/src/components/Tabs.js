import React, { useState } from "react";
import styled from "styled-components";
export const TabsContainer = styled.div`
  overflow: hidden;
  background: #fff;
  height: 100%;
  max-width: 80%;
  min-width: 80%;
`;

export const TabButtonContainer = styled.div`
  display: flex;
  > * {
    flex: 1 1 0;
    max-width: 10em;
  }
`;

export const Tab = styled.button`

  border: none;
  outline: none;
  cursor: pointer;
  position: relative;

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

export const TabContents = styled.div`
  border: 0.25em solid #9d4ec2;
  border-top: 0.75em solid #9d4ec2;
  border-bottom: 0.75em solid #9d4ec2;
  min-height: 80vh;
`;
export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;

export default function Tabs(props) {
  const { contents } = props;

  const [active, setActive] = useState(0);

  const handleClick = (event) => {
    const index = parseInt(event.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
return (
  <TabsContainer>
    <TabButtonContainer>
      {contents.map((content, index) => (
        <Tab
          onClick={handleClick}
          active={active === index}
          id={index}
          key={index}
        >
          {content.title}
        </Tab>
      ))}
    </TabButtonContainer>
    <TabContents>
      {contents.map((content, index) => (
        <Content active={active === index} key={index}>
          {content.elements}
        </Content>
      ))}
    </TabContents>
  </TabsContainer>
);
}
