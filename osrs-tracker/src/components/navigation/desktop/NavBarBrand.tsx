
import React from "react";
import { NavLink } from "react-router-dom";
import SnapshotLogo from '../../../logo.svg';

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src={SnapshotLogo}
          alt="snapshot logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
