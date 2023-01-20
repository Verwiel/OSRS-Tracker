import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CharacterPage } from "./pages/CharacterPage";
import { QuestsPage } from "./pages/QuestsPage";
import { NotFoundPage } from "./pages/NotFoundPage";


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/levels" element={<CharacterPage />} />
        <Route path="/activities" element={<CharacterPage />} />
        <Route path="/highscores" element={<CharacterPage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
