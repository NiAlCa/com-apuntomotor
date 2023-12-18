import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.scss'
import { ServiciosMenu } from './ServiciosMenu';

interface MenuProps {
  column?: boolean
}

const Menu: React.FC<MenuProps> = ({column}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className='navbar d-flex' expand="md" >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav className={`mr-auto ${column ? 'flex-column align-items-center' : ''}`} navbar>
          <NavItem className=' d-flex align-items-center'>
            <NavLink href="#">INICIO</NavLink>
          </NavItem>
          <NavItem className=' d-flex align-items-center' >
            <NavLink href="#">CONTACTO</NavLink>
          </NavItem>
          <NavItem className=' d-flex align-items-start  '>
            <NavLink   href="#"><ServiciosMenu/></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
