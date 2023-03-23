import * as yup from "yup"

export const userSchema = yup.object().shape({
    firstName: yup.string().min(2).required(),
    lastName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    city: yup.string().min(2).max(12).required(),
    resumeUrl: yup.string().required(),
    coverletterUrl: yup.string().required(),
})