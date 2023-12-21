import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.scss';

interface ServiciosMenuProps {}

export const ServiciosMenu: React.FC<ServiciosMenuProps> = () => {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();



  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className={`dropdown mr-sm-5  ${dropdown ? 'show' : ''}`} onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
      <button
        className="btn btn-transparent dropdown-toggle p-0 border-0"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={dropdown ? 'true' : 'false'}
      >
        {t('services')}
      </button>
      <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" onClick={() => navigateTo('/neumaticos')}>{t('tires')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/aire')}>{t('airConditioning')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/mecanica')}>{t('mechanics')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/luces')}>{t('lightsAnalysis')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/llaves')}>{t('keyDuplication')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/matriculas')}>{t('plates')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/electronica')}>{t('electronics')}</a></li>
        <li><a className="dropdown-item" onClick={() => navigateTo('/itv')}>{t('preITV')}</a></li>
      </ul>
    </div>
  );
};
