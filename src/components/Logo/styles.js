import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyleLogo = styled.img`
  width: 100px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
`
const TextLogo = styled.h1`
  color: ${({color})=>color};
  font-family: 'Shadows Into Light', cursive;
`
export {
  Wrapper,
  StyleLogo,
  TextLogo
};