import { useTranslation } from "react-i18next";
import {
  FileText,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      name: t('landing.features.invoiceManagement'),
      description: t('landing.features.invoiceDescription'),
      icon: FileText,
    },
    {
      name: t('landing.features.clientTracking'),
      description: t('landing.features.clientDescription'),
      icon: Users,
    },
    {
      name: t('landing.features.projectManagement'),
      description: t('landing.features.projectDescription'),
      icon: Calendar,
    },
    {
      name: t('landing.features.dashboard'),
      description: t('landing.features.dashboardDescription'),
      icon: TrendingUp,
    },
    {
      name: t('landing.features.security'),
      description: t('landing.features.securityDescription'),
      icon: Shield,
    },
    {
      name: t('landing.features.timeGain'),
      description: t('landing.features.timeDescription'),
      icon: Clock,
    },
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('landing.features.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('landing.features.subtitle')}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="space-y-6">
                  <div className="bg-indigo-50 rounded-lg p-3 inline-block">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
