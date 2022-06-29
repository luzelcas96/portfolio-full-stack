import styled from "@emotion/styled";
import { colors } from "../../styles";
import {AiOutlineHolder} from "react-icons/ai"

const Wrapper = styled.div`
  margin: 100px 30px;
  max-width: 50%;
  border: 1px solid black;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
`
const StyleHi = styled.p`
  font-size: 50px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 80px;
  text-align: left;
  transform: rotate(-20deg);
  position: absolute;
  top: -15px;
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
  margin-top: 50px;
`
const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyleIcon = styled(AiOutlineHolder) `
  font-size: 50px;
`

function LikeTitle({intro = "Hello!", children = "ZZZzzz",name = "I'm Lucho Zelada" }) {

  return(
    <Wrapper>
      <StyleHi>{intro} </StyleHi>
        <StyleName>
          {name}
        </StyleName>
      <WrapperInfo> 
        <StyleIcon/>
        <StyleText>{children}</StyleText>
      </WrapperInfo>
    </Wrapper>
  );
}

export default LikeTitle;