import React from 'react'
import { CharacterSearch } from "./CharacterSearch";
import { CharacterDisplay } from "./CharacterDisplay";
import { useCharacterCtx } from '../context/CharacterProvider';

export const CharacterPanel = () => {
  const { storedUsername, characterLoaded } = useCharacterCtx()

  return (
    <aside className='character-panel'>
      <CharacterSearch />
    </aside>
  )
}
