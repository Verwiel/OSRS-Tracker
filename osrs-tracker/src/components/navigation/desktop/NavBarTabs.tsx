import React from "react";
import { NavBarTab } from "./NavBarTab";

export const NavBarTabs: React.FC = () => {
  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/character" label="Character" />
      <NavBarTab path="/quests" label="Quests" />
    </div>
  );
};
