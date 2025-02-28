import { Search, Clock, Star } from 'lucide-react';
import { useState } from 'react';

export default function SmartSearch() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Recherche intelligente..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                />
            </div>

            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Recherches récentes
                            </h3>
                            <div className="space-y-2">
                                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                                    Factures impayées
                                </button>
                                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                                    Projets en retard
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4" /> Suggestions intelligentes
                            </h3>
                            <div className="space-y-2">
                                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                                    Clients inactifs depuis 30 jours
                                </button>
                                <button className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg">
                                    Opportunités de relance
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 