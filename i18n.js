import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import translationEN from './locales/en.json';
import translationSR from './locales/sr-cyrl.json';

const resources = {
   en: {
      translation: translationEN,
   },
   sr: {
      translation: translationSR,
   },
};

i18n.use(initReactI18next).init({
   resources,
   lng: 'en',
   fallbackLng: 'en',

   interpolation: {
      escapeValue: false,
   },
});

export default i18n;
