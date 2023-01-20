import { useCharacterCtx } from '../context/CharacterProvider'

export const CharacterLookup = () => {
  const { userInput, lookupCharacter, usernameOnChange, gamemodeOnChange } = useCharacterCtx()

  return (
    <form onSubmit={lookupCharacter}>
      <label htmlFor="">
        Character Name
        <input 
          type="text" 
          name="userInput" 
          value={userInput.username} 
          minLength={1} 
          required={true} 
          onChange={(e) => usernameOnChange(e)} 
        />
      </label>
      <label htmlFor="">
        Gamemode
        <select name="gamemode" value={userInput.gamemode} onChange={(e) => gamemodeOnChange(e)}>
          <option value="regular">Regular</option>
          <option value="ironman">Ironman</option>
          <option value="hcim">Hardcore Ironman</option>
          <option value="uim">Ultimate Ironman</option>
        </select>
      </label>
      <button type='submit'>Lookup</button>
    </form>
  );
};
