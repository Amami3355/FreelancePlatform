import { useTranslation } from "react-i18next";

interface TranslatedTextProps {
  i18nKey: string;
  fallback?: string;
}

export function TranslatedText({ i18nKey, fallback }: TranslatedTextProps) {
  const { t } = useTranslation();
  const translation = t(i18nKey);

  if (translation === i18nKey && fallback) {
    console.warn(`Missing translation for key: ${i18nKey}`);
    return <>{fallback}</>;
  }

  return <>{translation}</>;
}
