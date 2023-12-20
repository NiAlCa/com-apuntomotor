import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./Menu.scss";

interface ServiciosMenuProps {}

export const ServiciosMenu: React.FC<ServiciosMenuProps> = () => {
  const [dropdown, setDropdown] = useState(false);
  const { t } = useTranslation();
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
        {t("services")}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => navigateTo("/neumaticos")}>
          {t("tires")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/aire")}>
          {t("airConditioning")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/mecanica")}>
          {t("mechanics")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/luces")}>
          {t("lightsAnalysis")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/llaves")}>
          {t("keyDuplication")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/matriculas")}>
          {t("plates")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/electronica")}>
          {t("electronics")}
        </DropdownItem>
        <DropdownItem onClick={() => navigateTo("/itv")}>
          {t("preITV")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
