export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'en_cours' | 'termine' | 'en_attente';
  deadline: string;
  budget: number;
}

export interface Invoice {
  id: string;
  projectId: string;
  amount: number;
  status: 'payee' | 'en_attente' | 'retard';
  dueDate: string;
  createdAt: string;
}

export interface DashboardStats {
  totalEarnings: number;
  pendingPayments: number;
  activeProjects: number;
  completedProjects: number;
}