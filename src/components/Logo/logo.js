import styled from "@emotion/styled";

const StyleLogo = styled.img`
  width: 100px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
`

function Logo() {
  return (
    <StyleLogo src= "./assets/images/logo.png" alt= "logo Luzelcas96"/>
  )
}

export default Logo;