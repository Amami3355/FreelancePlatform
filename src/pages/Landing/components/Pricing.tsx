import React from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

interface PricingProps {
  onSubscribe: () => void;
}

export default function Pricing({ onSubscribe }: PricingProps) {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('landing.pricing.starter.name'),
      price: t('landing.pricing.starter.price'),
      features: t('landing.pricing.starter.features', { returnObjects: true }) as string[],
      buttonText: t('landing.pricing.starter.cta'),
      popular: false,
    },
    {
      name: t('landing.pricing.pro.name'),
      price: t('landing.pricing.pro.price'),
      features: t('landing.pricing.pro.features', { returnObjects: true }) as string[],
      buttonText: t('landing.pricing.pro.cta'),
      popular: true,
    },
    {
      name: t('landing.pricing.agency.name'),
      price: t('landing.pricing.agency.price'),
      features: t('landing.pricing.agency.features', { returnObjects: true }) as string[],
      buttonText: t('landing.pricing.agency.cta'),
      popular: false,
    },
  ];

  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {t('landing.pricing.title')}
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl bg-white overflow-hidden ${
                plan.popular ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-200"
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-center text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-base font-medium text-gray-500">
                    {t('landing.pricing.perMonth')}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600 shrink-0" />

                      <span className="ml-3 text-base text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onSubscribe}
                  className={`mt-8 w-full rounded-lg py-3 px-4 text-center font-semibold ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                  } transition-colors`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
