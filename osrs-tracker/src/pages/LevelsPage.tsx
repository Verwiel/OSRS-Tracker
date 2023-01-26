import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { SkillsTable } from "../components/tables/SkillsTable";

export const LevelsPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Skill Levels</h1>
    </header>
    <section>
      <SkillsTable />
    </section>
  </PageLayoutCharacter>
);
