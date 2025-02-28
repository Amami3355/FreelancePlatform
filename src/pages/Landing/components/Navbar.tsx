import React from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  onAuth: () => void;
}

export default function Navbar({ onAuth }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">
              FreelanceFlow
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">
              {t('landing.navbar.features')}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600">
              {t('landing.navbar.pricing')}
            </a>
            <LanguageSwitcher />
            <button
              onClick={onAuth}
              className="text-gray-600 hover:text-indigo-600"
            >
              {t('landing.navbar.login')}
            </button>
            <button
              onClick={onAuth}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {t('landing.navbar.signup')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {t('landing.navbar.features')}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {t('landing.navbar.testimonials')}
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {t('landing.navbar.pricing')}
            </a>
            <button
              onClick={onAuth}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
            >
              {t('landing.navbar.login')}
            </button>
            <button
              onClick={onAuth}
              className="block w-full mt-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {t('landing.navbar.signup')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
