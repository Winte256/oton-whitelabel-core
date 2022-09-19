import i18next from 'i18next';
import Backend from 'i18next-locize-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      private: false,
      projectId: '3c8990f2-9455-4888-8c57-48e0e03443f4',
      apiKey: '5928b2c0-2afe-40c7-9ada-35619ea17653',
      version: 'latest',
    },

    appendNamespaceToMissingKey: true,

    defaultNS: 'core',
    ns: ['core', 'auth'],
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
