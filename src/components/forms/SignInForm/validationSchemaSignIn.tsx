import * as yup from 'yup';

interface SignInForm {
  email: string;
  password: string;
}

const validationSchemaSignIn = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .min(2, 'Email is too short!')
    .max(50, 'Email is too long!')
    .required('Email is required.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .required('Password is required.'),
});

export type SignInFormValues = SignInForm;

export default validationSchemaSignIn;
