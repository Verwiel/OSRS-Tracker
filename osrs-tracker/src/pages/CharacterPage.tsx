import React from "react";
import { PageLayout } from "../components/PageLayout";
import { CharacterSearch } from "../components/CharacterSearch";
import { CharacterInfo } from "../components/CharacterInfo";
import { CharacterProvider } from "../context/CharacterProvider";

export const CharacterPage: React.FC = () => (
  <CharacterProvider>
    <PageLayout>
      <h1>Character Page</h1>
      <CharacterSearch />
      <CharacterInfo />
    </PageLayout>
  </CharacterProvider>
);
