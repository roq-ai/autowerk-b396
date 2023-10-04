import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  cost: yup.number().integer().nullable(),
  duration: yup.number().integer().nullable(),
  service_type: yup.string().nullable(),
  product_type: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
