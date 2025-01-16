import * as yup from 'yup';

interface SettingsForm {
  avatar: File | null;
  gender: 'woman' | 'man';
  name: string;
  email: string;
  weight: number | null;
  activeTime: number | null;
  waterNorm: number | null;
  waterDrink: string;
  p: string | number;
}

const validationSettingSchema = yup.object().shape({
  avatar: yup.mixed(),
  gender: yup.string().oneOf(['woman', 'man']).required('Gender is required'),
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  weight: yup
    .number()
    .min(5, 'Weight is too small.')
    .max(250, 'Max weight is taken')
    .required('Weight is required'),
  activeTime: yup
    .number()
    .min(0, 'Active time cannot be negative')
    .max(24, 'Max hours are taken')
    .required('Active time is required'),
  waterNorm: yup
    .number()
    .min(0, 'Water norm must be a positive number')
    .required('Water norm is required'),
});

export type SettingsFormValues = SettingsForm;

export default validationSettingSchema;
