import styled from "@emotion/styled";
import { colors } from "../../styles";

const Wrapper = styled.div`
  margin: 100px 30px;
  width: 50%;
  border: 1px solid black;
  padding: 10px;
`
const StyleHi = styled.p`
  font-size: 90px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 120px;
  text-align: left;
`

const StyleText = styled.p`
  font-size: 50px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 70px;
  text-align: left;
  color: #747476;
`
const StyleName= styled.p`
  color: ${colors.orange[300]};
  font-size: 130px;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 120px;
  text-align: left;
`

function LikeTitle({intro = "Hi!", children = "ZZZzzz",name = "I'm Lucho Zelada" }) {

  return(
    <Wrapper>
      <StyleHi>{intro} </StyleHi>
        <StyleName>
          {name}
        </StyleName>
      <StyleText>{children}</StyleText>
    </Wrapper>
  );
}

export default LikeTitle;