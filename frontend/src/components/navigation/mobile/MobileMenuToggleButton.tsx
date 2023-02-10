import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

interface MobileMenuToggleButtonProps {
  icon: string;
  handleClick: () => void;
}

export const MobileMenuToggleButton: React.FC<MobileMenuToggleButtonProps> = ({
  icon,
  handleClick,
}) => {
  let iconDisplay = icon === 'close' ? faXmark : faBars
  return (
    <span
      className="mobile-nav-bar__toggle material-icons"
      id="mobile-menu-toggle-button"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={iconDisplay} />
    </span>
  );
};
