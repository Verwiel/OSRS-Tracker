import React from "react";
import { NavLink } from "react-router-dom";
import SnapshotLogo from '../../../logo.svg';

interface MobileNavBarBrandProps {
  handleClick: () => void;
}

export const MobileNavBarBrand: React.FC<MobileNavBarBrandProps> = ({
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src={SnapshotLogo}
          alt="snapshot logo"
          width="82"
          height="24"
        />
      </NavLink>
    </div>
  );
};
