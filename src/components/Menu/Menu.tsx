import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.scss';
import { ServiciosMenu } from './ServiciosMenu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

interface MenuProps {
  column?: boolean;
}

const Menu: React.FC<MenuProps> = ({ column }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-md px-5${column ? 'flex-column' : ''}`}>
      <button className="navbar-toggler" type="button" onClick={toggle} aria-expanded={isOpen ? 'true' : 'false'} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
      <ul className={`navbar-nav ${column ? 'flex-column align-items-center' : 'mr-auto'}`}>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link' href="/">{t('inicio')}</a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link' href="/contacto">{t('contacto')}</a>
          </li>
          <li className='nav-item d-flex align-items-start'>
            <a className='nav-link' href="#">
              <ServiciosMenu />
            </a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
