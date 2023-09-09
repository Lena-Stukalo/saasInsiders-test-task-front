import DialogForm from "./DialogForm";
import DialogList from "./DialogList";
import { ContentContainer } from "./dialog.styled";
import { useCreateMutation, useGetAllQuery } from "../../redux/dialog";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import AuthSelectors from "../../redux/auth/authSelectors";

const DialogContent = () => {
  const { data, isLoading, isError } = useGetAllQuery();
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();
  const [create] = useCreateMutation();
  const token = useSelector(AuthSelectors.getToken);
  const send = (value) => {
    socket?.emit("message", { token });
  };
  useEffect(() => {
    if (data) {
      setMessages(data);
      socket?.emit("message", { token });
    }
  }, [data]);
  useEffect(() => {
    const newSocket = io("http://localhost:8081");
    setSocket(newSocket);
  }, [setSocket]);
  const messageListener = (message) => {
    setMessages((prev) => {
      return [...message];
    });
  };
  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [messageListener]);
  const onSubmit = (order) => {
    create(order);
  };

  return (
    <ContentContainer>
      {messages && <DialogList messages={messages} />}
      <DialogForm onSubmit={onSubmit} />
    </ContentContainer>
  );
};

export default DialogContent;
