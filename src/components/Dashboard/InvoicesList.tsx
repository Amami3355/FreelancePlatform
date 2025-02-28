import { FileText } from "lucide-react";
import type { Invoice } from "../../types";

interface InvoicesListProps {
  invoices: Invoice[];
}

export default function InvoicesList({ invoices }: InvoicesListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Dernières factures</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="p-6 hover:bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-gray-400 mr-3" />

                <div>
                  <p className="font-medium">Facture #{invoice.id}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Créée le {new Date(invoice.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {invoice.amount.toLocaleString()}€
                </p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm mt-1
                  ${
                    invoice.status === "payee"
                      ? "bg-green-100 text-green-800"
                      : invoice.status === "retard"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {invoice.status === "payee"
                    ? "Payée"
                    : invoice.status === "retard"
                      ? "En retard"
                      : "En attente"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
