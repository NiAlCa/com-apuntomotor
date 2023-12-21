import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`boton-flag ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        <div className="flag-container">
          <img src='/src/assets/idioma/Espanol.webp' alt="" />
        </div>
        <span className="language-code">ES</span>
      </button>
      <button
        className={`boton-flag ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        <div className="flag-container">
          <img src='/src/assets/idioma/English.webp' alt="" />
        </div>
        <span className="language-code">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
