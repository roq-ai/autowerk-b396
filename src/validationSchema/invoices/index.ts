import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  total_cost: yup.number().integer().nullable(),
  paid: yup.boolean().nullable(),
  payment_date: yup.date().nullable(),
  appointment_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
