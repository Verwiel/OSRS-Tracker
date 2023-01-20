import { useCharacterCtx } from '../context/CharacterProvider'

export const CharacterLookup = () => {
  const { userInput, lookupCharacter, usernameOnChange } = useCharacterCtx()

  return (
    <form onSubmit={lookupCharacter}>
      <label htmlFor="">
        Character Name
        <input type="text" name="userInput" value={userInput} onChange={(e) => usernameOnChange(e)} />
      </label>
      <button type='submit'>Lookup</button>
    </form>
  );
};
