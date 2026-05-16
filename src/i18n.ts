import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // load translations from public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass i18n instance to react-i18next
     .init({
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        supportedLngs: ["en", "tet", "pt"],
        backend: {
            loadPath: "/locales/{{ns}}/{{lng}}/translation.json", // locale files path
        },
        fallbackLng: ["en", "tet", "pt"],
        defaultNS: "common"
    });
export default i18n;