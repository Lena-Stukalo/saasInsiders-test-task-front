import { useEffect, useRef } from "react";
import {
  MessageBoxQue,
  MessageBoxAns,
  MessageBox,
  DialogListCont,
} from "./dialog.styled";
const DialogList = ({ messages }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (messages.length) {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }
  }, [messages]);
  return (
    <DialogListCont ref={ref}>
      {messages.map((message) => {
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
