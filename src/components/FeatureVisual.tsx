import { ArrowRight, FileText, Users, BarChart, Mail } from 'lucide-react';

export default function FeatureVisual() {
    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Fond avec gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-2xl" />

            {/* Interface principale */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex gap-4">
                    {/* Barre latérale avec icônes */}
                    <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                            <FileText size={18} />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                            <Users size={18} />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                            <BarChart size={18} />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                            <Mail size={18} />
                        </div>
                    </div>

                    {/* Zone principale avec les connexions */}
                    <div className="flex-1 flex items-center justify-between">
                        {/* Première app */}
                        <div className="bg-green-500 text-white p-4 rounded-xl shadow-sm">
                            <FileText size={24} />
                            <p className="mt-2 font-medium">Documents</p>
                        </div>

                        {/* Flèche de connexion */}
                        <div className="flex items-center px-4">
                            <div className="h-[2px] w-16 bg-gray-300" />
                            <ArrowRight className="text-gray-400" />
                        </div>

                        {/* Deuxième app */}
                        <div className="bg-blue-500 text-white p-4 rounded-xl shadow-sm">
                            <Users size={24} />
                            <p className="mt-2 font-medium">Clients</p>
                        </div>

                        {/* Flèche de connexion */}
                        <div className="flex items-center px-4">
                            <div className="h-[2px] w-16 bg-gray-300" />
                            <ArrowRight className="text-gray-400" />
                        </div>

                        {/* Troisième app */}
                        <div className="bg-purple-500 text-white p-4 rounded-xl shadow-sm">
                            <Mail size={24} />
                            <p className="mt-2 font-medium">Notifications</p>
                        </div>
                    </div>
                </div>

                {/* Barre d'actions en bas */}
                <div className="mt-4 flex items-center gap-3">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2">
                        <span>Exécuter</span>
                        <ArrowRight size={16} />
                    </button>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full">
                        <div className="w-1/3 h-full bg-primary rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
} 