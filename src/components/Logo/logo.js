import * as S from "./styles";

function Logo({color= "white"}) {
  return (
    <S.Wrapper>
      <S.StyleLogo src= "./assets/images/logo.png" alt= "logo Luzelcas96"/>
      <S.TextLogo color={color}>Lucho Zelada</S.TextLogo>
    </S.Wrapper>
  )
}

export default Logo;