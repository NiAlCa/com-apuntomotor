import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.scss';
import { ServiciosMenu } from './ServiciosMenu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import punto from "../../assets/Logo2.webp";

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
    <nav className={`navbar navbar-expand-md mr-5 ${column ? 'flex-column' : ''}`}>
      <button className="navbar-toggler" type="button" onClick={toggle} aria-expanded={isOpen ? 'true' : 'false'} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon p-0"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
      <ul className={`navbar-nav align-items-center ${column ? 'flex-column align-items-center' : 'mr-auto'}`}>
      <li className='nav-item d-flex align-items-center hiddenHamburguer d-display d-sm-none'>
            <p  onClick={toggle} >x</p>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link' href="/">{t('inicio')}</a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <a className='nav-link' href="/contacto">{t('contacto')}</a>
          </li>
          <li className='nav-item d-flex align-items-start'>
            <a className='nav-link p-0' href="#">
              <ServiciosMenu />
            </a>
          </li>
          <li className='nav-item d-flex align-items-center'>
            <LanguageSwitcher />
          </li>
          <li className='nav-item d-flex align-items-center pt-5 d-display d-sm-none'>
          <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={punto} alt="punto" style={{ maxWidth: '200px',}} />
        </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
