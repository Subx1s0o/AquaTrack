import * as yup from 'yup';

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export type ResetPasswordFormValues = ResetPasswordForm;

export default validationSchema;
