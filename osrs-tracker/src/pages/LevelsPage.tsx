import React from "react";
import { PageLayout } from "../components/PageLayout";
import { LevelsList } from "../components/LevelsList";

export const LevelsPage: React.FC = () => (
  <PageLayout>
    <header>
      <h1>Skill Levels</h1>
    </header>
    <LevelsList />
  </PageLayout>
);
