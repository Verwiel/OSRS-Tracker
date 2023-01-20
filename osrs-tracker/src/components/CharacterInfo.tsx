import React, { useEffect } from "react";
import { useCharacterCtx } from "../context/CharacterProvider";


export const CharacterInfo: React.FC = () => {
  const { characterInfo } = useCharacterCtx()
  console.log(characterInfo)

  return (
    <section>
      <p>info</p>
    </section>
  );
};
