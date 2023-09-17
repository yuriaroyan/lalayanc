import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationArm from './locales/arm/translation.json'
import translationRu from './locales/ru/translation.json'


const resource = {
    arm: {
        translation: translationArm
    },
    ru: {
        translation: translationRu
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: resource,lng: localStorage.getItem("i18nextLng") || "arm",
        fallbackLng: localStorage.getItem("i18nextLng") || "arm",
        debug: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="Loading...">
            <App/>
        </Suspense>

    </React.StrictMode>,
    document.getElementById('root')
);

