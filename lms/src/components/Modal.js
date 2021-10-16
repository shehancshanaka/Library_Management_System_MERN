import styled,{keyframes} from "styled-components";
export const Modal = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;
const DialogBoxAnimation = keyframes`
from {top: 0px;}
  to {top: 20px; }
 `;
export const DialogBox = styled.div`
  text-align: center;
  position: relative;
  background: white;
  width:30%;
  height: 400px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 10px;
  padding: 0.75em;
  color: rgba(0, 0, 139, 0.7);
  animation-name: ${DialogBoxAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

