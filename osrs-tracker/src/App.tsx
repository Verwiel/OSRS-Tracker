import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { HighscoresPage } from "./pages/HighscoresPage";
import { LevelsPage } from "./pages/LevelsPage";
import { QuestsPage } from "./pages/QuestsPage";
import { NotFoundPage } from "./pages/NotFoundPage";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/highscores" element={<HighscoresPage />} />
        <Route path="/levels" element={<LevelsPage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
