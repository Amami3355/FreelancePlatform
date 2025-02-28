import { Users, Phone, Mail } from 'lucide-react';
import type { Client as ClientType } from '../../types/client';

interface ClientProps {
    client: ClientType;
}

export default function Client({ client }: ClientProps) {
    return (
        <div className="p-6 hover:bg-gray-50">
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
                    <p className="font-medium">{client.totalRevenue.toLocaleString()}€</p>
                    <p className="text-sm text-gray-500">{client.projectsCount} projets</p>
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
    );
} 