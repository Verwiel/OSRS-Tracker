import React from "react";
import { PageLayoutCharacter } from "../components/PageLayoutCharacter";
import { SkillsTable } from "../components/tables/SkillsTable";

export const LevelsPage: React.FC = () => (
  <PageLayoutCharacter>
    <header>
      <h1>Skill Levels</h1>
    </header>
    <section>
      <p style={{color: 'white'}}>
        Skill Training Guides: <a href='https://oldschool.runescape.wiki/w/Skill_training_guides' target="_blank" rel="noopener noreferrer">
        OSRS Wiki
      </a>
      </p>
      <SkillsTable />
    </section>
  </PageLayoutCharacter>
);
