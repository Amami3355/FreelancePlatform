import React from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

interface LanguageSwitcherProps {
  position?: "top" | "bottom";
}

export default function LanguageSwitcher({
  position = "bottom",
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 rounded-md hover:bg-gray-50"
      >
        <span>
          {currentLanguage?.flag} {currentLanguage?.label}
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"} left-0 py-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50`}
        >
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                i18n.changeLanguage(language.code);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === language.code
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {language.flag} {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
