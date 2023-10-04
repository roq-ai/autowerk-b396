import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  vin: yup.string().required(),
  color: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
