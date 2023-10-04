interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Service Manager', 'Mechanic'],
  tenantName: 'Company',
  applicationName: 'AutoWerk',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company information',
    'Manage car details',
    'Manage services offered',
    'Manage appointments and invoices',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/068e0cbb-8842-4881-8690-4623adc068a8',
};
