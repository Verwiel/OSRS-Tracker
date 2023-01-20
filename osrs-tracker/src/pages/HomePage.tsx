import React from "react";
import { useCharacterCtx } from "../context/CharacterProvider";
import { PageLayout } from "../components/PageLayout";
import { CharacterLookup } from "../components/CharacterLookup";
import { CharacterDisplay } from "../components/CharacterDisplay";

export const HomePage: React.FC = () => {
  const { storedUsername } = useCharacterCtx()

  return (
    <PageLayout>
      <h1>Homepage</h1>
      {storedUsername ?
        <CharacterDisplay />
      :
        <CharacterLookup />
      }
    </PageLayout>
  )
}

