import React from "react";
import { useCharacterCtx } from "../context/CharacterProvider";
// import LensIcon from '../assets/lens-icon.svg';

export const HeroBanner: React.FC = () => {
  const { storedUsername } = useCharacterCtx()

  return (
    <div className="hero-banner">
      <div className="hero-banner__logo">
        {/* <img className="hero-banner__image" src={LensIcon} alt="snapshot logo" /> */}
      </div>
      <h1 className="hero-banner__headline">OSRS Tracker</h1>
      {/* Description should be different for these 3 usecases: public, signed in, admin */}

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
