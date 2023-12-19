import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='boton-esp' onClick={() => changeLanguage('es')}> Español </button>
      <button className='boton-eng' onClick={() => changeLanguage('en')}> English </button>
    </div>
  );
};

export default LanguageSwitcher;
