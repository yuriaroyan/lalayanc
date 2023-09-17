import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DropdownLanguage = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem("i18nextLng") || "");

    const handleLangChange = evt => {
        const lang = evt.target.value;
        setLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <select className="langOption" onChange={handleLangChange} value={language}>
            <option value="arm">ARM</option>
            <option value="ru">RU</option>
        </select>
    );
};

export default DropdownLanguage;
