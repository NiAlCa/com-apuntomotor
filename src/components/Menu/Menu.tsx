import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.scss'
import { ServiciosMenu } from './ServiciosMenu';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className='navbar' expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">INICIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><ServiciosMenu/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">BLOG</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">CONTACTO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">NO LO SE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">NO LO SE</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Menu;
