import React from "react";
import { PageLayout } from "../components/PageLayout";
import { LevelsList } from "../components/LevelsList";

export const LevelsPage: React.FC = () => (
  <PageLayout>
    <h1>Levels Page</h1>
    <LevelsList />
  </PageLayout>
);
