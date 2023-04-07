import * as Yup from "yup";


export const OtpFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
});

export { default as ReactHookForm } from "./OtpForm";
