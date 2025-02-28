import { Euro, Users, Briefcase, TrendingUp } from "lucide-react";
import StatsCard from "../../components/Dashboard/StatsCard";
import ProjectsList from "../../components/Dashboard/ProjectsList";
import InvoicesList from "../../components/Dashboard/InvoicesList";
import type { Project, Invoice, DashboardStats } from "../../types";

// Données de démonstration
const mockStats: DashboardStats = {
  totalEarnings: 45600,
  pendingPayments: 12800,
  activeProjects: 8,
  completedProjects: 24,
};

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Refonte site e-commerce",
    client: "Tech Store",
    status: "en_cours",
    deadline: "2024-04-15",
    budget: 8500,
  },
  {
    id: "2",
    name: "Application mobile",
    client: "StartupXYZ",
    status: "en_attente",
    deadline: "2024-05-01",
    budget: 12000,
  },
];

const mockInvoices: Invoice[] = [
  {
    id: "INV-2024-001",
    projectId: "1",
    amount: 4250,
    status: "payee",
    dueDate: "2024-03-15",
    createdAt: "2024-03-01",
  },
  {
    id: "INV-2024-002",
    projectId: "2",
    amount: 6000,
    status: "en_attente",
    dueDate: "2024-04-01",
    createdAt: "2024-03-15",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="mt-2 text-gray-600">
          Bienvenue ! Voici un aperçu de votre activité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Revenus totaux"
          value={`${mockStats.totalEarnings.toLocaleString()}€`}
          icon={Euro}
          trend={{ value: 12, isPositive: true }}
        />

        <StatsCard
          title="Paiements en attente"
          value={`${mockStats.pendingPayments.toLocaleString()}€`}
          icon={TrendingUp}
        />

        <StatsCard
          title="Projets actifs"
          value={mockStats.activeProjects}
          icon={Briefcase}
        />

        <StatsCard
          title="Projets terminés"
          value={mockStats.completedProjects}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectsList projects={mockProjects} />
        <InvoicesList invoices={mockInvoices} />
      </div>
    </div>
  );
}
