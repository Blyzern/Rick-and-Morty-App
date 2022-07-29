import i18next from 'i18next';
import { LOCALES_EN } from 'src/locales/en';
import { LOCALES_IT } from 'src/locales/it';
import { initReactI18next } from 'react-i18next';
// "Inline" English and Italian translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: LOCALES_EN,
  },
  it: {
    translation: LOCALES_IT,
  },
};
i18next.use(initReactI18next).init({
  debug: false,
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function getCurrentLanguage(): string {
  return i18next.language;
}

function changeLanguage(language: string) {
  return i18next.changeLanguage(language);
}

// eslint-disable-next-line no-unused-vars
function onLanguageChanged(callback: (language: string) => void) {
  return i18next.on('languageChanged', callback);
}

export { getCurrentLanguage, changeLanguage, onLanguageChanged };

export default i18next;
