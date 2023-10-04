const mapping: Record<string, string> = {
  appointments: 'appointment',
  cars: 'car',
  companies: 'company',
  invoices: 'invoice',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
