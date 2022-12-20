import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import tr from "./locales/tr/translation.json";

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "tr",
  debug: false, // possible true for debug
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  ns: "translation",
  defaultNS: "translation",
});

export default i18n;

export { useTranslation };
