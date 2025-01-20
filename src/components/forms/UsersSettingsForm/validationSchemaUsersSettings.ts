import * as yup from 'yup';

interface SettingsForm {
  avatarURL: File | null;
  gender: 'woman' | 'man';
  name: string;
  email: string;
  weight: number | null;
  activeTime: number | null;
  dailyNorm: number | null;
}

const validationSettingSchema = yup.object().shape({
  avatar: yup.mixed(),
  gender: yup.string().oneOf(['woman', 'man']).required('Gender is required'),
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  weight: yup
    .number()
    .typeError('Weight must be a valid number')
    .min(5, 'Weight is too small.')
    .max(250, 'Max weight is 250 kg')
    .required('Weight is required'),

  activeTime: yup
    .number()
    .typeError('Active time must be a valid number')
    .min(0, 'Active time cannot be negative')
    .max(24, 'Max hours are taken')
    .required('Active time is required'),
  dailyNorm: yup
    .number()
    .typeError('Water norm must be a valid number')
    .min(0, 'Water norm must be a positive number')
    .required('Water norm is required'),
});

export type SettingsFormValues = SettingsForm;

export default validationSettingSchema;
