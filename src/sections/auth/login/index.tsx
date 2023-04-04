import * as Yup from "yup";
// utils
import { fData } from "@root/utils/formatNumber";

// ----------------------------------------------------------------------

export const defaultValues = {
  email: "mortgage_broker@yopmail.com",
  password: "MGBasket$$786",
};

export const LoginFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be of minimum 6 characters length"),
});

export { default as ReactHookForm } from "./LoginForm";
