import React from "react";
import { MobileNavBarTab } from "./MobileNavBarTab";

interface MobileNavBarTabsProps {
  handleClick: () => void;
}

export const MobileNavBarTabs: React.FC<MobileNavBarTabsProps> = ({
  handleClick,
}) => {

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/character"
        label="Character"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/quests"
        label="QUests"
        handleClick={handleClick}
      />
    </div>
  );
};
