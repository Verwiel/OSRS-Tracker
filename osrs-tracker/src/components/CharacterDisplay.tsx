import { useCharacterCtx } from '../context/CharacterProvider'

export const CharacterDisplay = () => {
  const { storedUsername, gamemodeDisplay } = useCharacterCtx()

  return (
    <section>
      <h2>Current Character: {storedUsername}</h2>
      <p>Gamemode: {gamemodeDisplay}</p>
    </section>
  );
};
