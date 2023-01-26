import React from "react";

export const HeroBanner: React.FC = () => {

  return (
    <div className="hero-banner">
      <h1 className="hero-banner__headline">OSRS Tracker</h1>
      <p className="hero-banner__description">
        The purpose of this app is to track Old School Runescape quests (manually) and your characters levels and activities (API calls).
      </p>
      <div className='hero-banner__disclaimer'>
        <p>Disclaimers:</p>
        <ul>
          <li>
            I know what you're thinking, but the styles are supposed to look old school! They are based off a mix of the game and <a href="https://secure.runescape.com/m=hiscore_oldschool/overall">OSRS Highscores</a> (where I am also getting the font, images, and icons from).
          </li>
          <li>
            This app was developed as a portfolio piece to show knowledge of React/Typescript for the frontend and Python/Flask for the backend rest API/web-scraping. 
          </li>
          <li>
            Web scraping is done to the <a href="https://oldschool.runescape.wiki/">OSRS Wiki</a> and the <a href="https://runescape.wiki/w/Application_programming_interface">OSRS API</a> every day to check for added content like skills, minigames, or quests.
          </li>
          <li>
            This app utilizes local storage to avoid too many API calls and avoid needing to host a database.
          </li>
        </ul>
      </div>
    </div>
  );
};
