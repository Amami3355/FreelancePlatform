import React from "react";
import { FileText, Plus, Search } from "lucide-react";
import type { Document } from "../../types/document";

const mockDocuments: Document[] = [
  {
    id: "1",
    type: "facture",
    number: "FACT-2024-001",
    clientId: "1",
    clientName: "Tech Store",
    date: "2024-03-01",
    dueDate: "2024-03-31",
    amount: 4500,
    status: "payé",
    items: [],
  },
  {
    id: "2",
    type: "devis",
    number: "DEV-2024-001",
    clientId: "2",
    clientName: "StartupXYZ",
    date: "2024-03-15",
    dueDate: "2024-04-15",
    amount: 12000,
    status: "envoyé",
    items: [],
  },
];

export default function DocumentList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Factures & Devis</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700">
          <Plus className="w-5 h-5 mr-2" />
          Nouveau document
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Rechercher un document..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {mockDocuments.map((doc) => (
            <div key={doc.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-gray-400 mr-3" />

                  <div>
                    <p className="font-medium">{doc.number}</p>
                    <p className="text-sm text-gray-500">{doc.clientName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">
                      {doc.amount.toLocaleString()}€
                    </p>
                    <p className="text-sm text-gray-500">
                      Échéance : {new Date(doc.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${
                      doc.status === "payé"
                        ? "bg-green-100 text-green-800"
                        : doc.status === "refusé"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
