import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

await i18next
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'es'],
		debug: import.meta.env.DEV && import.meta.env.MODE === 'test',
		backend: {
			// Relative route for /public/locales
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		interpolation: {
			// React handles XSS sanitization natively
			escapeValue: false,
		},
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'navigator'],
			caches: ['localStorage'],
		},
	});

export default i18next;
