import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InvoiceInterface {
  id?: string;
  total_cost?: number;
  paid?: boolean;
  payment_date?: any;
  appointment_id: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  appointment?: AppointmentInterface;
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface InvoiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  appointment_id?: string;
  user_id?: string;
  company_id?: string;
}
