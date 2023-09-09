import YourSvg from "../../images/send.svg";
import { Svg, FormStyled, Button, DialogInput, Typing } from "./dialog.styled";
import { useFormik } from "formik";
const DialogForm = ({ onSubmit, setLoading, isLoading }) => {
  const formValues = {
    question: "",
  };
  const handeleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    setLoading(true);
    resetForm(formValues);
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      {isLoading && <Typing>AgileGPT writing..</Typing>}
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
