import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('landing.footer.product')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.features')}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.pricing')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('landing.footer.support')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.helpCenter')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.contact')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('landing.footer.legal')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.terms')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('landing.footer.company')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.about')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {t('landing.footer.blog')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            {t('landing.footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
