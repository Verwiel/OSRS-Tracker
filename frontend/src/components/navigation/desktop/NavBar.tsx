import React from "react";
import { NavBarBrand } from "./NavBarBrand";
import { NavBarTabs } from "./NavBarTabs";

export const NavBar: React.FC = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
      </nav>
    </div>
  );
};
