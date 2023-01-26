import React from "react";
import { useCharacterCtx } from "../context/CharacterProvider";
import { PageLayout } from "../components/PageLayout";
import { CharacterLookup } from "../components/CharacterLookup";
import { CharacterDisplay } from "../components/CharacterDisplay";
import { HeroBanner } from "../components/HeroBanner";
import { Features } from "../components/Features";


export const HomePage: React.FC = () => {
  const { storedUsername, characterLoaded } = useCharacterCtx()

  return (
    <PageLayout>
      <HeroBanner />
      <Features />
      {storedUsername || characterLoaded ?
        <CharacterDisplay />
      :
        <CharacterLookup />
      }
    </PageLayout>
  )
}

