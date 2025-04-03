import * as Yup from "yup";
import { errorMessages } from "./validationMessages";
export const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required(errorMessages.username.required)
    .min(3, errorMessages.username.min)
    .max(20, errorMessages.username.max),
  password: Yup.string()
    .required(errorMessages.password.required)
    .min(6, errorMessages.password.min),
});
