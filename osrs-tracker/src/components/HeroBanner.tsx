import React from "react";
import { useCharacterCtx } from "../context/CharacterProvider";

export const HeroBanner: React.FC = () => {
  const { storedUsername } = useCharacterCtx()

  return (
    <div className="hero-banner">
      <h1 className="hero-banner__headline">OSRS Tracker</h1>
      <p className="hero-banner__description">
        View all quests and track which ones you've completed. 
        {storedUsername ? 
          ' Check your levels, activity scores, and highscores. '
          :
          ' Select a character to view your levels, activity scores, and highscores.'
        }
      </p>
    </div>
  );
};
