import * as yup from 'yup';

export const waterFormSchema = yup.object().shape({
  water: yup
    .number()
    .required('Enter the amount of water')
    .min(50, 'The minimum value is 50 ml')
    .max(5000, 'The maximum value is 5 liters'),
  time: yup.string().required('Enter the time'),
});

export type WaterFormValues = yup.InferType<typeof waterFormSchema>;
