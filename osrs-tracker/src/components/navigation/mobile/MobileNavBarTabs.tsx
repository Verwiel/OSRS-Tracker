import React from "react";
import { MobileNavBarTab } from "./MobileNavBarTab";

interface MobileNavBarTabsProps {
  handleClick: () => void;
}

export const MobileNavBarTabs: React.FC<MobileNavBarTabsProps> = ({ handleClick }) => {
  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab path="/levels" label="Levels" handleClick={handleClick} />
      <MobileNavBarTab path="/activities" label="Activities" handleClick={handleClick} />
      <MobileNavBarTab path="/highscores" label="Highscores" handleClick={handleClick} />
      <MobileNavBarTab
        path="/quests"
        label="Quests"
        handleClick={handleClick}
      />
    </div>
  );
};
