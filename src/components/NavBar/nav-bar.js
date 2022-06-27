import LinkTo from "../LinkTo";
import Logo from "../Logo";
import { LinksWrapper, Wrapper } from "./styles";



function NavBar() {
  return (
    <Wrapper>
      <Logo color="#18171C"/>
      <LinksWrapper>
        <LinkTo to="#" color="#18171C" backColor="#F98B5B">Home</LinkTo>
        <LinkTo to="#" color="#18171C" backColor="#F98B5B">About</LinkTo>
        <LinkTo to="#" color="#18171C" backColor="#F98B5B">Portfolio</LinkTo>
      </LinksWrapper>
      <LinkTo to="#" color="#18171C" backColor="#F98B5B">Contact</LinkTo>
    </Wrapper>
  );
}

export default NavBar;