import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  user_id: string;
  car_id: string;
  service_id: string;
  status?: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;
  invoice?: InvoiceInterface[];
  user?: UserInterface;
  car?: CarInterface;
  service?: ServiceInterface;
  _count?: {
    invoice?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  service_id?: string;
  status?: string;
  notes?: string;
}
