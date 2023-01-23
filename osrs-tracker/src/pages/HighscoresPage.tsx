import React from "react";
import { PageLayout } from "../components/PageLayout";
import { HighscoresList } from '../components/HighscoresList'

export const HighscoresPage: React.FC = () => (
  <PageLayout>
    <h1>Highscores Page</h1>
    <HighscoresList />
  </PageLayout>
);
