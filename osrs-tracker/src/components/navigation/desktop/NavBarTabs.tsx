import React from "react";
import { NavBarTab } from "./NavBarTab";

export const NavBarTabs: React.FC = () => {
  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/levels" label="Levels" />
      <NavBarTab path="/activities" label="Activities" />
      <NavBarTab path="/highscores" label="Highscores" />
      <NavBarTab path="/quests" label="Quests" />
    </div>
  );
};
