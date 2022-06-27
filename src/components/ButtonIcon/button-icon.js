import { Wrapper } from "./styles";
import { BsGithub, BsLinkedin, BsInstagram} from "react-icons/bs"

const optionsIcon = {
  github: <BsGithub/>,
  linkedin: <BsLinkedin/>,
  instagram: <BsInstagram/>
}

function ButtonIcon({icon}) {
  return (
    <Wrapper>
      {optionsIcon[icon]}
    </Wrapper>
  );
}

export default ButtonIcon;