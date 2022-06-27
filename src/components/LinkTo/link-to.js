import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1.2px;
  position: relative;
  padding: 0.5rem 0;
  color:${({color})=>color};
  &::after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: all 0.4s ease;
    transform-origin: bottom right;
    background-color: ${({backColor})=> backColor} ;
  }
  
  &:hover::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;

function LinkTo({ children="Home",to="#", color= "white", backColor="green"}) {
  return (
    <StyledLink to={to} color={color} backColor={backColor} >{children}</StyledLink>
  )
}

export default LinkTo;