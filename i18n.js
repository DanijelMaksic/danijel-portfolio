import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import translationEN from './locales/en.json';
import translationSR from './locales/sr-cyrl.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
   en: {
      translation: translationEN,
   },
   sr: {
      translation: translationSR,
   },
};

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init(
      {
         fallbackLng: 'en',
         supportedLngs: ['en', 'sr'],
         nonExplicitSupportedLngs: true,
         resources,
         detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
         },

         interpolation: {
            escapeValue: false,
         },
      },
      () => {
         const baseLang = i18n.language.split('-')[0];
         const availableLanguages = Object.keys(resources);
         if (availableLanguages.includes(baseLang)) {
            i18n.changeLanguage(baseLang); // normalize and persist
         } else {
            i18n.changeLanguage('en'); // fallback to English
         }
      }
   );

export default i18n;
