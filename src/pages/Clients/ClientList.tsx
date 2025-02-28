import { Users, Plus, Search, Phone, Mail } from "lucide-react";

interface ClientType {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  projectsCount: number;
  totalRevenue: number;
  status: string;
  lastContact: string;
}

const mockClients: ClientType[] = [
  {
    id: "1",
    name: "Jean Dupont",
    company: "Tech Store",
    email: "jean@techstore.fr",
    phone: "06 12 34 56 78",
    address: "Paris, France",
    projectsCount: 3,
    totalRevenue: 15000,
    status: "actif",
    lastContact: "2024-03-01",
  },
  {
    id: "2",
    name: "Marie Martin",
    company: "StartupXYZ",
    email: "marie@startupxyz.com",
    phone: "06 98 76 54 32",
    address: "Lyon, France",
    projectsCount: 2,
    totalRevenue: 12000,
    status: "actif",
    lastContact: "2024-03-15",
  },
];

export default function ClientList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Nouveau client
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Rechercher un client..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {mockClients.map((client) => (
            <div key={client.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {client.totalRevenue.toLocaleString()}€
                  </p>
                  <p className="text-sm text-gray-500">
                    {client.projectsCount} projets
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {client.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {client.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
