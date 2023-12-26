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
    <div
      className={`dropdown mr-sm-5 m-0 ${dropdown ? 'show' : ''}`}
      onMouseOver={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      <button
        className="btn btn-transparent dropdown-toggle p-0 border-0"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={dropdown ? 'true' : 'false'}
      >
        {t('services')}
      </button>
      <div className={`dropdown-menu mx-5 ${dropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={() => navigateTo('/neumaticos')}>
          {t('tires')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/aire')}>
          {t('airConditioning')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/mecanica')}>
          {t('mechanics')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/luces')}>
          {t('lightsAnalysis')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/llaves')}>
          {t('keyDuplication')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/matriculas')}>
          {t('plates')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/electronica')}>
          {t('electronics')}
        </a>
        <a className="dropdown-item" onClick={() => navigateTo('/itv')}>
          {t('preITV')}
        </a>
      </div>
    </div>
  );
};
