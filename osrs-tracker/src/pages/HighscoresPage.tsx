import React from "react";
import { PageLayout } from "../components/PageLayout";
import { HighscoresList } from '../components/HighscoresList'

export const HighscoresPage: React.FC = () => (
  <PageLayout>
    <header>
      <h1>Highscores</h1>
    </header>
    <HighscoresList />
  </PageLayout>
);
