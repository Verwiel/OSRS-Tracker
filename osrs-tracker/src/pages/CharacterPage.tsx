import React from "react";
import { PageLayout } from "../components/PageLayout";
import { CharacterInfo } from "../components/CharacterInfo";

export const CharacterPage: React.FC = () => (
  <PageLayout>
    <h1>Character Page</h1>
    <CharacterInfo />
  </PageLayout>
);
