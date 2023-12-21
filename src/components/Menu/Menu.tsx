import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
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
    <Navbar className='navbar d-flex' expand="md" >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className={`mr-auto ${column ? 'flex-column align-items-center'  : ''}`} navbar>
          <NavItem className=' d-flex align-items-center'>
            <NavLink href="/">{t('inicio')}</NavLink>
          </NavItem>
          <NavItem className=' d-flex align-items-center' >
            <NavLink href="/contacto">{t('contacto')}</NavLink>
          </NavItem>
          <NavItem className=' d-flex align-items-start'>
            <NavLink href="#"><ServiciosMenu/></NavLink>
          </NavItem>
          <NavItem className=' d-flex align-items-center'>
            <LanguageSwitcher />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
