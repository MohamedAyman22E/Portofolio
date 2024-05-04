import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import dataEn from "./Local/En.json";
import dataFr from "./Local/Fr.json";
import dataSp from "./Local/Sp.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: dataEn,
      },
      fr: {
        translation: dataFr,
      },
      sp: {
        translation: dataSp,
      },
    },
  });
