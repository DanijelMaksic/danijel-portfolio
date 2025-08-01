import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import translationEN from './locales/en.json';
import translationSR from './locales/sr-cyrl.json';

import detector from 'i18next-browser-languagedetector';

const resources = {
   en: {
      translation: translationEN,
   },
   sr: {
      translation: translationSR,
   },
};

const i18nextLng = localStorage.getItem('i18nextLng');

i18n
   .use(detector)
   .use(initReactI18next)
   .init({
      resources,
      lng: i18nextLng,
      fallbackLng: 'en',

      interpolation: {
         escapeValue: false,
      },
   });

export default i18n;
