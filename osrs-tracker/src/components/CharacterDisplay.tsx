import { useCharacterCtx } from '../context/CharacterProvider'

export const CharacterDisplay = () => {
  const { username, clearCharacter } = useCharacterCtx()

  return (
    <section>
        <h2>Current Character: {username}</h2>
      <button onClick={clearCharacter}>Change Character</button>
    </section>
  );
};
