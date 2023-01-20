import React from "react";
import { useCharacterCtx } from '../../../context/CharacterProvider';
import { NavBarTab } from "./NavBarTab";

export const NavBarTabs: React.FC = () => {
  const { username } = useCharacterCtx()
  return (
    <div className="nav-bar__tabs">
      {username &&
        <>
          <NavBarTab path="/levels" label="Levels" />
          <NavBarTab path="/activities" label="Activities" />
          <NavBarTab path="/highscores" label="Highscores" />
        </>
      }
      <NavBarTab path="/quests" label="Quests" />
    </div>
  );
};
