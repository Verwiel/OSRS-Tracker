import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { LevelsList } from "../components/LevelsList";

export const LevelsPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Skill Levels</h1>
    </header>
    <section>
      <LevelsList />
    </section>
  </PageLayoutCharacter>
);
