import { FileText } from 'lucide-react';
import type { Document as DocumentType } from '../../types/document';

interface DocumentProps {
    document: DocumentType;
}

export default function Document({ document }: DocumentProps) {
    return (
        <div className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                        <p className="font-medium">{document.number}</p>
                        <p className="text-sm text-gray-500">{document.clientName}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="font-medium">{document.amount.toLocaleString()}€</p>
                        <p className="text-sm text-gray-500">
                            Échéance : {new Date(document.dueDate).toLocaleDateString()}
                        </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm
            ${document.status === 'payé' ? 'bg-green-100 text-green-800' :
                            document.status === 'refusé' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'}`}>
                        {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                    </span>
                </div>
            </div>
        </div>
    );
} 