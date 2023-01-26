import { useCharacterCtx } from '../context/CharacterProvider'

export const CharacterDisplay = () => {
  const { storedUsername, gamemodeDisplay, clearCharacter } = useCharacterCtx()

  return (
    <section>
      <h2>Current Character: {storedUsername}</h2>
      <p>Gamemode: {gamemodeDisplay}</p>
      <button onClick={clearCharacter} className='button button--primary'>
        Change Character
      </button>
    </section>
  );
};
