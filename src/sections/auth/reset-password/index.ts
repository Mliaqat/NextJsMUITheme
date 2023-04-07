import * as Yup from "yup";

export const defaultValues = {
  email: "client@yopmail.com",
  password: "MGBasket$$786",
};

export const ResetPasswordFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
});

export { default as ReactHookForm } from "./ResetPasswordForm";
