import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { HighscoresList } from '../components/HighscoresList';

export const HighscoresPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Highscores</h1>
    </header>
    <section>
      <HighscoresList />
    </section>
  </PageLayoutCharacter>
);
