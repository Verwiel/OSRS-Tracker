import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { HighscoresTable } from '../components/tables/HighscoresTable';

export const HighscoresPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Highscores</h1>
    </header>
    <section>
      <HighscoresTable />
    </section>
  </PageLayoutCharacter>
);
