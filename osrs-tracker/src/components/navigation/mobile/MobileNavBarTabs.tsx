import React from "react";
import { useCharacterCtx } from '../../../context/CharacterProvider';
import { MobileNavBarTab } from "./MobileNavBarTab";

interface MobileNavBarTabsProps {
  handleClick: () => void;
}

export const MobileNavBarTabs: React.FC<MobileNavBarTabsProps> = ({ handleClick }) => {
  const { username } = useCharacterCtx()
  
  return (
    <div className="mobile-nav-bar__tabs">
      {username &&
        <>
          <MobileNavBarTab path="/levels" label="Levels" handleClick={handleClick} />
          <MobileNavBarTab path="/activities" label="Activities" handleClick={handleClick} />
          <MobileNavBarTab path="/highscores" label="Highscores" handleClick={handleClick} />
        </>
      }
      <MobileNavBarTab
        path="/quests"
        label="QUests"
        handleClick={handleClick}
      />
    </div>
  );
};
