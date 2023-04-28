import * as yup from "yup";

export const registerSchema = yup.object().shape({
  full_name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
});
