import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const defaultLanguage = localStorage.getItem("selectedLanguage") || "kg";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "kg",
    lng: defaultLanguage,
    resources: {
      ru: {
        translation: {
          title:
            "Государственное агентство по регистрации транспортных средств и водительского состава при Кабинете Министров Кыргызской Республики",
            desc: "Мы осуществляем деятельность в области регистрации и перерегистрации автотранспортных средств.",
            search: "Поиск...",
            home:"Главная",
            about: "О нас",
            news: "Новости",
            info: "Информация",
            service: {
              main: "Сервисы",
              calculator: "Калькулятор",
              inspection: "Обращение на осмотр",
            },
            jobs: "Вакансии",
            camera: "Онлайн камеры",
            notfound: "По вашему запросу ничего не найдено",
        },
      },
      kg: {
        translation: {
          title:"Кыргыз Республикасынын Министрлер Кабинетине караштуу Транспорт каражаттарын жана айдоочулук курамды каттоо мамлекеттик агенттик",
            desc:"Биз автотранспорт каражаттарын каттоо жана кайра каттоо жаатында иш-чараларды жүргүзөбүз.",
            search: "Издөө...",
            home:"Башкы бет",
            about: "Биз жөнүндө",
            news: "Жаңылыктар",
            info: "Маалымат",
            service: {
              main: "Кызматтар",
              calculator: "Калькулятор",
              inspection: "Текшерүүгө кайрылуу",
            },
            jobs: "Вакансиялар",
            camera: "Онлайн камералар",
            notfound: "Сиздин талап боюнча эч нерсе табылган жок",
        },
      },
    },
  });

export default i18next;
