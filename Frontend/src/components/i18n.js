import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to Coligo",
      },
    },
    ar: {
      translation: {
        "welcome": "نورت كوليجو",
      },
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
});

export default i18n;
