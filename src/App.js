import ButtonTalk from "./components/Button/button";
import ButtonIcon from "./components/BUttonIcon";
import LinkTo from "./components/LinkTo";


function App() {
  return (
    <>
      <div>
        <img src="assets/images/perfil.png" alt="Peerfil Luis Zelada "/>
      </div>
      {/* <ButtonTalk> Let's talk</ButtonTalk> */}
      {/* <LinkTo to="#" color="white">Home</LinkTo> */}
      <ButtonIcon icon= "instagram"/>
    </>
  );
}

export default App;