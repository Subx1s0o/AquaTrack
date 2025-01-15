import * as yup from 'yup';

interface ForgotPasswordForm {
  email: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .min(2, 'Email is too short!')
    .max(50, 'Email is too long!')
    .required('Email is required.'),
});

export type ForgotPasswordFormValues = ForgotPasswordForm;

export default validationSchema;
