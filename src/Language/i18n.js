import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import dataEn from "./Local/En.json";
import dataFr from "./Local/Fr.json";
import dataSp from "./Local/Sp.json";
import dataCh from "./Local/Ch.json";
import dataDa from "./Local/Da.json";
import dataGe from "./Local/Ge.json";
import dataIt from "./Local/It.json";
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
      ge: {
        translation: dataGe,
      },
      in: {
        translation: dataSp,
      },
      it: {
        translation: dataIt,
      },
      po: {
        translation: dataSp,
      },
      tu: {
        translation: dataSp,
      },
      da: {
        translation: dataDa,
      },
      ru: {
        translation: dataSp,
      },
      ch: {
        translation: dataCh,
      },
      ko: {
        translation: dataSp,
      },
      js: {
        translation: dataSp,
      },
    },
  });
