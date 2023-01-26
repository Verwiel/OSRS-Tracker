import React from "react";
import { useCharacterCtx } from "../context/CharacterProvider";
import { PageLayout } from "../components/PageLayout";
import { HeroBanner } from "../components/HeroBanner";


export const HomePage: React.FC = () => {
  const { storedUsername, characterLoaded } = useCharacterCtx()

  return (
    <PageLayout>
      <HeroBanner />
    </PageLayout>
  )
}

