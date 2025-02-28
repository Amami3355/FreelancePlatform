import React from "react";
import { useTranslation } from "react-i18next";

interface CTAProps {
  onGetStarted: () => void;
}

export default function CTA({ onGetStarted }: CTAProps) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {t('landing.cta.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('landing.cta.subtitle')}
          </p>
          <div className="mt-8">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors md:py-4 md:text-lg md:px-10"
            >
              {t('landing.cta.button')}
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {t('landing.cta.noCreditCard')}
          </p>
        </div>
      </div>
    </div>
  );
}
