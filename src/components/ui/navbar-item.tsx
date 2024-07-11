"use client";

import React, { useState } from "react";
import NavbarItemDropdown, { DropdownCategory } from "./navbar-item-dropdown";

interface NavbarItemProps {
  title: string;
  dropdownItems?: DropdownCategory[];
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, dropdownItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className={`navbar-h4 ${isHovered ? "hovered" : ""}`}>{title}</h4>
      {dropdownItems && (
        <div>
          <NavbarItemDropdown items={dropdownItems} isVisible={isHovered} />
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
