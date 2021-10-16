import styled from "styled-components";



export const FluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerInline = styled.div`
  flex: 1 1 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  text-align: left;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25em 2em 0.5em 0.5em;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.danger ? props.theme.danger.main : props.theme.primary.main};
  color: ${(props) => props.theme.primary.textColor};
  font-size: ${(props) => (props.size ? props.size : 1)}em;
  padding: 0.25em 1em;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;
  margin: 1em;

  ${(props) => (props.rounded ? "border-radius:50%; padding:0.5em;" : "")}
  :hover {
    background-color: ${(props) =>
      props.danger ? props.theme.danger.main : props.theme.primary.main};
  }
`;

export const Select = styled.select`

height:35px;
background:white;
color:gray;
padding:0.5em;
font-size:0.8em;
border:2px solid ${(props) => props.theme.secondary.light};
border-radius:0.5em;
margin-left:1em;
option{
  color:black;
  background: white;
  display:white;
  main-height:20px;
  padding:0px 2px 1px;
}

`;