import React, { createContext, useState, useContext } from 'react'
import axios from 'axios'
import { backendURL } from '../config/Config'
import { ProviderType } from '../models/provider'
import { CharacterType } from '../models/character-info'
import defaultChearacterInfo from '../data/character-info.json'
// import defaultQuestInfo from '../data/quest-info.json'

const CharacterContext = createContext<characterContextType | null>(null);

export const useCharacterCtx = () => {
  const characterContext = useContext(CharacterContext);

  if (!characterContext) {
    throw new Error("useCharacterCtx has to be used within <CharacterContext.Provider>");
  }
    
  return characterContext;
};
  
interface characterContextType {
  username: string;
  characterInfo: CharacterType;
  userInput: string;
  clearCharacter: () => void;
  usernameOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lookupCharacter: (e: React.FormEvent<HTMLElement>) => void;
}


export const CharacterProvider: React.FC<ProviderType> = ({ children }) => {
  let storedUsername = localStorage.getItem('osrs-username')
  let storedCharacterInfo = localStorage.getItem('osrs-character-info')
  // let storedQuests = localStorage.getItem('osrs-quests')


  const [userInput, setUserInput] = useState(storedUsername ? storedUsername : '')
  const [username, setUsername] = useState(storedUsername ? storedUsername : '')
  const [characterInfo, setCharacterInfo] = useState(
    storedCharacterInfo ? JSON.parse(storedCharacterInfo) : defaultChearacterInfo
  )

  const lookupCharacter = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    localStorage.removeItem('osrs-username')
    try {
      let { data } = await axios.get(`${backendURL}/highscores/check/${userInput}`)
      if(data.status === 200){
        localStorage.setItem('osrs-username', userInput);
        setUsername(userInput)
        getCharacterInfo(userInput)
      } else {
        alert(`No player "${userInput}" found`)
        clearCharacter()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const usernameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const clearCharacter = () => {
    localStorage.removeItem('osrs-username')
    localStorage.removeItem('osrs-character-info')
    setUsername('')
    setUserInput('')
    setCharacterInfo(defaultChearacterInfo)
  }

  const getCharacterInfo = async (username: string) => {
    try {
      // need to add to backend for cors errors
      let { data } = await axios.get(`${backendURL}/highscores/${username}`)
      setCharacterInfo(data)
      localStorage.setItem('osrs-character-info', JSON.stringify(data))
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <CharacterContext.Provider value={{
      userInput, 
      username, 
      characterInfo, 
      usernameOnChange, 
      lookupCharacter,       
      clearCharacter
    }}>
      {children}
    </CharacterContext.Provider>
  )
}
