import styled from "styled-components";
import { Container } from "./CommonComponents";
const Label = styled.label`

font-size: 0.75em;
margin-bottom: 0.75em;
display:block;
`;
const StyledInput = styled.input`
padding:0.5em 0.5em 0.5em 0.5em;
border:2px solid ${(props) => props.theme.primary.main};
border-radius:3px;
margin-bottom:0.5em;
width:100%;
box-sizing:border-box;
`;
export default function Input({ label, value, onChange, ...rest }) {
    
    return (
        <Container alignItems="flex-start">
            <Label>{label}</Label>
            <StyledInput
                value={value}
                onChange={onChange}
                {...rest} />
</Container>


    );

}
