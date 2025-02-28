export interface Document {
  id: string;
  type: 'devis' | 'facture';
  number: string;
  clientId: string;
  clientName: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'brouillon' | 'envoyé' | 'accepté' | 'payé' | 'refusé';
  items: DocumentItem[];
}

export interface DocumentItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}