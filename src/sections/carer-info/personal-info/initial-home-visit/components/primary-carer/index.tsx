import * as Yup from "yup";

export const defaultValues = {
  email: "I am dummy data",
  password: "MGBasket$$786",
};

export const PrimaryCarerFormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should be of minimum 6 characters length"),
});

export { default as ReactHookForm } from "./PrimaryCarerForm";
