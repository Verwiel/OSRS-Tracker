import React from "react";
import { PageLayout } from "../components/PageLayout";
import { LevelsList } from "../components/LevelsList";

export const LevelsPage: React.FC = () => (
  <PageLayout>
    <h1>Skilll Levels</h1>
    <LevelsList />
  </PageLayout>
);
