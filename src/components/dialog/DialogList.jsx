import {
  MessageBoxQue,
  MessageBoxAns,
  MessageBox,
  DialogListCont,
} from "./dialog.styled";
const DialogList = ({ messeges }) => {
  return (
    <DialogListCont>
      {messeges.map((message) => {
        return (
          <MessageBox
            isownmessage={message.isHuman ? 1 : 0}
            key={message.createAT}
          >
            {message.isHuman ? (
              <MessageBoxQue>{message.text}</MessageBoxQue>
            ) : (
              <MessageBoxAns>{message.text}</MessageBoxAns>
            )}
          </MessageBox>
        );
      })}
    </DialogListCont>
  );
};

export default DialogList;
