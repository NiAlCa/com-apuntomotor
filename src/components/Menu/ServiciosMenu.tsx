import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./Menu.scss";

interface ServiciosMenuProps {}

export const ServiciosMenu: React.FC<ServiciosMenuProps> = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <Dropdown
      isOpen={dropdown}
      toggle={() => {}}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DropdownToggle caret className="dropdown">
        SERVICIOS
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => navigateTo("/neumaticos")}>
          Neumáticos Y Sistema De Frenado
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/aire")}>
          Aire Acondicionado
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/mecanica")}>
          Mecánica General
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/luces")}>
          Análisis De Luces
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/llaves")}>
          Llaves De Coche
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/matriculas")}>
          Matrículas
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/electronica")}>
          Electrónica
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/itv")}>
          Pre ITV
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
