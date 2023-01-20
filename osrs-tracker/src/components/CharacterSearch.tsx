
import { useCharacterCtx } from '../context/CharacterProvider'

export const CharacterSearch = () => {
  const { username, lookupCharacter, usernameOnChange } = useCharacterCtx()

  return (
    <form onSubmit={lookupCharacter}>
      <label htmlFor="">
        Character Name
        <input type="text" name="username" value={username} onChange={(e) => usernameOnChange(e)} />
      </label>
      <button type='submit'>Lookup</button>
    </form>
  );
};
