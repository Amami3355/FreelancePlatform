export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  projectsCount: number;
  totalRevenue: number;
  status: 'actif' | 'inactif';
  lastContact: string;
}