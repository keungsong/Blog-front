import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpAPI from 'i18next-http-backend'



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpAPI)
  .init({
    backend:{
        loadPath:'/assets/i18n/{{ns}}/{{lng}}.json',
      },
    
    fallbackLng: 'en',
    debug: false,
    ns:["common","home","profile"],
    interpolation: {
       espaceValue: false,
       formatSeparator:",",
    },
    
    react:{
       wait: true,
    },
   
  });

  export default i18n;