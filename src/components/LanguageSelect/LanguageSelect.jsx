import React, { useEffect, useState } from "react";
import "../../layout/Header/header.scss";
import i18next from "../../utils/lang/i18n";

const LanguageSelect = () => {
  const languages = [
    { code: "ru", lang: "РУС" },
    { code: "kg", lang: "КЫР" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "kg"
  );

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    if (newLanguage !== selectedLanguage) {
      setSelectedLanguage(newLanguage);
      localStorage.setItem("selectedLanguage", newLanguage);
      i18next.changeLanguage(newLanguage);
    }
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && storedLanguage !== selectedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18next.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <select
      className="header__navigation-select .mobile"
      onChange={handleLanguageChange}
      value={selectedLanguage}
    >
      {languages.map((lang) => (
        <option
          className="header__navigation-option"
          key={lang.code}
          value={lang.code}
        >
          {lang.lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
