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
import dataIn from "./Local/In.json";
import dataKo from "./Local/Ko.json";
import dataRu from "./Local/Ru.json";
import dataPo from "./Local/Po.json";
import dataTu from "./Local/Tu.json";
import dataJa from "./Local/Ja.json";
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
        translation: dataIn,
      },
      it: {
        translation: dataIt,
      },
      po: {
        translation: dataPo,
      },
      tu: {
        translation: dataTu,
      },
      da: {
        translation: dataDa,
      },
      ru: {
        translation: dataRu,
      },
      ch: {
        translation: dataCh,
      },
      ko: {
        translation: dataKo,
      },
      ja: {
        translation: dataJa,
      },
    },
  });
