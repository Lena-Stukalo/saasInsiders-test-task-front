import YourSvg from "../../images/send.svg";
import { Svg, FormStyled, Button, DialogInput } from "./dialog.styled";
import { useFormik } from "formik";
const DialogForm = ({ onSubmit }) => {
  const formValues = {
    question: "",
  };
  const handeleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm(formValues);
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <DialogInput
        type="text"
        name="question"
        id="question"
        value={formik.values.question}
        onChange={formik.handleChange}
        required
        placeholder="Ask me anything that I can help you or your team.. "
      />
      <Button type="submit">
        <Svg src={YourSvg}></Svg>
      </Button>
    </FormStyled>
  );
};

export default DialogForm;
