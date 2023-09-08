import { useEffect, useState } from "react";
import DialogForm from "./DialogForm";
import DialogList from "./DialogList";
import { ContentContainer } from "./dialog.styled";
import { useCreateMutation, useGetAllQuery } from "../../redux/dialog";

const DialogContent = () => {
  const [dialog, setDialog] = useState([]);
  const { data, isLoading, isError } = useGetAllQuery();
  const [create] = useCreateMutation();
  useEffect(() => {
    if (data) {
      setDialog((prev) => [...prev, ...data]);
    }
  }, [data]);
  const onSubmit = (order) => {
    create(order);
  };

  return (
    <ContentContainer>
      {data && <DialogList messeges={data} />}
      <DialogForm onSubmit={onSubmit} />
    </ContentContainer>
  );
};

export default DialogContent;
