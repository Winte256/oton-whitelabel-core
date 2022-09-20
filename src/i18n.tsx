import i18next from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import LocizeBackend from 'i18next-locize-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(ChainedBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [LocalStorageBackend, LocizeBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          private: false,
          projectId: '3c8990f2-9455-4888-8c57-48e0e03443f4',
          apiKey: '5928b2c0-2afe-40c7-9ada-35619ea17653',
          version: 'latest',
        },
      ],
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
