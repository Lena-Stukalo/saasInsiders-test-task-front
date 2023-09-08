import DialogAside from "./DialogAside";
import DialogContent from "./DialogContent";
import { DialogContainer } from "./dialog.styled";

const DialogPageContainer = () => {
  return (
    <DialogContainer>
      <DialogAside></DialogAside>
      <DialogContent></DialogContent>
    </DialogContainer>
  );
};

export default DialogPageContainer;
