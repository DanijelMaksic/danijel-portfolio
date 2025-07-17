import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import translationEN from './locales/en.json';
import translationSR from './locales/sr-cyrl.json';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

const resources = {
   en: {
      translation: translationEN,
   },
   sr: {
      translation: translationSR,
   },
};

i18n
   .use(I18nextBrowserLanguageDetector)
   .use(initReactI18next)
   .init({
      resources,
      fallbackLng: 'en',

      interpolation: {
         escapeValue: false,
      },
   });

export default i18n;
