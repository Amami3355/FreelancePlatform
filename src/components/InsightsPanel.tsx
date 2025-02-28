import { Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';

export default function InsightsPanel() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Insights & Recommandations</h2>
                <span className="text-sm text-gray-500">Mis à jour il y a 5 min</span>
            </div>

            <div className="grid gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                            <h3 className="font-medium text-blue-900">Opportunité détectée</h3>
                            <p className="text-sm text-blue-700 mt-1">
                                3 clients n'ont pas été contactés depuis plus de 30 jours.
                                Planifiez un suivi pour maintenir la relation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                            <h3 className="font-medium text-green-900">Tendance positive</h3>
                            <p className="text-sm text-green-700 mt-1">
                                Votre taux de conversion a augmenté de 15% ce mois-ci.
                                Continuez d'appliquer votre stratégie actuelle.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                            <h3 className="font-medium text-yellow-900">Action recommandée</h3>
                            <p className="text-sm text-yellow-700 mt-1">
                                2 factures arrivent à échéance dans les 5 prochains jours.
                                Pensez à envoyer un rappel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 