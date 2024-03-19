import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

const defaultLanguage = localStorage.getItem("selectedLanguage") || "kg";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "kg",
    lng: defaultLanguage,
    resources: translations,
  });

export default i18next;
