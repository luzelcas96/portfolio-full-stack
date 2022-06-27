import styled from "@emotion/styled";
import { fonts } from "../../styles";


const TalkButton = styled.button`
  text-decoration: none;
  position: absolute;
  border: none;
  font-family: ${fonts.primary};
  text-transform: capitalize;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  width: 9em;
  height: 3em;
  line-height: 2rem;
  text-align: center;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;

  &:hover {
    animation: ani 8s linear infinite;
    border: none;
  }
  
  @keyframes ani {
    0% {
     background-position: 0%;
    }
   
    100% {
     background-position: 400%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  &:hover::before {
    filter: blur(20px);
  }

  &:active {
    background: linear-gradient(32deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  }
`;

export {TalkButton};