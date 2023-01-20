import React from "react";
import { useCharacterCtx } from "../context/CharacterProvider";
import { PageLayout } from "../components/PageLayout";
import { CharacterLookup } from "../components/CharacterLookup";
import { CharacterDisplay } from "../components/CharacterDisplay";

export const HomePage: React.FC = () => {
  const { username } = useCharacterCtx()

  return (
    <PageLayout>
      <h1>Homepage</h1>
      {username.length > 0 ?
        <CharacterDisplay />
      :
        <CharacterLookup />
      }
    </PageLayout>
  )
}

