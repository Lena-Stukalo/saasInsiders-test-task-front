import { AsideContainer, Title, Logo, Svg } from "./dialog.styled";
import YourSvg from "../../images/heart-handshake.svg";
const DialogAside = () => {
  return (
    <AsideContainer>
      <Logo>Agile</Logo>
      <Title>
        <Svg src={YourSvg} /> AI Agile Coach
      </Title>
    </AsideContainer>
  );
};

export default DialogAside;
