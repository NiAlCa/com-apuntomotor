import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import './Menu.scss'

interface ServiciosMenuProps {}

export const ServiciosMenu: React.FC<ServiciosMenuProps> = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <Dropdown
      isOpen={dropdown}
      toggle={() => {}}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DropdownToggle caret className="dropdown">SERVICIOS</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <a href="">Neumáticos Y Sistema De Frenado</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Aire Acondicionado</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Mecánica General</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Análisis De Luces</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Llaves De Coche</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Matrículas</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Electrónica</a>
        </DropdownItem>
        <DropdownItem>
          <a href="">Pre ITV</a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
